import React from "react";

export const Musica = () => {
	return (
		<div className="musica__container">
			<h1 id="musica-index">Conoce toda mi música!</h1>
			<div className="musica__frames">
				<div className="musica__spotify">
					<iframe
						src="https://open.spotify.com/embed/artist/7GnrjdMqD8VJxK1CMOgh7L?theme=0"
						width="100%"
						height="600"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
				</div>
				<div className="musica__soundcloud">
					<iframe
						width="100%"
						height="600"
						scrolling="no"
						frameborder="no"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1202388724&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
					></iframe>
				</div>
			</div>
		</div>
	);
};
