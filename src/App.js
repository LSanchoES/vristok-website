import { Head } from "./components/Head";
import { NavbarUi } from "./components/NavbarUi";
import {Twitch} from "./components/Twitch"
import {Musica} from "./components/Musica"
import {Social} from "./components/Social"
import {Registrate} from "./components/Registrate"
import {RegistrateModal} from "./components/RegistrateModal"

import Modal from 'react-modal';
import { useEffect, useState } from "react";

function App() {
	  

	const [isOpen, setIsOpen] = useState(false)

	const openModal = () =>{
		setIsOpen(true)
	}
	const closeModal = () =>{
		setIsOpen(false)
	}

	//Modal Timer
	useEffect(() => {

		setTimeout(() => {
			setIsOpen(true)
		}, 5000);

	}, [])
	

	return (
		<>
      		<Modal
      		  isOpen={isOpen}
      		  onRequestClose={closeModal}
      		  contentLabel="Quieres recibir notificaciones?"
      		>
				<h1 className="registrate__exit" onClick={closeModal}>X</h1>
				<RegistrateModal setter={setIsOpen}/>

	  		</Modal>

			<NavbarUi />
			<Head />
			<Twitch />
			<Musica />
			<Social />
			<Registrate />
			
		</>
	);
}

export default App;
