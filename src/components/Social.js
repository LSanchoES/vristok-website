import React from "react";

export const Social = () => {
	return (
		<div  className="social__container">
			<h1 id="social-index"> Mis redes sociales!</h1>
			<div className="social__links">
				<a
					href="https://www.youtube.com/channel/UC-ysJS9-nifzJRx6jAgZENA/featured"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-youtube"></i>
				</a>

				<a
					href="https://www.instagram.com/vristok/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-instagram"></i>
				</a>

				<a href="https://twitter.com/VrisToK" 
                target="_blank" 
                rel="noreferrer">
					<i className="fab fa-twitter"></i>
				</a>
				<a href="https://www.tiktok.com/@vristok?lang=es"
                target="_blank" 
                rel="noreferrer">
					<i className="fab fa-tiktok"></i>
				</a>
				<a href="https://www.facebook.com/VristokOficial" 
                target="_blank" 
                rel="noreferrer">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a href="https://github.com/LSanchoES" 
                target="_blank" 
                rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://discord.gg/4b2gHjr" 
                target="_blank"
                 rel="noreferrer">
					<i className="fab fa-discord"></i>
				</a>
			</div>
		</div>
	);
};
