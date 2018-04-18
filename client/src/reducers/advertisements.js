import { FETCHED_ALL_ADVERTISEMENTS, ADD_ADVERTISEMENT, REMOVE_ADVERTISEMENT, UPDATE_ADVERTISEMENT } from '../actions/adverts'

export default function (state = [], action) {
    switch (action.type) {
        case FETCHED_ALL_ADVERTISEMENTS:
            return state

        case ADD_ADVERTISEMENT:
            return [
                ...state,
                action.payload
            ]

        case REMOVE_ADVERTISEMENT:
            return state.filter(advertisement => advertisement.id !== action.payload)

        case UPDATE_ADVERTISEMENT:
            return state.map(advertisement => {
                if (advertisement.id === action.payload.id) {
                    return action.payload
                } else
                    return advertisement
            })

        default:
            return state
    }
}