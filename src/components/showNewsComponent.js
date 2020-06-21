import React from 'react';

const showNewsComponent = (props) => {
    return (
        props.headlines.length ? (
            props.headlines.map(headline => {
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
    );
}

export default showNewsComponent;
