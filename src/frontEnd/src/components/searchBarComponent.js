import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class searchBarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ""
		};
	}

	handleChange = (event) => {
		this.setState({
			query: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault(); // prevent native submitting behavior
		this.props.history.push(`/search/${this.state.query}`); //programmatically redirect to result page
		this.setState({
			query: ""
		});
	};

	render() {
		return (
			<form
				className="form-inline my-2 my-lg-0 mr-auto ml-auto"
				action="/search/:query"
				onSubmit={this.handleSubmit}
			>
				<input
					type="search"
					placeholder="Search Latest News"
					className="form-control mr-sm-2 pl-3"
					onChange={this.handleChange}
					value={this.state.query}
					style={{ borderRadius: "20px" }}
				/>
				<button type="button" type="submit" className="btn btn-success">
					<i className="fas fa-search"></i> Search
				</button>
			</form>
		);
	}
}

export default withRouter(searchBarComponent);
