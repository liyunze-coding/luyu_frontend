import { createFileRoute } from "@tanstack/react-router";
import { Playlist } from "@/components/library/Playlists";
import { RecentlyAdded } from "@/components/library/RecentlyAdded";

export const Route = createFileRoute("/library")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="w-full px-10 py-10">
			<h1 className="mb-2 text-4xl font-bold">Your Library</h1>
			<p className="text-lg text-gray-400">
				Manage your audio content and playlists
			</p>
			<Playlist />
			<RecentlyAdded />
		</div>
	);
}
