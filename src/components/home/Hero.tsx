import styles from "./styles/Hero.module.css";
import { cn } from "@/lib/utils";
import { GradientTitle } from "@/components/ui/GradientTitle";

export function Hero() {
	return (
		<div
			id="hero"
			className={cn(
				"flex h-fit w-full flex-col items-center justify-center rounded-xl border border-solid border-gray-600 px-20 pt-32 pb-10",
				styles.heroDiv,
			)}
		>
			<div className="flex flex-col items-center justify-center">
				<GradientTitle className="mb-5">Luyu</GradientTitle>
				<h2 className="mx-auto max-w-[75%] text-center text-5xl font-bold text-balance">
					Transform your documents into Engaging Podcasts
				</h2>
			</div>
			<div className="mt-5">
				<p className="text-center text-lg text-balance">
					Upload any document, article, or text and instantly generate
					high-quality podcast-style audio content. Perfect for
					learning on the go, accessibility, or content repurposing.
				</p>
			</div>

			<ul
				className={cn(
					"mt-10 flex list-disc flex-row items-center justify-center gap-5",
					styles.heroUl,
				)}
			>
				<li>PDF & Document Support</li>
				<li>Natural Voice Synthesis</li>
				<li>Playlist Management</li>
			</ul>
		</div>
	);
}
