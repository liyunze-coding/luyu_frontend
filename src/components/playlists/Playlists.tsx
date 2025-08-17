import {
	IconDots,
	IconEdit,
	IconFolder,
	IconPlayerPlay,
} from "@tabler/icons-react";

export function Playlists() {
	type PlaylistInfo = {
		title: string;
		description: string;
		numberOfItems: number;
		duration: string;
		lastUpdated: string;
	};

	const playlists: Array<PlaylistInfo> = [
		{
			title: "Research Papers",
			description:
				"Academic content converted to audio for deep learning sessions",
			numberOfItems: 8,
			duration: "2h 15m",
			lastUpdated: "2 days ago",
		},
		{
			title: "Daily News Briefings",
			description:
				"Current events and news articles from trusted sources",
			numberOfItems: 12,
			duration: "1h 45m",
			lastUpdated: "1 day ago",
		},
		{
			title: "Technical Documentation",
			description:
				"Programming guides and API documentation made digestible",
			numberOfItems: 15,
			duration: "3h 30m",
			lastUpdated: "5 days ago",
		},
		{
			title: "Book Summaries",
			description: "Key insights from business and self-help books",
			numberOfItems: 6,
			duration: "1h 20m",
			lastUpdated: "1 week ago",
		},
		{
			title: "Meeting Notes",
			description:
				"Important discussions and decisions from team meetings",
			numberOfItems: 10,
			duration: "2h 5m",
			lastUpdated: "3 days ago",
		},
		{
			title: "Learning Materials",
			description:
				"Educational content and course materials for skill development",
			numberOfItems: 20,
			duration: "4h 12m",
			lastUpdated: "6 days ago",
		},
		{
			title: "Industry Reports",
			description:
				"Market analysis and industry trends converted to audio",
			numberOfItems: 7,
			duration: "1h 55m",
			lastUpdated: "4 days ago",
		},
		{
			title: "Personal Development",
			description:
				"Articles and guides focused on productivity and growth",
			numberOfItems: 9,
			duration: "2h 30m",
			lastUpdated: "1 week ago",
		},
		{
			title: "Quick Reads",
			description: "Short articles and blog posts for quick consumption",
			numberOfItems: 25,
			duration: "3h 45m",
			lastUpdated: "12 hours ago",
		},
	];

	return (
		<div className="grid grid-cols-3 gap-5">
			{playlists.map((playlist, index) => (
				<div
					key={index}
					className="group relative rounded-xl bg-[#252035] px-5 py-5"
				>
					{/* top right, display on hover */}
					<div className="absolute top-5 right-5 flex flex-row items-center justify-end gap-2 opacity-0 transition-opacity duration-75 group-hover:opacity-100">
						<div>
							<IconEdit className="cursor-pointer" />
						</div>
						<div>
							<IconDots className="cursor-pointer" />
						</div>
					</div>

					<IconFolder color="#9C62F5" size={32} />
					<div className="mt-2 mb-1 text-xl font-medium">
						{playlist.title}
					</div>
					<div className="text-gray-400">{playlist.description}</div>
					<div className="my-3 flex flex-row items-center justify-between text-sm text-gray-400">
						<div>{playlist.numberOfItems} items</div>
						<div>{playlist.duration}</div>
					</div>
					<div className="flex flex-row items-center justify-between">
						<div className="text-xs text-gray-400">
							Updated {playlist.lastUpdated}
						</div>
						<div>
							<button className="flex items-center justify-center gap-2 rounded-xl bg-purple-500 py-2 pr-5 pl-3">
								<IconPlayerPlay size={16} />
								<div className="font-medium">Play</div>
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
