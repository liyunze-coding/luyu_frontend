import { IconFolder } from "@tabler/icons-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function Playlist() {
	return (
		<div>
			<h2 className="mt-10 mb-8 text-2xl font-bold">Your Playlists</h2>
			<div className="px-10">
				<Carousel>
					<CarouselContent>
						<CarouselItem className="basis-1/3">
							<div className="bg-[#0E1116] px-5 py-5">
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
								<div className="flex flex-row items-center justify-between">
									<div className="text-sm text-gray-400">
										Updated 2 days ago
									</div>
									<button className="px"></button>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							hello 2
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							hello 3
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							hello 4
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							hello 5
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							hello 6
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}
