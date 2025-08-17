import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function CreateNewAudio() {
	const [files, setFiles] = useState<Array<File>>([]);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState<string>("");

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

				return response.json();
			});

			const results = await Promise.all(uploadPromises);
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
		</div>
	);
}
