import React from "react";

export const Twitch = () => {
	return (
		<div id="twitch-index" className="twitch__container">
			<h1> Directos diarios! </h1>

			{/* <iframe src="https://player.twitch.tv/?channel=vristok&parent=https://vristok-website.vercel.app//"
            frameBorder="5" 
            allowFullScreen={true}
            scrolling="no"
            title="twitch"
            ></iframe> */}

			<iframe
				src="https://player.twitch.tv/?channel=vristok&parent=vristok-website.vercel.app"
				frameBorder="0"
				allowFullScreen={true}
				scrolling="no"
				height="378"
				width="620"
                title="twitch"
			></iframe>
		</div>
	);
};
