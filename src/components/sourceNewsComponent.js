import React, { Component } from 'react';
import axios from 'axios';  
import ShowNews from './showNewsComponent';

class sourceNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        };
    }
    
    componentDidMount(){
        const srcID = this.props.match.params.src_id;
        console.log(srcID);
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${srcID}&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => { //handle promise
                this.setState({
                    //update state acc to result
                    headlines: res.data.articles
                })
            })
    }

    render() {
        return(
            <div className="container home center">
                <h5 className="center">Headlines from {this.props.match.params.src_id}</h5>
                <div class="row">
                    <ShowNews headlines={this.state.headlines} />
                </div>
            </div>
        )
    }
}

export default sourceNewsComponent;
