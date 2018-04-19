import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllAdvertisements, createAdvertisement } from '../actions/adverts'
import { Link } from 'react-router-dom'
import AdvertForm from './advertForm'


class AdvertsList extends PureComponent {

    componentWillMount() {
        this.props.fetchAllAdvertisements()
    }

    createAdvertisement = (e) => {
        e.preventDefault()
        this.props.createAdvertisement(e.target.id)
    }

    render() {
        const { advertisements } = this.props
        return (
            <div>
                <h1>All Advertisements</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        { advertisements.map(advertisement => (<tr key={advertisement.id}>
                            <td>{advertisement.id}</td>
                            <td>
                                <Link id={advertisement.id} onSubmit={this.createAdvertisement} to={`/advertisements/${advertisement.id}`}>{advertisement.name}</Link>
                            </td>
                            <td>&euro; {advertisement.price}.00</td>
                        </tr>)) } 
                    </tbody>
                </table>
                <h1>Create a new Advert!</h1>

                    <AdvertForm />
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        advertisements: state.advertisements
    }
}

export default connect(mapStateToProps, {
    fetchAllAdvertisements,
    createAdvertisement,
})(AdvertsList)