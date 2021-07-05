import React from 'react';
import {
    BrowserRouter as Router,

  } from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import Collapsible from 'react-collapsible';

export const NavbarUi = () => {
    return (
        <>
        <Router>
        <nav className="navbarUi__container">
            <ul> 
               <Link smooth to= "#twitch-index"> <li>Twitch</li></Link>
               <Link smooth to= "#musica-index"> <li>Música</li></Link>
               <Link smooth to= "#social-index"> <li>Social</li></Link>
               <Link smooth to= "#registrate-index"> <li>Notifícame</li></Link>
            </ul>
        </nav>
        </Router>

        <Router>
        <nav className="navbarUi__container-small">
            <Collapsible trigger={<i className="fas fa-bars"></i>}>
            <ul> 
               <Link smooth to= "#twitch-index"> <li>Twitch</li></Link>
               <Link smooth to= "#musica-index"> <li>Música</li></Link>
               <Link smooth to= "#social-index"> <li>Social</li></Link>
               <Link smooth to= "#registrate-index"> <li>Notifícame</li></Link>
            </ul>
            </Collapsible>
        </nav>
        </Router>
        </>
    )
}
