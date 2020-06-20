import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import { connect } from 'react-redux'
import axios from 'axios'
//import Pokeball from '../pokeball.png'

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
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=2f18a46c3eea4f1fb7380121f6d42f55') //it return promise
            .then(res => {
                this.setState({
                    headlines: res.data.articles
                })
            })
    } 
    render() {
        const headline =  this.state.headlines.length ? (
            this.state.headlines.map(headline => {
                return(
                    <div class="col-lg-6 col-sm-6" key="headline.publishedAt">
                        <div class="card booking-card">
                            <div class="view overlay">
                                <img id="indexcardimage" class="card-img-top" src={headline.urlToImage} alt="img" />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title font-weight-bold"><a href={headline.url}>{headline.title}</a></h4>
                                <p class="card-text">{headline.description}...</p>
                                <a href={headline.url} class="btn btn-success ">More info</a>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                <p>can't render headlines</p>
            </div>
        )
        console.log(this.state.headlines)
        return(
            <div className="container home center">
                <h4 className="center">Todays Headlines</h4>
                {headline}
            </div>
        )
    }
}

  
export default homeComponent