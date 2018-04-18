import { FETCHED_DETAILED_ADVERTISEMENT, UPDATE_ADVERTISEMENT } from '../actions/adverts'

export default function (state = null, action) {
    switch (action.type) {
        case FETCHED_DETAILED_ADVERTISEMENT:
            return action.payload


        case UPDATE_ADVERTISEMENT:
            if (action.payload.id === state.id) {
                return action.payload
            } else
                return state

        default:
            return state
    }
}