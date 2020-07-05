import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "./searchBarComponent";
import { connect } from "react-redux";

const navBarComponent = (props) => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top  bg-primary">
			<Link to="/">
				<span className="navbar-brand">TopTidings</span>
			</Link>
			<SearchBar />
				{props.currentUser.email !== undefined ? (
					<ul class="nav navbar-nav ml-auto w-100 justify-content-end">
						<li class="nav-item">
							<Link
								to="/user/:user_id/bookmarks"
								className="nav-link"
							>
								<i class="fa fa-bookmark" aria-hidden="true"></i>
							</Link>
						</li>
						<li class="nav-item">{props.currentUser.name}</li>
						<li class="nav-item">
							<Link to="/logout" className="nav-link">
								Log Out
							</Link>
						</li>
					</ul>
				) : (
					<ul class="nav navbar-nav ml-auto w-100 justify-content-end">
						<li class="nav-item">
							<Link to="/signin" className="nav-link">
								Login
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/signup" className="nav-link">
								Register
							</Link>
						</li>
					</ul>
				)}
		</nav>
	);
	/* if(props.currentUser){
        return (
            <nav className="navbar navbar-expand-lg fixed-top  bg-primary">
                <Link to="/"><span className="navbar-brand">TopTidings</span></Link>
                <SearchBar />
                <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li class="nav-item">
                        <Link to="/user/:user_id/bookmarks" className="nav-link"> Bookmarks </Link>
                    </li>
                    <li class="nav-item">
                        Login
                    </li>
                    <li class="nav-item">
                        <Link to="/logout" className="nav-link"> Log Out </Link>
                    </li>
                </ul>
            </nav> 
        )
    }
    else{
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
    }  */
};

//take data from redux store to components prop
const mapStateToProps = (state) => {
    console.log(state);
	return {
		currentUser: state.currentUser
	};
};

export default connect(mapStateToProps, null)(withRouter(navBarComponent));