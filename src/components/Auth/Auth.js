import React, { Component } from 'react';
import axios from 'axios';
import {updateUserName, updateId, updatePicture} from '../../ducks/reducer';
import {connect} from 'react-redux'


class Auth extends Component {
    state = {
        username: '',
        password: ''
    }

    updateName(e){
        this.setState({username: e.target.value})
    }

    updatePass(e){
        this.setState({password: e.target.value})
    }

    async register(){
        let res = await axios.post('/register',{
            username: this.state.username,
            password: this.state.password
        })
        console.log(res)
        this.props.updateUserName(this.state.username)
    }
    async login(){
        let res = await axios.post('/login',{
            username: this.state.username,
            password: this.state.password
        })
        console.log(res)
        if(res.data === 'Logged in'){
            this.props.history.push('/dashboard')
        }
        this.props.updateUserName(this.state.username)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.updateName(e)}  type='text' placeholder='name'/>
                <input onChange={(e) => this.updatePass(e)} type='text' placeholder='password' />
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        );
    }
}

const dispatchToProps = {
    updateId,
    updatePicture,
    updateUserName
}

export default connect(null, dispatchToProps)(Auth);