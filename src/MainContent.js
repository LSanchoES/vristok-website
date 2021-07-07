import { Head } from "./components/Head";
import { NavbarUi } from "./components/NavbarUi";
import {Twitch} from "./components/Twitch"
import {Musica} from "./components/Musica"
import {Social} from "./components/Social"
import {Registrate} from "./components/Registrate"
import {RegistrateModal} from "./components/RegistrateModal"
import { Footer } from "./components/Footer";

import Modal from 'react-modal';
import { useEffect, useState } from "react";


export const MainContent = () => {
	  

	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () =>{
		setIsOpen(false)
	}

	// Modal Timer

	useEffect(() => {

		setTimeout(() => {
			setIsOpen(true)
		}, 10000);

	}, [])
	

	return (
		<>
      		<Modal
      		  	isOpen={isOpen}
      		  	onRequestClose={closeModal}
      		  	contentLabel="Quieres recibir notificaciones?"
				ariaHideApp={false}
      		>
				<h1 className="registrate__exit" onClick={closeModal}>
					<i className="fas fa-times"></i>
				</h1>
			<RegistrateModal setter={setIsOpen}/>

	  		</Modal>

			<NavbarUi />
			<Head />
			<Twitch />
			<Musica />
			<Social />
			<Registrate />
			<Footer />
			
		</>
	);
}
