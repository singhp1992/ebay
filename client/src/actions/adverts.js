import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_ALL_ADVERTISEMENTS = 'FETCHED_ALL_ADVERTISEMENTS'
export const ADD_ADVERTISEMENT = 'ADD_ADVERTISEMENT'
export const FETCHED_DETAILED_ADVERTISEMENT = 'FETCHED_DETAILED_ADVERTISEMENT'


export const fetchAdvertisement = (advertisementId) => (dispatch) => {
    request
        .get(`${baseUrl}/advertisements/${advertisementId}`)
        .then(response => dispatch({
            type: FETCHED_DETAILED_ADVERTISEMENT,
            payload: response.body
        }))
        .catch(err => alert(err))
}

export const fetchAllAdvertisements = () => (dispatch) => {
    console.log('this is working')
    request
        .get(`${baseUrl}/advertisements`)
        .then(response => dispatch({
            type: FETCHED_ALL_ADVERTISEMENTS,
            payload: response.body.advertisements
        }))
        .catch(err => alert(err))
}

export const createAdvertisement = (advertisement) => (dispatch) => {
    request
        .post(`${baseUrl}/advertisements`)
        .send(advertisement)
        .then(response => dispatch({
            type: ADD_ADVERTISEMENT,
            payload: response.body
        }))
}
