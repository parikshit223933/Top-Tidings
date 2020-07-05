import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from './components/navbarComponent'
import Sources from './components/sourcesComponent'
import Categories from './components/categoriesComponent'
import Home from './components/homeComponent'
import Register from './components/registerComponent';
import LogIn from './components/logInComponent';
import SourceNews from './components/sourceNewsComponent'
import CategoryNews from './components/categoryNewsComponent'
import SearchNews from './components/searchNewsComponent'

// Check for token to keep user logged in
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
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    
                    <Sources />
 
                    <Categories />

                    {/* Switch tag check route one by one and if matches 
                        then show that component and will not check other route */}
                    <Switch>
                        {/* By using Route, the component has access to this.props.history 
                        so it can redirect the user with this.props.history.push. */}
                        
                        <Route exact path='/' component={Home}/> 
                        {/* exact path is used, otherwise it will also show those pages where sub route matches with their route. 
                            Eg:- for route /about here both / & /about matches and react open both pages */}
                        
                        <Route path='/signup' component={Register} />
                    
                        <Route path='/signin' component={LogIn} />

                        <Route path='/search/:query' component={SearchNews} />

                        <Route path='/source/:src_id' component={SourceNews} />
                        
                        <Route path='/category/:ctg_name' component={CategoryNews} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
