import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const navBarComponent = () => {
    return (
        <nav className="navbar transparent navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><i className="fas fa-newspaper"></i>NewsTime</Link> 
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    
                </ul>
            </div>
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
