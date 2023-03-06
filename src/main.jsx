import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Auth0Provider
		domain="dev-ke27hommi25zmtj6.us.auth0.com"
		clientId="BBipJbiqYXVZF5MlIM1sj147jLsa6MeR"
		redirectUri={window.location.origin}
		cacheLocation="localstorage"
	>
		<GithubProvider>
			<App />
		</GithubProvider>
	</Auth0Provider>
);
