import Home from '../components/homepage'
import React, { PureComponent } from 'react'

class MVP extends PureComponent {

    render() {
        return (
            <div className="innerAppBox">
                <br /><br />
                <Home />
                <br /><br />
            </div>
        )
    }
}

export default MVP