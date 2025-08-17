import { IconClock, IconFolder, IconMusic } from "@tabler/icons-react";

export function PlaylistStats() {
	return (
		<div className="mb-5 grid grid-cols-3 gap-5">
			<div className="flex items-center justify-start gap-2 rounded-2xl bg-gray-900 px-5 py-6">
				<div className="rounded-full bg-gray-800 px-3 py-3">
					<IconFolder color="#9C62F5" size={30} />
				</div>
				<div className="ml-2">
					<div className="text-gray-400">Total Playlists</div>
					<div className="text-2xl font-bold">6</div>
				</div>
			</div>
			<div className="flex items-center justify-start gap-2 rounded-2xl bg-gray-900 px-5 py-10">
				<div className="rounded-full bg-gray-800 px-3 py-3">
					<IconMusic color="#9C62F5" size={30} />
				</div>
				<div className="ml-2">
					<div className="text-gray-400">Total Tracks</div>
					<div className="text-2xl font-bold">74</div>
				</div>
			</div>
			<div className="flex items-center justify-start gap-2 rounded-2xl bg-gray-900 px-5 py-10">
				<div className="rounded-full bg-gray-800 px-3 py-3">
					<IconClock color="#9C62F5" size={30} />
				</div>
				<div className="ml-2">
					<div className="text-gray-400">Total Duration</div>
					<div className="text-2xl font-bold">20h 30m</div>
				</div>
			</div>
		</div>
	);
}
