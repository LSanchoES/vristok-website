import React from "react";
import Swal from "sweetalert2";

export const RegistrateModal = (props) => {


	console.log(props)

	const handleSubmit = (e) => {

		let email = e.target[0].value;

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
		<div className="registrate__container-modal">
			<h1 id="registrate-index">
				Registra tu email para recibir todas las notificaciones!
			</h1>
			<div id="mc_embed_signup ">
				<form
					action="https://lsancho.us6.list-manage.com/subscribe/post?u=71a58a6e738704a94ffc2ab89&id=cfcab31bbd"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
					noValidate
					onSubmit={handleSubmit}
				>
					<div id="mc_embed_signup_scroll">
						<div className="mc-field-group">
							<label htmlFor="mce-EMAIL"></label>
							<input
								type="email"
								placeholder="email@email.com"
								name="EMAIL"
								className="required email registrate__input"
								id="mce-EMAIL"
							/>
						</div>
						<div id="mce-responses" className="clear">
							<div
								className="response"
								id="mce-error-response"
								style={{ display: "none" }}
							/>
							<div
								className="response"
								id="mce-success-response"
								style={{ display: "none" }}
							/>
						</div>{" "}
						{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
						<div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
							<input
								type="text"
								name="b_71a58a6e738704a94ffc2ab89_cfcab31bbd"
								tabIndex={-1}
								defaultValue
							/>
						</div>
						<div className="clear ">
							<input
								type="submit"
								name="subscribe"
								id="mc-embedded-subscribe"
								className="button registrate__submit modal-button"
								value="Notificame!"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
