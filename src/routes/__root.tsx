import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanstackDevtools } from '@tanstack/react-devtools'

// import { Header } from "../components/Header";
import Footer from "@/components/Footer/Footer";
import { CurrentlyPlaying } from "@/components/ui/currently-playing";

export const Route = createRootRoute({
	component: () => (
		<>
			<CurrentlyPlaying />
			<div className="flex flex-1">
				<div className="mb-[69px] flex h-[calc(100%-70px)] w-full flex-1 flex-col gap-2 border border-neutral-200 bg-white text-white dark:border-neutral-700 dark:bg-neutral-900">
					<Outlet />
					<Footer />
				</div>
			</div>

			{/* <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
		</>
	),
});
