import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShowNews from './showNewsComponent';
import { queryAction } from '../actions/myAction';

class searchNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        }
    }

    //when component rendered this method will be first evoked 
    componentDidMount(){
        const query = this.props.match.params.query;
        this.props.getQueryNews(query);
    }
    
    //if component is already mounted and only route parameter change 
    componentWillReceiveProps(nextProps){
        if(this.props.match.params.query !== nextProps.match.params.query){
            const query = nextProps.match.params.query;
            this.props.getQueryNews(query);
        }
    }
    
    render() {
        return (
            <div className="container search">
                <h5 className="center">Headlines from {this.props.match.params.query}</h5>
                <div class="row">
                    <ShowNews headlines={this.state.headlines} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getQueryNews: (query) => dispatch(queryAction(query))
    }
}

export default connect(null, mapDispatchToProps)(searchNewsComponent);
