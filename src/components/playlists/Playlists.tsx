import { IconFolder, IconPlayerPlay } from "@tabler/icons-react";

export function Playlists() {
	return (
		<div className="grid grid-cols-3 gap-5">
			<div className="rounded-xl bg-[#252035] px-5 py-5">
				<IconFolder color="#9C62F5" size={32} />
				<div className="mt-2 mb-1 text-xl font-medium">
					Research Papers
				</div>
				<div className="text-gray-400">
					Academic content converted to audio for deep learning
					sessions
				</div>
				<div className="my-3 flex flex-row items-center justify-between text-sm text-gray-400">
					<div>8 items</div>
					<div>2h 15m</div>
				</div>
				<div className="flex flex-row items-center justify-between">
					<div className="text-xs text-gray-400">
						Updated 2 days ago
					</div>
					<div>
						<button className="flex items-center justify-center gap-2 rounded-xl bg-purple-500 py-2 pr-5 pl-3">
							<IconPlayerPlay size={16} />
							<div className="font-medium">Play</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
