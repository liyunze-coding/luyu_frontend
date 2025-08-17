import { useState } from "react";
import { Download } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";

type UploadResponse = {
	document: {
		id: string;
		file_type: string;
		filename: string;
		file: string;
		created_at: string;
	};
};

export function CreateNewAudio() {
	const [files, setFiles] = useState<Array<File>>([]);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState<string>("");
	const [uploadedDocuments, setUploadedDocuments] = useState<
		Array<UploadResponse["document"]>
	>([]);

	const handleFileUpload = async (uploadedFiles: Array<File>) => {
		if (uploadedFiles.length === 0) return;

		setFiles(uploadedFiles);
		setIsUploading(true);
		setUploadStatus("Uploading files...");

		try {
			const apiUrl =
				import.meta.env.VITE_API_URL || "http://localhost:8000";
			const uploadPromises = uploadedFiles.map(async (file) => {
				const formData = new FormData();
				formData.append("file", file);

				const response = await fetch(`${apiUrl}/document/upload`, {
					method: "POST",
					body: formData,
				});

				if (!response.ok) {
					throw new Error(
						`Failed to upload ${file.name}: ${response.statusText}`,
					);
				}

				const result: UploadResponse = await response.json();
				return result.document;
			});

			const results = await Promise.all(uploadPromises);
			setUploadedDocuments(results);

			setUploadStatus(
				`Successfully uploaded ${uploadedFiles.length} file(s)`,
			);
			console.log("Upload results:", results);

			// Clear success message after 3 seconds
			setTimeout(() => setUploadStatus(""), 3000);
		} catch (error) {
			console.error("Upload failed:", error);
			setUploadStatus(
				error instanceof Error ? error.message : "Upload failed",
			);

			// Clear error message after 5 seconds
			setTimeout(() => setUploadStatus(""), 5000);
		} finally {
			setIsUploading(false);
		}
	};

	const downloadDocument = async (documentId: string, filename: string) => {
		try {
			const apiUrl =
				import.meta.env.VITE_API_URL || "http://localhost:8000";
			const response = await fetch(
				`${apiUrl}/document/get-document/${documentId}`,
			);

			if (!response.ok) {
				throw new Error(`Download failed: ${response.statusText}`);
			}

			const data = await response.json();

			// Open the URL from the response
			if (data.url) {
				window.open(data.url, "_blank");
			} else {
				throw new Error("No download URL found in response");
			}
		} catch (error) {
			console.error("Download failed:", error);
			alert("Download failed. Please try again.");
		}
	};

	return (
		<div className="py-10">
			<h1 className="mb-10 text-3xl font-bold">Create New Audio</h1>

			{/* Upload Status */}
			{uploadStatus && (
				<div
					className={`mb-6 rounded-lg border p-4 transition-colors ${
						uploadStatus.includes("Successfully")
							? "border-green-300 bg-green-100 text-green-800 dark:border-green-700 dark:bg-green-950 dark:text-green-200"
							: uploadStatus.includes("failed") ||
								  uploadStatus.includes("Failed")
								? "border-red-300 bg-red-100 text-red-800 dark:border-red-700 dark:bg-red-950 dark:text-red-200"
								: "border-blue-300 bg-blue-100 text-blue-800 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-200"
					}`}
				>
					{uploadStatus}
				</div>
			)}

			{/* Loading Indicator */}
			{isUploading && (
				<div className="mb-6 flex items-center gap-3 rounded-lg bg-gray-100 p-4 dark:bg-neutral-900">
					<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-violet-600"></div>
					<span className="text-gray-700 dark:text-gray-200">
						Processing upload...
					</span>
				</div>
			)}

			<FileUpload onChange={handleFileUpload} />

			{/* Uploaded Documents */}
			{uploadedDocuments.length > 0 && (
				<div className="mt-8">
					<h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
						Uploaded Documents
					</h3>
					<div className="space-y-3">
						{uploadedDocuments.map((doc) => (
							<div
								key={doc.id}
								className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
							>
								<div className="flex-1">
									<h4 className="font-medium text-gray-900 dark:text-gray-100">
										{doc.filename}
									</h4>
									<div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
										<p>Type: {doc.file_type}</p>
										<p>
											Created:{" "}
											{new Date(
												doc.created_at,
											).toLocaleString()}
										</p>
										<p className="font-mono text-xs">
											ID: {doc.id}
										</p>
									</div>
								</div>
								<button
									onClick={() =>
										downloadDocument(doc.id, doc.filename)
									}
									className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white transition-colors hover:bg-violet-700"
								>
									<Download size={16} />
									Download
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
