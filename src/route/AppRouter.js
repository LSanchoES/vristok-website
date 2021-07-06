import React from 'react'
import { MainContent } from '../MainContent'
import { Privacidad } from '../components/Privacidad'
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
;

export const  AppRouter = () => {
    return (
        <div>
        <Router>
            <div>
                <Switch> 
                    <Route exact path="/" component={ MainContent } />                    
                    <Route exact path="/privacidad" component={ Privacidad } />
                </Switch>
            </div>
        </Router>
        </div>
    )
}
