import React from 'react'

export const Twitch = () => {
    return (
        <div id= "twitch-index" className="twitch__container"> 
           
            <h1> Directos diarios! </h1>
            <iframe src="https://player.twitch.tv/?channel=vristok&parent=http://localhost:3000/"
            frameBorder="5" 
            allowFullScreen={true}
            scrolling="no"
            ></iframe>
        </div>
    )
}
