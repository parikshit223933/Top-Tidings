import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchBar from './searchBarComponent';

const navBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top  bg-primary">
            <Link to="/"><span className="navbar-brand">TopTidings</span></Link>
            <SearchBar />
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li class="nav-item">
                    <Link to="/signin" className="nav-link"> Login </Link>
                </li>
                <li class="nav-item">
                    <Link to="/signup" className="nav-link"> Register </Link>
                </li>
            </ul>
        </nav>
        
    )
}

/*  
    Header like navbar which are present on all page are not wrapped under Route 
    so they can't redirect the user. To get around this problem, 
    the header component can be wrapped in a withRouter function 
    This gives the Header component access to match, current location, and history props, 
    which means the header can now redirect the user. 
*/
export default withRouter(navBarComponent)
