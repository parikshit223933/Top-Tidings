import React, { Component } from 'react';
import {connect} from 'react-redux';
import { categoryAction } from '../actions/myAction';
import ShowNews from './showNewsComponent';

class categeoryNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        };
    }
    
    //when component rendered this method will be first evoked 
    componentDidMount(){
        const ctgName = this.props.match.params.ctg_name;
        this.props.getCategoryNews(ctgName);
    }

    //if component is already mounted and only route parameter change 
    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.ctg_name !== nextProps.match.params.ctg_name) {
            const ctgName = nextProps.match.params.ctg_name;
            this.props.getCategoryNews(ctgName);
        }
    }

    render() {
        return (
            <div className="container categ center">
                <h5 className="center">Headlines from {this.props.match.params.ctg_name}</h5>
                <div class="row">
                    <ShowNews headlines={this.state.headlines} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getCategoryNews: (ctg) => dispatch(categoryAction(ctg))
    }
}

export default connect(null, mapDispatchToProps)(categeoryNewsComponent);
