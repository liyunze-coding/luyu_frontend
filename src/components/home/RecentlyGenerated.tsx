import { IconClock, IconPlayerPlay } from "@tabler/icons-react";

export function RecentlyGenerated() {
	return (
		<div className="py-10">
			<h1 className="mb-10 text-3xl font-bold">Recently Generated</h1>
			<div className="flex flex-col items-center justify-center gap-5">
				<div className="group w-full rounded-lg border border-solid border-gray-400 bg-gray-900 px-5 py-2">
					<div className="flex w-fit flex-row gap-3">
						<div className="flex items-center justify-center">
							<button className="rounded-lg bg-purple-700 px-3 py-3">
								<IconPlayerPlay className="group-hover:scale-105" />
							</button>
						</div>
						<div className="">
							<div className="font-medium">
								The Future of AI Technology
							</div>
							<div className="text-gray-400">
								Source: research-paper.pdf
							</div>
							<div className="mt-1 flex flex-row items-center justify-start gap-2">
								<div className="flex flex-row items-center justify-center gap-1 text-xs">
									<IconClock size={13} />
									12:15
								</div>
								<div className="text-xs">6 hours ago</div>
								<div className="text-xs">processing</div>
							</div>
						</div>
					</div>
				</div>
				<div className="group w-full rounded-lg border border-solid border-gray-400 bg-gray-900 px-5 py-2">
					<div className="flex w-fit flex-row gap-3">
						<div className="flex items-center justify-center">
							<button className="rounded-lg bg-purple-700 px-3 py-3">
								<IconPlayerPlay className="group-hover:scale-105" />
							</button>
						</div>
						<div className="">
							<div className="font-medium">
								The Future of AI Technology
							</div>
							<div className="text-gray-400">
								Source: research-paper.pdf
							</div>
							<div className="mt-1 flex flex-row items-center justify-start gap-2">
								<div className="flex flex-row items-center justify-center gap-1 text-xs">
									<IconClock size={13} />
									12:15
								</div>
								<div className="text-xs">6 hours ago</div>
								<div className="text-xs">processing</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
