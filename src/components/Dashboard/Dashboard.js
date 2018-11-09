import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../ducks/reducer';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            checked: '',
            title: '',
            posts: '',
            profilePicture: ''
        }
    }

    async componentDidMount() {
        let res = await axios.get('/get-post')
        console.log('from did mount', res.data)
        this.props.getData(res.data)

    }

    searching(e) {
        this.setState({ search: e.target.value })
    }
    getPost(id) {
        axios.get(`/get/post/${id}`).then(res => {
            this.setState({
                title: res.data.author,
                posts: res.data.post,
                profilePicture: res.data.picture
            })
        })
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.searching(e)} type="text" placeholder='search' />
                <button>Search</button>
                <button>Reset</button>
                <div>
                    <input type='checkbox' id='My Post' name='My Post' />
                    <label>MyPost</label>
                </div>
            </div>
        );
    }
}

function stateToProps(state) {
    return state
}

export default connect(stateToProps, { getData })(Dashboard);