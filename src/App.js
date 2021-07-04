import { Head } from "./components/Head";
import { NavbarUi } from "./components/NavbarUi";
import {Twitch} from "./components/Twitch"
import {Musica} from "./components/Musica"

function App() {
	return (
		<>
			<NavbarUi />
			<Head />
			<Twitch />
			<Musica />
		</>
	);
}

export default App;
