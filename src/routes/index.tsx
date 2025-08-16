import Footer from '@/components/Footer/Footer';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="w-full px-10 py-10">
			<Hero />
			<CreateNewAudio />
      <Footer/>
		</div>
	);
}
