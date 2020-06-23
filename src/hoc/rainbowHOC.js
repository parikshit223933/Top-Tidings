import React from 'react'

export default function rainbowHOC(WrappedComponent) {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 6)];
    const className = randomColour + '-text';

    return(props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div> 
    )
}
<nav className="navbar navbar-dark bg-primary">
            <Link className="navbar-brand" to="/"><i className="fas fa-newspaper"></i>NewsTime</Link> 
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li> */}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <SearchBar />
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    
                </ul>
            </div>
        </nav>