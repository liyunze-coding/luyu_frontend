import { IconFolder, IconPlayerPlayFilled } from "@tabler/icons-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function Playlist() {
	return (
		<div className="mb-10">
			<h2 className="mt-10 mb-8 text-2xl font-bold">Your Playlists</h2>
			<div className="pr-12 pl-12">
				<Carousel
					opts={{
						loop: true,
					}}
				>
					<CarouselContent>
						<CarouselItem className="basis-1/3">
							<div className="rounded-lg bg-[#0E1116] px-5 py-5">
								<IconFolder color="#9C62F5" size={30} />
								<h2 className="mt-2 mb-2 text-lg font-medium">
									Research Papers
								</h2>
								<p className="mb-2 text-sm text-gray-400">
									Academic content converted to audio
								</p>
								<div className="flex flex-row items-center justify-between">
									<div className="text-gray-400">8 items</div>
									<div className="text-gray-400">2h 15m</div>
								</div>
								<div className="mt-3 flex flex-row items-center justify-between">
									<div className="text-xs text-gray-400">
										Updated 2 days ago
									</div>
									<button className="flex flex-row items-center justify-center gap-2 rounded-lg bg-purple-600 py-1 pr-6 pl-4">
										<IconPlayerPlayFilled size={12} /> Play
									</button>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="rounded-lg bg-[#0E1116] px-5 py-5">
								<IconFolder color="#9C62F5" size={30} />
								<h2 className="mt-2 mb-2 text-lg font-medium">
									Business Documents
								</h2>
								<p className="mb-2 text-sm text-gray-400">
									Meeting notes and reports
								</p>
								<div className="flex flex-row items-center justify-between">
									<div className="text-gray-400">
										12 items
									</div>
									<div className="text-gray-400">2h 15m</div>
								</div>
								<div className="mt-3 flex flex-row items-center justify-between">
									<div className="text-xs text-gray-400">
										Updated 1 week ago
									</div>
									<button className="flex flex-row items-center justify-center gap-2 rounded-lg bg-purple-600 py-1 pr-6 pl-4">
										<IconPlayerPlayFilled size={12} /> Play
									</button>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="rounded-lg bg-[#0E1116] px-5 py-5">
								<IconFolder color="#9C62F5" size={30} />
								<h2 className="mt-2 mb-2 text-lg font-medium">
									News Articles
								</h2>
								<p className="mb-2 text-sm text-gray-400">
									Daily news and blog posts
								</p>
								<div className="flex flex-row items-center justify-between">
									<div className="text-gray-400">
										24 items
									</div>
									<div className="text-gray-400">1h 20m</div>
								</div>
								<div className="mt-3 flex flex-row items-center justify-between">
									<div className="text-xs text-gray-400">
										Updated 1 day ago
									</div>
									<button className="flex flex-row items-center justify-center gap-2 rounded-lg bg-purple-600 py-1 pr-6 pl-4">
										<IconPlayerPlayFilled size={12} /> Play
									</button>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="rounded-lg bg-[#0E1116] px-5 py-5">
								<IconFolder color="#9C62F5" size={30} />
								<h2 className="mt-2 mb-2 text-lg font-medium">
									Research Papers
								</h2>
								<p className="mb-2 text-sm text-gray-400">
									Academic content converted to audio
								</p>
								<div className="flex flex-row items-center justify-between">
									<div className="text-gray-400">8 items</div>
									<div className="text-gray-400">2h 15m</div>
								</div>
								<div className="mt-3 flex flex-row items-center justify-between">
									<div className="text-xs text-gray-400">
										Updated 2 days ago
									</div>
									<button className="flex flex-row items-center justify-center gap-2 rounded-lg bg-purple-600 py-1 pr-6 pl-4">
										<IconPlayerPlayFilled size={12} /> Play
									</button>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="rounded-lg bg-[#0E1116] px-5 py-5">
								<IconFolder color="#9C62F5" size={30} />
								<h2 className="mt-2 mb-2 text-lg font-medium">
									Business Documents
								</h2>
								<p className="mb-2 text-sm text-gray-400">
									Meeting notes and reports
								</p>
								<div className="flex flex-row items-center justify-between">
									<div className="text-gray-400">
										12 items
									</div>
									<div className="text-gray-400">2h 15m</div>
								</div>
								<div className="mt-3 flex flex-row items-center justify-between">
									<div className="text-xs text-gray-400">
										Updated 1 week ago
									</div>
									<button className="flex flex-row items-center justify-center gap-2 rounded-lg bg-purple-600 py-1 pr-6 pl-4">
										<IconPlayerPlayFilled size={12} /> Play
									</button>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="rounded-lg bg-[#0E1116] px-5 py-5">
								<IconFolder color="#9C62F5" size={30} />
								<h2 className="mt-2 mb-2 text-lg font-medium">
									News Articles
								</h2>
								<p className="mb-2 text-sm text-gray-400">
									Daily news and blog posts
								</p>
								<div className="flex flex-row items-center justify-between">
									<div className="text-gray-400">
										24 items
									</div>
									<div className="text-gray-400">1h 20m</div>
								</div>
								<div className="mt-3 flex flex-row items-center justify-between">
									<div className="text-xs text-gray-400">
										Updated 1 day ago
									</div>
									<button className="flex flex-row items-center justify-center gap-2 rounded-lg bg-purple-600 py-1 pr-6 pl-4">
										<IconPlayerPlayFilled size={12} /> Play
									</button>
								</div>
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}
