import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAdvertisement, updateAdvertisement} from '../actions/adverts'
import AdvertForm from './advertForm'

class AdvertDetails extends PureComponent {
  // state = {
  //   edit: false
  // }

  // toggleEdit = () => {
  //   this.setState({
  //     edit: !this.state.edit
  //   })
  // }

  componentWillMount(props) {
    this.props.fetchAdvertisement(this.props.match.params.name)
  }

  updateAdvertisement = (advertisement) => {
    this.props.updateAdvertisement(this.props.match.params.id, advertisement)
    this.toggleEdit()
  }

  render() {
    const {advertisement} = this.props
    if (!advertisement) return null

    return (
      <div>
        {
          this.state.edit &&
          <AdvertForm initialValues={advertisement} onSubmit={this.updateAdvertisement} />
        }

        {
          !this.state.edit &&
          <div>
            <button onClick={ this.toggleEdit }>new advert</button>
            <h1>{ advertisement.name }</h1>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    advertisement: state.advertisement
  }
}

export default connect(mapStateToProps, {fetchAdvertisement, updateAdvertisement})(AdvertDetails)
