//import Home from '../components/homepage'
import React, { PureComponent } from 'react'
import AdvertList from '../components/advertList'
import AdvertDetails from '../components/advertDetails'

class MVP extends PureComponent {

    render() {
        return (
            <div className="innerAppBox">
                <br /><br />
                <AdvertList />
                <AdvertDetails />
                <br /><br />
            </div>
        )
    }
}

export default MVP