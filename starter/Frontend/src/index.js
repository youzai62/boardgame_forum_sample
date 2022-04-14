import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
<Auth0Provider
    domain="dev-royzhu.us.auth0.com"
    clientId="wRJEcBy466MQx6VeQzzem1kSYs3CxpCG"
    redirectUri={window.location.origin}
  >
    <App />
</Auth0Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


 //"start": "HOST='127.0.0.1' PORT='5000' react-scripts start",