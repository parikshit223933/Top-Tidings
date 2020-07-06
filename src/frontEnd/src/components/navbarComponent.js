import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "./searchBarComponent";
import { connect } from "react-redux";

const navBarComponent = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand m-1">TopTidings</span>
			</Link>

			<SearchBar />

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse bg-dark navbar-custom-buttons"
				id="navbarSupportedContent"
			>
				{props.currentUser.email !== undefined ? (
					<ul className="nav navbar-nav ml-auto">
						<li className="nav-item">
							<Link
								to="/user/:user_id/bookmarks"
								className="nav-link"
							>
								<i
									className="fa fa-bookmark"
									aria-hidden="true"
								></i>
							</Link>
						</li>
						<li className="nav-item">{props.currentUser.name}</li>
						<li className="nav-item">
							<Link to="/logout" className="nav-link">
								Log Out
							</Link>
						</li>
					</ul>
				) : (
					<div className="pl-auto">
						<button type="button" className=" btn btn-primary mr-3">
							<Link
								to="/signin"
								className="nav"
								style={{
									textDecoration: "none",
									color: "white"
								}}
							>
								Login
							</Link>
						</button>
						<button type="button" className="btn btn-primary">
							<Link
								to="/signup"
								className="nav"
								style={{
									textDecoration: "none",
									color: "white"
								}}
							>
								Register
							</Link>
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

//take data from redux store to components prop
const mapStateToProps = (state) => {
	console.log(state);
	return {
		currentUser: state.currentUser
	};
};

export default connect(mapStateToProps, null)(withRouter(navBarComponent));
