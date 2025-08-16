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
				"text-transparent animate-gradient py-1 lg:py-3 bg-[length:300%]",
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
