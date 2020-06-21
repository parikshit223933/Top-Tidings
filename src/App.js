import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbarComponent'
import Sources from './components/sourceComponent'
import Home from './components/homeComponent'
import SourceNews from './components/sourceNewsComponent'

class App extends Component {
    render() {
      return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                {/* Switch tag check route one by one and if matches 
                    then show that component and will not check other route */}
                <Sources />
                <Switch>
                    {/* By using Route, the component has access to this.props.history 
                    so it can redirect the user with this.props.history.push. */}
                    <Route exact path='/' component={Home}/> 
                    {/* exact path is used, otherwise it will also show those pages where sub route matches with their route. 
                        Eg:- for route /about here both / & /about matches and react open both pages */}
                    <Route path='/source/:src_id' component={SourceNews} />
                </Switch>
            </div>
        </BrowserRouter>
      );
    }
  }

export default App;
