import { Head } from "./components/Head";
import { NavbarUi } from "./components/NavbarUi";
import {Twitch} from "./components/Twitch"
import {Musica} from "./components/Musica"
import {Social} from "./components/Social"

function App() {
	return (
		<>
			<NavbarUi />
			<Head />
			<Twitch />
			<Musica />
			<Social />
			
		</>
	);
}

export default App;
