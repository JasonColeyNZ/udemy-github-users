import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadingImage from "../src/images/preloader.gif";
import { GithubContext } from "./context/context";
import { Navbar, Search } from "./components";

function App() {
	const { isLoading } = React.useContext(GithubContext);
	if (isLoading) {
		return (
			<main>
				<Navbar />
				<Search />
				<img src={loadingImage} className="loading-img" alt="loading" />
			</main>
		);
	}
	return (
		<AuthWrapper>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					></Route>

					<Route path="/login" element={<Login />}></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
			</Router>
		</AuthWrapper>
	);
}

export default App;
