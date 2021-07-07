import React from "react";
import { CookiesComponent } from "./CookiesComponent";
import {
	Link
  } from "react-router-dom";

export const Footer = () => {
	return (
		<>
			<div className="footer">
				<Link to="/privacidad"rel="nofollow" target="_blank"><h5>Política de privacidad</h5></Link>
			</div>
			<CookiesComponent />
		</>
	);
};
