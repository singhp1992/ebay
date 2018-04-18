import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllAdvertisements, createAdvertisement, deleteAdvertisement } from '../actions/adverts'
import { Link } from 'react-router-dom'
import AdvertForm from './advertForm'
//import advertisement from '../reducers/advertisement';

class AdvertsList extends PureComponent {
    static propTypes = {
        advertisements: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired
        })).isRequired
    }

    createAdvertisement = (advertisement) => {
        this.props.createAdvertisement(advertisement)
    }

    deleteAdvertisement = (advertisementId) => {
        this.props.deleteAdvertisement(advertisementId)
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
                    {/* <thead>
                        <tr>
                            <th>Name</th><br />
                            <th>Description</th><br />
                            <th>Price</th><br />
                            <th>Image</th><br />
                            <th>Email</th><br />
                            <th>Phone</th><br />
                        </tr>
                    </thead> */}
                    <tbody>
                        {advertisements.map(advertisement => (<tr key={advertisement.id}>
                            <td>{advertisement.id}</td>
                            <td>
                                <Link to={`/advertisements/${advertisement.id}`}>{advertisement.name}</Link>
                            </td>
                            <td>&euro; {advertisement.price}.00</td>
                            <td><button onClick={() => this.deleteAdvertisement(advertisement.id)}>X</button></td>
                        </tr>))}
                    </tbody>
                </table>
                <h1>Create a new product</h1>

                    <AdvertForm onSubmit={this.createAdvertisement} />
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        advertisements: state.advertisements,
    }
}

export default connect(mapStateToProps, {
    createAdvertisement,
    deleteAdvertisement,
    fetchAllAdvertisements
})(AdvertsList)