import React, { Component } from 'react';
import axios from 'axios';
import ShowNews from './showNewsComponent';

class searchNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        }
    }

    getData = (query) => {
        axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&language=en&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => {
                console.log(res);
                this.setState({
                    //update state
                    headlines: res.data.articles
                })
            })
    }

    componentDidMount(){
        const query = this.props.match.params.query;
        this.getData(query);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.query !== nextProps.match.params.query){
            const query = nextProps.match.params.query;
            this.getData(query);
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

export default searchNewsComponent;
