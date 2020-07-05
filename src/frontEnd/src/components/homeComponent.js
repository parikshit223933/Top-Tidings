import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowNews from './showNewsComponent';
import { isLoadingAction } from '../actions/getNewsActions';
import { homeAction } from '../actions/getNewsActions';

class homeComponent extends Component {
    //we can initialize state by using constructor
    constructor(props) {
        super(props); //super initialize 'this' keyword
        //pass props to super to use props in constructor
    
        this.state = {
            headlines: [],
        };
    }
    // didMount first execute when component created
    componentDidMount(){
        this.props.isLoadingNews();
        console.log(this.props.getHomeNews())
        this.props.getHomeNews();
    } 

    render() {
        return(
            <div className="container home center">
                <h5 className="center">Todays Headlines</h5>
                <div class="row">
                    <ShowNews />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      isLoadingNews: () => dispatch(isLoadingAction()),
      getHomeNews: () => dispatch(homeAction())
    }
}

  
export default connect(null, mapDispatchToProps)(homeComponent)