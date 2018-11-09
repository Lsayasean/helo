import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            search: '',
            checked: '',
            listOfPost: {
                title: '',
                author: '',
                profilePicture: ''
            }
        }
    }

    searching(e){
        this.setState({search: e.target.value})
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.searching(e)} type="text" placeholder='search' />
                <button>Search</button>
                <button>Reset</button>
                <div>
                <input type='checkbox' id='My Post' name='My Post'/>
                <label>MyPost</label>
                </div>
            </div>
        );
    }
}

export default Dashboard;