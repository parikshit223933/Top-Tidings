import React, { Component } from 'react';
import axios from 'axios';  
import ShowNews from './showNewsComponent';

class categeoryNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        };
    }
    
    componentDidMount(){
        const ctgName = this.props.match.params.ctg_name;
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${ctgName}&language=en&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => { //handle promise
                this.setState({
                    //update state acc to result
                    headlines: res.data.articles
                })
            })
    }

    render() {
        return (
            <div className="container home center">
                <h5 className="center">Headlines from {this.props.match.params.ctg_name}</h5>
                <div class="row">
                    <ShowNews headlines={this.state.headlines} />
                </div>
            </div>
        );
    }
}

export default categeoryNewsComponent;
