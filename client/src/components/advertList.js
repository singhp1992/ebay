import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllAdvertisements, createAdvertisement } from '../actions/adverts'
import { Link } from 'react-router-dom'
import AdvertForm from './advertForm'


class AdvertsList extends PureComponent {

    createAdvertisement = (advertisement) => {
        this.props.createAdvertisement(advertisement)
    }

    componentWillMount() {
        this.props.fetchAllAdvertisements()
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
                            {/* <th>Image</th> */}
                            {/* <th>Email</th> */}
                            {/* <th>Phone</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { advertisements.map(advertisement => (<tr key={advertisement.id}>
                            <td>{advertisement.id}</td>
                            <td>
                                <Link to={`/advertisements/${advertisement.id}`}>{advertisement.name}</Link>
                            </td>
                            <td>&euro; {advertisement.price}.00</td>
                        </tr>)) } 
                    </tbody>
                </table>
                <h1>Create a new Advert!</h1>

                    <AdvertForm onSubmit={this.createAdvertisement} />
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