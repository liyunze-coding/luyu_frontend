import styles from "./styles/gradient-title.module.css";
import { cn } from "@/lib/utils";

export function GradientTitle({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div className={cn("py-1 lg:py-3", className, styles.heroGradient)}>
			{children}
		</div>
	);
}
