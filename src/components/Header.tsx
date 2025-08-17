import { useState } from "react";
import {
	IconBooks,
	IconFileDescription,
	IconHome,
	IconMusic,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Navigation";

export function Header({ children }: { children?: React.ReactNode }) {
	const links = [
		{
			label: "Home",
			href: "/",
			icon: (
				<IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
		{
			label: "Your Library",
			href: "/library",
			icon: (
				<IconBooks className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
		{
			label: "Playlists",
			href: "/playlists",
			icon: (
				<IconMusic className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
		{
			label: "Documents",
			href: "/documents",
			icon: (
				<IconFileDescription className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
	];
	const [open, setOpen] = useState(true);
	return (
		<div className="mx-auto flex min-h-screen w-full flex-1 flex-col overflow-hidden border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800">
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10">
					<div className="fixed flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						{open ? <Logo /> : <LogoIcon />}
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
						{/* <SidebarLink
							link={{
								label: "Username",
								href: "#",
								icon: (
									<img
										src="https://assets.aceternity.com/manu.png"
										className="h-7 w-7 shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/> */}
					</div>
				</SidebarBody>
			</Sidebar>
			<div className="flex flex-1">
				<div className="mb-[69px] flex h-[calc(100%-70px)] w-full flex-1 flex-col gap-2 border border-neutral-200 bg-white text-white dark:border-neutral-700 dark:bg-neutral-900">
					{children}
				</div>
			</div>
		</div>
	);
}
export const Logo = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
		>
			<div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium whitespace-pre text-black dark:text-white"
			>
				Acet Labs
			</motion.span>
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
		>
			<div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
		</Link>
	);
};
