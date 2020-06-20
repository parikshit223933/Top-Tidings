import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class postComponent extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/'); //redirect to '/' in react
    }   

    /* render method returns a description of what you want to see on the screen */
    render() {
        let postList = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className="btn grey right" onClick={this.handleClick}>
                    Delete Post
                </button>
            </div>
        ) : (
            <div className="center">
                <p>No post found</p>
            </div>
        )

        return (
            <div className="container">
                {postList}
            </div>

<nav className="nav-wrapper red darken-3">
            <div className="container">
                {/* create links to navigate on different URLs and When we click on any of that particular Link, 
                it should load that page which is associated with that path without reloading the page */}
                <Link className="brand-logo" to="/">NewsTime</Link>
                <ul className="right">
                {/* <NavLink> is a special version of the <Link> that add styling attributes 
                {activeClassName="active"} to the rendered element  */}
                <li><NavLink exact to="/">Home</NavLink></li>
                </ul>
            </div>
        </nav> 







<div className="row">
<div className="col s12 m6">
    <div className="card">
        <div className="card-image">
            <img src={headline.urlToImage} alt="can't get image" />
            <span className="card-title">{headline.title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
            <p>{headline.description}...</p>
        </div>
    </div>
</div>
</div>
        )
    }
}

/* The mapStateToProps method is used to combine props of component
   with state of redux store and wrap then into props of component */

const mapStateToProps = (state, ownProps) => { //ownProps is used to use props of that component
    let id = ownProps.match.params.post_id;
    return {
      post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(postComponent)
