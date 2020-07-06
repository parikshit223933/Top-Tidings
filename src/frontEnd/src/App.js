import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "./components/navbarComponent";
import Sources from "./components/sourcesComponent";
import Categories from "./components/categoriesComponent";
import Home from "./components/homeComponent";
import Register from "./components/registerComponent";
import LogIn from "./components/logInComponent";
import SourceNews from "./components/sourceNewsComponent";
import CategoryNews from "./components/categoryNewsComponent";
import SearchNews from "./components/searchNewsComponent";

/* // Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));// Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());    // Redirect to login
      window.location.href = "./login";
    }
} */

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />

					<div className="buttons-container container">
						{/* sources */}
						<div className="container float-left dropdown d-md-none d-block">
							<button
								className="btn btn-primary dropdown-toggle mr-4 sources-button mt-3"
								type="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Sources
							</button>

							<div className="dropdown-menu hidden-md-up">
								<Link
									to="/source/bbc-news"
									className="dropdown-item"
								>
									BBC News
								</Link>
								<Link
									to="/source/google-news-in"
									className="dropdown-item"
								>
									Google News In
								</Link>
								<Link
									to="/source/the-hindu"
									className="dropdown-item"
								>
									The Hindu
								</Link>
								<Link
									to="/source/the-times-of-india"
									className="dropdown-item"
								>
									The Times Of India
								</Link>
								<Link
									to="/source/fox-news"
									className="dropdown-item"
								>
									Fox News
								</Link>
								<Link
									to="/source/time"
									className="dropdown-item"
								>
									Time News
								</Link>
								<Link
									to="/source/fortune"
									className="dropdown-item"
								>
									Fortune
								</Link>
								<Link
									to="/source/cnn"
									className="dropdown-item"
								>
									CNN News
								</Link>
								<Link
									to="/source/espn"
									className="dropdown-item"
								>
									ESPN
								</Link>
								<Link
									to="/source/reddit-r-all"
									className="dropdown-item"
								>
									Reddit
								</Link>
								<Link
									to="/source/bloomberg"
									className="dropdown-item"
								>
									Bloomberg
								</Link>
								<Link
									to="/source/national-geographic"
									className="dropdown-item"
								>
									National Geography
								</Link>
								<Link
									to="/source/mtv-news"
									className="dropdown-item"
								>
									MTV News
								</Link>
								<div className="dropdown-divider"></div>
							</div>
						</div>
						{/* categories */}
						<div className="container float-right dropdown show d-md-none">
							<button
								className="btn btn-primary dropdown-toggle categories-button mt-3"
								type="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Categories
							</button>

							<div className="dropdown-menu hidden-md-up">
								<Link
									to="/category/general"
									className="dropdown-item"
								>
									General
								</Link>
								<Link
									to="/category/business"
									className="dropdown-item"
								>
									Business
								</Link>
								<Link
									to="/category/health"
									className="dropdown-item"
								>
									Health
								</Link>
								<Link
									to="/category/sports"
									className="dropdown-item"
								>
									Sports
								</Link>
								<Link
									to="/category/technology"
									className="dropdown-item"
								>
									Technology
								</Link>
								<Link
									to="/category/entertainment"
									className="dropdown-item"
								>
									Entertainment
								</Link>
								<Link
									to="/category/science"
									className="dropdown-item"
								>
									Science
								</Link>
								<div className="dropdown-divider"></div>
							</div>
						</div>
					</div>

					<Sources />

					<Categories />

					{/* Switch tag check route one by one and if matches 
                        then show that component and will not check other route */}
					<Switch>
						{/* By using Route, the component has access to this.props.history 
                        so it can redirect the user with this.props.history.push. */}

						<Route exact path="/" component={Home} />
						{/* exact path is used, otherwise it will also show those pages where sub route matches with their route. 
                            Eg:- for route /about here both / & /about matches and react open both pages */}

						<Route path="/signup" component={Register} />

						<Route path="/signin" component={LogIn} />

						<Route path="/search/:query" component={SearchNews} />

						<Route path="/source/:src_id" component={SourceNews} />

						<Route
							path="/category/:ctg_name"
							component={CategoryNews}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
