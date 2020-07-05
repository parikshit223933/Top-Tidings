import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const categoriesComponent = (props) => {
    return (
        <div>
            <div className="center">
                <br />
                <h4>Top headlines from your favourite category</h4>
                <Link to='/category/general'><button className="ctg-btn">General</button></Link>
                <Link to='/category/business'><button className="ctg-btn">Business</button></Link>
                <Link to='/category/health'><button className="ctg-btn">Health</button></Link>
                <Link to='/category/sports'><button className="ctg-btn">Sports</button></Link>
                <Link to='/category/technology'><button className="ctg-btn">Technology</button></Link>
                <Link to='/category/entertainment'><button className="ctg-btn">Entertainment</button></Link>
                <Link to='/category/science'><button className="ctg-btn">Science</button></Link>
            </div>

            <div className="container float-right dropdown show">
                <button class="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Categories</button>

                <div class="dropdown-menu hidden-md-up">
                    <Link to='/category/general' className="dropdown-item">General</Link>
                    <Link to='/category/business' className="dropdown-item">Business</Link>
                    <Link to='/category/health' className="dropdown-item">Health</Link>
                    <Link to='/category/sports' className="dropdown-item">Sports</Link>
                    <Link to='/category/technology' className="dropdown-item">Technology</Link>
                    <Link to='/category/entertainment' className="dropdown-item">Entertainment</Link>
                    <Link to='/category/science' className="dropdown-item">Science</Link>
                    <div class="dropdown-divider"></div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(categoriesComponent);
