import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class searchBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }
    
    handleChange = (event) => {
        this.setState ({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // prevent native submitting behavior        
        this.props.history.push(`/search/${this.state.query}`) //programmatically redirect to result page
        this.setState({
            query: ""
        })
    }

    render() {
        return (
            <div>
                <form   className="form-inline center" 
                        action="/search/:query" 
                        onSubmit={this.handleSubmit}
                >
                    <div className="searchBar">
                        <input  type="text" 
                                placeholder="Search Latest News" 
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.query}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(searchBarComponent);