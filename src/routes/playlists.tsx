import { createFileRoute } from "@tanstack/react-router";
import { PlaylistStats } from "@/components/playlists/PlaylistStats";
import { Playlists } from "@/components/playlists/Playlists";

export const Route = createFileRoute("/playlists")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="w-full px-10 py-10">
			<h1 className="mb-5 text-4xl font-bold">Your Playlists</h1>
			<PlaylistStats />
			<Playlists />
		</div>
	);
}
