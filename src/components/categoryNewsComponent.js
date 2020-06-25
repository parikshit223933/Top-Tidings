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

    //function to get data when component mounts or props changes
    getData = (ctgName) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${ctgName}&language=en&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
        .then(res => { //handle promise
            this.setState({
                //update state acc to result
                headlines: res.data.articles
            })
        })
    }
    
    //when component created this hook will be first evoked 
    componentDidMount(){
        const ctgName = this.props.match.params.ctg_name;
        this.getData(ctgName);
    }

    //if component is already mounted and only route parameter change 
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(this.props.match.params.ctg_name !== nextProps.match.params.ctg_name) {
            const ctgName = nextProps.match.params.ctg_name;
            this.getData(ctgName);
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

export default categeoryNewsComponent;
