import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Home extends PureComponent {
    render() {
        return (
            <div>
                <button type='buy'> Show me what I can buy! </button>
                <button type='sell'> I'd like to post an ad! </button>
            </div>
        )
    }
}

export default Home