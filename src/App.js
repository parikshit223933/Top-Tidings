import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbarComponent'
import Sources from './components/sourcesComponent'
import Categories from './components/categoriesComponent'
import Home from './components/homeComponent'
import SourceNews from './components/sourceNewsComponent'
import CategoryNews from './components/categoryNewsComponent';

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
                    
                    <Route path='/source/:src_id' component={SourceNews} />
                    
                    <Route path='/category/:ctg_name' component={CategoryNews} />
                </Switch>
            </div>
        </BrowserRouter>
      );
    }
  }

export default App;
