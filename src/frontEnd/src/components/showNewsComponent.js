import React from 'react';
import { connect } from 'react-redux';

const showNewsComponent = (props) => {
    console.log(props);
    return (
        props.headlines.length ? (
            props.headlines.map(headline => {
                return(
                    <div className="col-xl-4 col-sm-6 d-flex align-items-stretch" key="headline.publishedAt">
                        <div className="card booking-card">
                            <div className="view overlay">
                                <img id="indexcardimage" className="card-img-top" src={headline.urlToImage} alt="img" />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h4 className="card-title font-weight-bold">
                                    {/* 
                                        target: _blank to open link new tab  
                                        rel="noopener noreferrer" to prevent newly opened tab 
                                        from being able to modify the original tab maliciously 
                                    */}
                                    <a href={headline.url} target="_blank" rel="noopener noreferrer">
                                        {headline.title}
                                    </a>
                                </h4>
                                <p className="card-text">{headline.description}...</p>
                                <a href={headline.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">More info</a>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                <p>loading...</p>
            </div>
        )
    );
}

//take data from redux store to components prop
const mapStateToProps = (state) => {
    return {
      headlines: state.headlines
    }
}

export default connect(mapStateToProps)(showNewsComponent);
