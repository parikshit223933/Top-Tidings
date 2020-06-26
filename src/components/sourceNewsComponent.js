import React, { Component } from 'react';
import ShowNews from './showNewsComponent';
import { sourceAction } from '../actions/myAction';
import { connect } from 'react-redux';

class sourceNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        };
    }

    //when component rendered this method will be first evoked 
    componentDidMount(){
        const srcID = this.props.match.params.src_id;
        this.props.getSourceNews(srcID);
    }

    //if component is already mounted and only route parameter change 
    componentWillReceiveProps(nextProps){
        if(this.props.match.params.src_id !== nextProps.match.params.src_id){
            const srcID = nextProps.match.params.src_id;
            this.props.getSourceNews(srcID);
        }
    }

    render() {
        return(
            <div className="container sources center">
                <h5 className="center">Headlines from {this.props.match.params.src_id}</h5>
                <div class="row">
                    <ShowNews headlines={this.state.headlines} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getSourceNews: (srcID) => dispatch(sourceAction(srcID))
    }
}

export default connect(null, mapDispatchToProps)(sourceNewsComponent);
