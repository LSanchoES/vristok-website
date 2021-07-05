import React from "react";

export const Registrate = () => {

	const handleSubmit = (e) =>{
		e.preventDefault();
		let nombre = e.target[0].value;
		let email = e.target[1].value;
		console.log(nombre , email )

	}
	return (
		<div className="registrate__container">

			<h1 id="registrate-index">
				Registrate gratis y recibe todas las notificaciones!
			</h1>

			<div className="registrate__form">

			<form onSubmit={handleSubmit}>

				<label htmlFor="nombre">Nombre</label>
				<input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="ejemplo@gmail.com"
				/>
				<input type="submit" value="Registrame!" />
			</form>
			</div>
		</div>
	);
};
