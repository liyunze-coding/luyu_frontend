import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { Doc } from "@/components/documents/types";
import DocumentsHeader from "@/components/documents/DocumentsHeader.tsx";
import DocumentsToolbar from "@/components/documents/DocumentsToolbar";
import DocumentsGrid from "@/components/documents/DocumentsGrid";
import DocumentsList from "@/components/documents/DocumentsList";
import EmptyState from "@/components/documents/EmptyState";

export const Route = createFileRoute("/documents")({
	component: DocumentsPage,
});

function DocumentsPage() {
	const [query, setQuery] = useState("");
	const [view, setView] = useState<"grid" | "list">("grid");
	const [type, setType] = useState<"all" | Doc["type"]>("all");
	const [sort, setSort] = useState<"recent" | "name" | "size">("recent");
	const [documents, setDocuments] = useState<Array<Doc>>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch documents from API
	useEffect(() => {
		const apiURL = import.meta.env.VITE_API_URL;
		console.log(apiURL);
		const fetchDocuments = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const response = await fetch(`${apiURL}/document/get-document`);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setDocuments(data);
			} catch (err) {
				console.error("Failed to fetch documents:", err);
				setError(
					err instanceof Error
						? err.message
						: "Failed to fetch documents",
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchDocuments();
	}, []);

	const docs = useMemo(() => {
		let list = documents.slice();
		if (type !== "all") list = list.filter((d) => d.type === type);
		if (query.trim()) {
			const q = query.toLowerCase();
			list = list.filter((d) => d.name.toLowerCase().includes(q));
		}
		switch (sort) {
			case "recent":
				list.sort(
					(a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt),
				);
				break;
			case "name":
				list.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "size":
				list.sort((a, b) => b.sizeKB - a.sizeKB);
				break;
		}
		return list;
	}, [documents, query, type, sort]);

	const handleUpload = () => console.log("upload clicked");
	const handleNewFolder = () => console.log("new folder clicked");

	if (isLoading) {
		return (
			<div className="w-full px-6 py-8">
				<div className="flex min-h-[400px] items-center justify-center">
					<div className="text-center">
						<div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-violet-600"></div>
						<p className="text-gray-600 dark:text-gray-400">
							Loading documents...
						</p>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full px-6 py-8">
				<div className="flex min-h-[400px] items-center justify-center">
					<div className="text-center">
						<div className="mb-4 text-red-500">⚠️</div>
						<p className="mb-4 text-red-600 dark:text-red-400">
							Failed to load documents
						</p>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							{error}
						</p>
						<button
							onClick={() => window.location.reload()}
							className="mt-4 rounded-lg bg-violet-600 px-4 py-2 text-white transition-colors hover:bg-violet-700"
						>
							Retry
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full px-6 py-8">
			<DocumentsHeader
				onUpload={handleUpload}
				onNewFolder={handleNewFolder}
			/>
			<DocumentsToolbar
				query={query}
				onQuery={setQuery}
				type={type}
				onType={setType}
				sort={sort}
				onSort={setSort}
				view={view}
				onView={setView}
			/>
			<div className="mt-6">
				{docs.length === 0 ? (
					<EmptyState
						onUpload={handleUpload}
						onNewFolder={handleNewFolder}
					/>
				) : view === "grid" ? (
					<DocumentsGrid docs={docs} />
				) : (
					<DocumentsList docs={docs} />
				)}
			</div>
		</div>
	);
}
