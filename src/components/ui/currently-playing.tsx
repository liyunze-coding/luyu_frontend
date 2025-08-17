import {
	IconArrowsShuffle,
	IconHeart,
	IconPictureInPicture,
	IconPlayerPlayFilled,
	IconPlayerSkipBack,
	IconPlayerSkipForward,
	IconRepeat,
	IconVolume,
	IconVolumeOff,
} from "@tabler/icons-react";
import { useState } from "react";

export function CurrentlyPlaying() {
	const [isPlaying, setIsPlaying] = useState(true);
	const [volume] = useState(75);
	const [currentTime] = useState(125); // in seconds
	const [duration] = useState(210); // in seconds
	const [isMuted, setIsMuted] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [isShuffled, setIsShuffled] = useState(false);
	const [repeatMode, setRepeatMode] = useState(0); // 0: off, 1: all, 2: one

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
	};

	const progressPercentage = (currentTime / duration) * 100;

	return (
		<div className="fixed bottom-0 z-40 flex h-[90px] w-full flex-row items-center justify-between border-t border-gray-800 bg-gray-950 px-4 text-white">
			{/* Left section - Track info */}
			<div className="flex w-1/4 min-w-[180px] items-center gap-3">
				<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-purple-600 to-blue-600">
					<IconVolume size={20} />
				</div>
				<div className="min-w-0 flex-1">
					<div className="cursor-pointer truncate text-sm font-medium text-white hover:underline">
						Document Analysis Podcast
					</div>
					<div className="cursor-pointer truncate text-xs text-gray-400 hover:underline">
						LUYU AI Generated
					</div>
				</div>
				<button
					onClick={() => setIsLiked(!isLiked)}
					className="p-1 text-gray-400 transition-colors hover:text-white"
				>
					<IconHeart
						size={16}
						fill={isLiked ? "#1db954" : "none"}
						color={isLiked ? "#1db954" : "currentColor"}
					/>
				</button>
				<button className="p-1 text-gray-400 transition-colors hover:text-white">
					<IconPictureInPicture size={16} />
				</button>
			</div>

			{/* Center section - Player controls */}
			<div className="flex w-2/5 max-w-[722px] flex-col items-center gap-2">
				{/* Control buttons */}
				<div className="flex items-center gap-4">
					<button
						onClick={() => setIsShuffled(!isShuffled)}
						className={`p-1 transition-colors ${isShuffled ? "text-green-500" : "text-gray-400 hover:text-white"}`}
					>
						<IconArrowsShuffle size={16} />
					</button>
					<button className="p-1 text-gray-400 transition-colors hover:text-white">
						<IconPlayerSkipBack size={20} />
					</button>
					<button
						onClick={() => setIsPlaying(!isPlaying)}
						className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
					>
						<IconPlayerPlayFilled size={16} />
					</button>
					<button className="p-1 text-gray-400 transition-colors hover:text-white">
						<IconPlayerSkipForward size={20} />
					</button>
					<button
						onClick={() => setRepeatMode((prev) => (prev + 1) % 3)}
						className={`p-1 transition-colors ${repeatMode > 0 ? "text-green-500" : "text-gray-400 hover:text-white"}`}
					>
						<IconRepeat size={16} />
						{repeatMode === 2 && (
							<div className="absolute -mt-3 -ml-1 text-xs">
								•
							</div>
						)}
					</button>
				</div>

				{/* Progress bar */}
				<div className="flex w-full items-center gap-2 text-xs text-gray-400">
					<span className="min-w-[40px] text-right">
						{formatTime(currentTime)}
					</span>
					<div className="group flex-1">
						<div className="relative h-1 cursor-pointer rounded-full bg-gray-600">
							<div
								className="absolute h-1 rounded-full bg-white transition-all group-hover:bg-green-500"
								style={{ width: `${progressPercentage}%` }}
							/>
							<div
								className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100"
								style={{
									left: `${progressPercentage}%`,
									marginLeft: "-6px",
								}}
							/>
						</div>
					</div>
					<span className="min-w-[40px]">{formatTime(duration)}</span>
				</div>
			</div>

			{/* Right section - Volume and additional controls */}
			<div className="flex w-1/4 min-w-[180px] items-center justify-end gap-2">
				<button className="p-2 text-gray-400 transition-colors hover:text-white">
					<IconPictureInPicture size={16} />
				</button>
				<div className="group flex items-center gap-2">
					<button
						onClick={() => setIsMuted(!isMuted)}
						className="p-1 text-gray-400 transition-colors hover:text-white"
					>
						{isMuted || volume === 0 ? (
							<IconVolumeOff size={16} />
						) : (
							<IconVolume size={16} />
						)}
					</button>
					<div className="w-24 transition-all duration-200 group-hover:w-32">
						<div className="relative h-1 cursor-pointer rounded-full bg-gray-600">
							<div
								className="absolute h-1 rounded-full bg-white transition-all hover:bg-green-500"
								style={{ width: `${isMuted ? 0 : volume}%` }}
							/>
							<div
								className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100"
								style={{
									left: `${isMuted ? 0 : volume}%`,
									marginLeft: "-6px",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
