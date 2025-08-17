import { IconFolder } from "@tabler/icons-react";

export function Playlists() {
	return (
		<div className="grid grid-cols-3 gap-5">
			<div className="px-5 py-5">
				<IconFolder color="#9C62F5" size={32} />
				<div className="mt-2 text-xl font-medium">Research Papers</div>
			</div>
		</div>
	);
}
