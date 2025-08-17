import { createFileRoute } from "@tanstack/react-router";
import { RecentlyGenerated } from "@/components/home/RecentlyGenerated";
import { CreateNewAudio } from "@/components/home/CreateNewAudio";
import { Hero } from "@/components/home/Hero";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="w-full px-10 py-10">
			<Hero />
			<CreateNewAudio />
		</div>
	);
}
