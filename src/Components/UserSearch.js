import React, { Component, Fragment } from 'react'
import { FaSearch } from 'react-icons/fa';

export default class UserSearch extends Component {
    render() {
        const { handleSearchSubmit, handleSearchChange, value } = this.props

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto col-md-6 my-2 text-center">
                            <form className="mt-4" onSubmit={handleSearchSubmit}>
                                <label htmlFor="search" className="text-capitalize">Type user name</label>
                                <div className="input-group">
                                    <input type="text" name="search" placeholder="john" className="form-control" onChange={handleSearchChange} value={value} />
                                    <div className="input-group-append">
                                        <button type="submit" className="input-group-text bg-primary text-white" >
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
