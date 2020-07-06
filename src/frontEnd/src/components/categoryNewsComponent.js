import React, { Component } from "react";
import { connect } from "react-redux";
import { isLoadingAction } from "../actions/getNewsActions";
import { categoryAction } from "../actions/getNewsActions";
import ShowNews from "./showNewsComponent";

class categeoryNewsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headlines: []
		};
	}

	//when component rendered this method will be first evoked
	componentDidMount() {
		this.props.isLoadingNews();
		const ctgName = this.props.match.params.ctg_name;
		this.props.getCategoryNews(ctgName);
	}

	//if component is already mounted and only route parameter change
	componentWillReceiveProps(nextProps) {
		this.props.isLoadingNews();
		if (
			this.props.match.params.ctg_name !== nextProps.match.params.ctg_name
		) {
			const ctgName = nextProps.match.params.ctg_name;
			this.props.getCategoryNews(ctgName);
		}
	}

	render() {
		return (
			<div className="container categ center">
				<br />
				<h5 className="text-center">
					Headlines from {this.props.match.params.ctg_name}
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
		getCategoryNews: (ctg) => dispatch(categoryAction(ctg))
	};
};

export default connect(null, mapDispatchToProps)(categeoryNewsComponent);
