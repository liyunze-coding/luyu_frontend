import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { CreateNewAudio } from "@/components/home/CreateNewAudio";
import { RecentlyGenerated } from "@/components/home/RecentlyGenerated";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="w-full px-10 py-10">
			<Hero />
			<CreateNewAudio />
			<RecentlyGenerated />
		</div>
	);
}
