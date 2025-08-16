// import Podcast from './images/podcast.webp'

import { GradientTitle } from "@/components/ui/GradientTitle";
import "./styles/Hero.module.css";

export function Hero() {
	return (
		<div className="flex h-fit w-full flex-col items-center justify-center rounded-xl border border-solid border-gray-600 px-20 pt-32 pb-10">
			<div>
				<h1 className="text-center text-5xl font-bold">
					Transform Your Documents Into
				</h1>
				<GradientTitle
					className="text-center text-5xl font-bold"
					color="linear-gradient(90deg,rgba(0, 255, 179, 1) 0%, rgba(228, 145, 255, 1) 100%)"
				>
					Engaging Podcasts
				</GradientTitle>
			</div>
			<div className="mt-5">
				<p className="text-center text-lg text-balance">
					Upload any document, article, or text and instantly generate
					high-quality podcast-style audio content. Perfect for
					learning on the go, accessibility, or content repurposing.
				</p>
			</div>
			<div className="mt-5 flex flex-row gap-5">
				<button className="bg-primary hover:text-primary cursor-pointer rounded-lg px-5 py-2 text-white transition-colors duration-150 hover:bg-white">
					Get Started
				</button>
				<button className="bg-secondary hover:text-secondary cursor-pointer rounded-lg border border-solid border-gray-600 px-5 py-2 text-white transition-colors duration-150 hover:bg-gray-100">
					Watch Demo
				</button>
			</div>

			<ul className="mt-10 flex list-disc flex-row items-center justify-center gap-5">
				<li>PDF & Document Support</li>
				<li>Natural Voice Synthesis</li>
				<li>Playlist Management</li>
			</ul>
		</div>
	);
}
