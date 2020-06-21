import React, { Component } from 'react'
//import { connect } from 'react-redux'
import axios from 'axios'
import ShowNews from './showNewsComponent';

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
        //get top headlines using axios
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=2f18a46c3eea4f1fb7380121f6d42f55') //it return promise
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
                <h5 className="center">Todays Headlines</h5>
                <div class="row">
                    <ShowNews headlines={this.state.headlines}/>
                </div>
            </div>
        )
    }
}

  
export default homeComponent