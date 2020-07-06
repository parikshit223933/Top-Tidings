import React from "react";
import { Link, withRouter } from "react-router-dom";

const categoriesComponent = (props) => {
	return (
		<React.Fragment>
			<h4 className="text-center d-none d-md-block mt-3 mb-0">
				Top headlines from your favourite category
			</h4>
			<div className="container">
				<br />

				<div className="d-none d-md-flex justify-content-between sources-expanded-container ml-5 mr-5">
					<Link to="/category/general" className="category-link">
						<button className="ctg-btn">General</button>
					</Link>
					<Link to="/category/business" className="category-link">
						<button className="ctg-btn">Business</button>
					</Link>
					<Link to="/category/health" className="category-link">
						<button className="ctg-btn">Health</button>
					</Link>
					<Link to="/category/sports" className="category-link">
						<button className="ctg-btn">Sports</button>
					</Link>
					<Link to="/category/technology" className="category-link">
						<button className="ctg-btn">Technology</button>
					</Link>
					<Link
						to="/category/entertainment"
						className="category-link"
					>
						<button className="ctg-btn">Entertainment</button>
					</Link>
					<Link to="/category/science" className="category-link">
						<button className="ctg-btn">Science</button>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withRouter(categoriesComponent);
