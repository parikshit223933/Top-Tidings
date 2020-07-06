import React, { Component } from "react";
import { connect } from "react-redux";
import ShowNews from "./showNewsComponent";
import { isLoadingAction } from "../actions/getNewsActions";
import { queryAction } from "../actions/getNewsActions";

class searchNewsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headlines: []
		};
	}

	//when component rendered this method will be first evoked
	componentDidMount() {
		this.props.isLoadingNews();
		const query = this.props.match.params.query;
		this.props.getQueryNews(query);
	}

	//if component is already mounted and only route parameter change
	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.query !== nextProps.match.params.query) {
			this.props.isLoadingNews();
			const query = nextProps.match.params.query;
			this.props.getQueryNews(query);
		}
	}

	render() {
		return (
			<div className="container search">
				<br />
				<h5 className="text-center">
					Headlines from {this.props.match.params.query}
				</h5>
				<div className="row">
					<ShowNews headlines={this.state.headlines} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		isLoadingNews: () => dispatch(isLoadingAction()),
		getQueryNews: (query) => dispatch(queryAction(query))
	};
};

export default connect(null, mapDispatchToProps)(searchNewsComponent);
