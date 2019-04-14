import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios'

import User from './User'
import { FaPlus } from 'react-icons/fa';
import UserSearch from './UserSearch';

export default class PersonList extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        //here be fetch
        axios.get('http://localhost:3000/data').then(res => {
            this.setState({
                users: res.data
            });
            console.log(res.data)
        });
    }
    // async componentWillMount() {

    //     try {
    //         const url = 'http://localhost:3000/data';
    //         const { data: users } = await axios.get(url)
    //         this.setState({ users })


    //     } catch (error) {
    //         console.log(error);

    //     }
    // }
    // async componentDidUpdate() {
    //     const { data: users } = await axios.get('http://localhost:3000/data');
    //     this.setState({ users });
    // }




    renderUsers = users => {
        if (this.state.users.length > 0) {
            return this.state.users.map(user => {
                return (
                    <User
                        key={user.id}
                        user={user}
                        handleExpand={this.handleExpand}
                    />
                );
            });
        }
        return <li>No users</li>;
    };
    handleExpand = id => {
        this.setState({
            users: this.state.users.map(user => {
                if (user.id === id) {
                    user.expand = !user.expand;
                } else {
                    user.expand = false;
                }
                return user;
            })
        });
    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <UserSearch />
                    <div className="col-sm-12 col-md-6 mx-auto">
                        <ul className="list-group">
                            {this.renderUsers(this.props.users)}</ul>
                    </div>
                </div>
                <Link to="/adduser"> <button className="btn-round btn-green btn-fixed"><FaPlus /></button></Link>
            </div>
        )
    }
}
