import {
	IconFileDescription,
	IconLink,
	IconPhoto,
	IconUpload,
} from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";

export function CreateNewAudio() {
	const navigate = useNavigate();

	return (
		<div className="py-10">
			<h1 className="mb-10 text-3xl font-bold">Create New Audio</h1>
			<div className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-700 bg-gray-900 py-10 transition-colors duration-150 hover:border-purple-500 hover:bg-[#201840]">
				<div className="mb-5 w-fit rounded-full bg-purple-600 px-3 py-3">
					<IconUpload
						size={40}
						className="transition-transform duration-150 group-hover:-translate-y-1"
					/>
				</div>
				<h2 className="text-2xl font-medium">Upload Your Document</h2>
				<p className="text-gray-300">
					Drag and drop your files here, or click to browse
				</p>
				<div className="mt-10 grid grid-cols-3 items-center justify-center gap-10">
					<button
						onClick={() => navigate({ to: "/upload" })}
						className="flex flex-col items-center justify-center gap-3 rounded-lg border border-solid border-gray-700 bg-black px-10 py-5 transition-colors duration-150 hover:border-purple-700 hover:bg-gray-800"
					>
						<IconFileDescription size={20} />
						<p className="text-sm font-bold">PDF & Documents</p>
					</button>
					<button className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-solid border-gray-700 bg-black px-10 py-5 transition-colors duration-150 hover:border-purple-700 hover:bg-gray-800">
						<IconPhoto size={20} />
						<p className="text-sm font-bold">Images</p>
					</button>
					<button className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-solid border-gray-700 bg-black px-10 py-5 transition-colors duration-150 hover:border-purple-700 hover:bg-gray-800">
						<IconLink size={20} />
						<p className="text-sm font-bold">Links & URLs</p>
					</button>
				</div>
				<p className="mt-6 text-sm">
					Supported formats:{" "}
					<span className="mx-2 text-lime-400">PDF</span>
					<span className="text-gray-400">•</span>
					<span className="mx-2 text-lime-400">DOCX</span>
					<span className="text-gray-400">•</span>
					<span className="mx-2 text-lime-400">Images</span>
					<span className="text-gray-400">•</span>
					<span className="mx-2 text-lime-400">URLs</span>
				</p>
			</div>
		</div>
	);
}
