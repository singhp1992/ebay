import { FETCHED_ALL_ADVERTISEMENTS, ADD_ADVERTISEMENT } from '../actions/adverts'



export default function (state = [], action) {
    switch (action.type) {
        case FETCHED_ALL_ADVERTISEMENTS:
            return action.payload
        
            case ADD_ADVERTISEMENT:
            return [...state, action.payload]

        default:
            return state
    }
}