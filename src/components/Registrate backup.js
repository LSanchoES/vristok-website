import React, { useEffect } from "react";
import Swal from "sweetalert2";

export const Registrate = () => {
	
	

	const handleSubmit = (e) => {
		e.preventDefault();

		let email = e.target[0].value;
		console.log(email);

		//Validation Alert
		if (email.length > 10) {
			Swal.fire({
				title: "Listo!",
				text: "Ahora recibirás todas mis notificaciones!",
				icon: "success",
				confirmButtonText: "Pues vale :D",
			});
		} else {
			Swal.fire({
				title: "Introduce un mail real anda crack",
				text: "No es tan dificil...",
				icon: "error",
				confirmButtonText: "Vale ya pongo el real",
			});
		}

		//DB send mail
	};
	return (
		<div className="registrate__container">
			<h1 id="registrate-index">
				Introduce tu email y recibe todas las notificaciones!
			</h1>

			<div className="registrate__form">
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="ejemplo@gmail.com"
					/>
					<input type="submit" value="Notificame!" />
				</form>
			</div>
		</div>
	);
};
