import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const categoriesComponent = () => {
    return (
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
    );
}

export default withRouter(categoriesComponent);
