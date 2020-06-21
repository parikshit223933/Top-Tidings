import React, { Component } from 'react';
import axios from 'axios';  

class sourceNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        };
    }
    
    componentDidMount(){
        const srcID = this.props.match.params.src_id;
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${srcID}&apiKey=2f18a46c3eea4f1fb7380121f6d42f55`)
            .then(res => { //handle promise
                this.setState({
                    //update state acc to result
                    headlines: res.data.articles
                })
            })
    }
    render() {
        //create object with jsx
        const headline =  this.state.headlines.length ? (
            this.state.headlines.map(headline => {
                return(
                    <div class="col-xl-4 col-lg-6 col-sm-12 d-flex align-items-stretch" key="headline.publishedAt">
                        <div class="card booking-card">
                            <div class="view overlay">
                                <img id="indexcardimage" class="card-img-top" src={headline.urlToImage} alt="img" />
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h4 class="card-title font-weight-bold">
                                    {/* 
                                        target: _blank to open link new tab  
                                        rel="noopener noreferrer" to prevent newly opened tab 
                                        from being able to modify the original tab maliciously 
                                    */}
                                    <a href={headline.url} target="_blank" rel="noopener noreferrer">
                                        {headline.title}
                                    </a>
                                </h4>
                                <p class="card-text">{headline.description}...</p>
                                <a href={headline.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-auto">More info</a>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                <p className="center">loading...</p>
            </div>
        )
        return (
            <div className="container home center">
                <h5 className="center">Headlines from {this.props.match.params.src_id}</h5>
                <div class="row">
                    {headline}
                </div>
            </div>
        );
    }
}

export default sourceNewsComponent;
