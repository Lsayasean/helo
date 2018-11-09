import React from 'react';
import { Link } from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
    return (
        <div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
            <div>
            {props.username}
            {props.picture}
            </div>
        </div>
    )
}

function stateToProps(state){
    return{
        username: state.username,
        picture: state.picture
    }
}

export default connect(stateToProps)(Nav);