import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import axios from 'axios'

export default class PersonInput extends Component {
    state = {
        users: [],
        name: '',
        email: '',
        phone1: '',
        phone2: '',
        shipping: '',
        billing: '',
        toHome: false
    }

    

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone1: this.state.phone1,
            phone2: this.state.phone2,
            shipping: this.state.shipping,
            billing: this.state.billing,
            expand: false
        }

        axios.post('http://localhost:3000/data', { data })
            .then(res => {
                const updatedUsers = [...this.state.users, data];
                this.setState({
                    users: updatedUsers,
                    toHome: true,
                })
                console.log(res);

            });

        e.target.reset();
    }



    handleChange = input => e => {
        this.setState({
            [input]: [e.target.value]
        });

    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 mx-auto">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Person Name: </label>
                                <input type="text" className="form-control" name="name" id="name" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"> Person Email:</label>
                                <input type="text" className="form-control" name="email" id="email" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone1">Phone Number:</label>
                                <input type="tel" className="form-control" name="phone1" id="phone1" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone2">Phone Number 2 (opcional): </label>
                                <input type="tel" className="form-control" name="phone2" id="phone2" onChange={this.handleChange} />
                            </div>

                            <br />
                            <div className="form-group">
                                <label htmlFor="shipping">Shipping Address: </label>
                                <textarea rows="3" className="form-control" name="shipping" id="shipping" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="billing"> Billing Address:</label>
                                <textarea rows="3" className="form-control" name="billing" id="billing" onChange={this.handleChange} required />
                            </div>
                            <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Add User</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
