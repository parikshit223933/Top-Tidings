import React, { Component } from "react";
import { connect } from "react-redux";
import ShowNews from "./showNewsComponent";
import { isLoadingAction } from "../actions/getNewsActions";
import { sourceAction } from "../actions/getNewsActions";

class sourceNewsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headlines: []
		};
	}

	//when component rendered this method will be first evoked
	componentDidMount() {
		this.props.isLoadingNews();
		const srcID = this.props.match.params.src_id;
		this.props.getSourceNews(srcID);
	}

	//if component is already mounted and only route parameter change
	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.src_id !== nextProps.match.params.src_id) {
			this.props.isLoadingNews();
			const srcID = nextProps.match.params.src_id;
			this.props.getSourceNews(srcID);
		}
	}

	render() {
		return (
			<div className="container sources center">
				<br />
				<h5 className="text-center">
					Headlines from {this.props.match.params.src_id}
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
		getSourceNews: (srcID) => dispatch(sourceAction(srcID))
	};
};

export default connect(null, mapDispatchToProps)(sourceNewsComponent);
