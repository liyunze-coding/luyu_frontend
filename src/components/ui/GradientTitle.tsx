import { cn } from "@/lib/utils";

export function GradientTitle({
	className,
	color,
	children,
}: {
	className?: string;
	color?: string;
	children: React.ReactNode;
}) {
	return (
		<div
			className={cn(
				"animate-gradient relative bg-[length:300%] py-1 text-transparent lg:py-3",
				className,
			)}
			style={{
				background: color,
				backgroundClip: "text",
			}}
		>
			{children}
		</div>
	);
}
