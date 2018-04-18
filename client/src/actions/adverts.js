import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_ALL_ADVERTISEMENTS = 'FETCHED_ALL_ADVERTISEMENTS'
export const ADD_ADVERTISEMENT = 'ADD_ADVERTISEMENT'
export const REMOVE_ADVERTISEMENT = 'REMOVE_ADVERTISEMENT'
export const UPDATE_ADVERTISEMENT = 'UPDATE_ADVERTISMENT'
export const FETCHED_DETAILED_ADVERTISEMENT = 'FETCHED_DETAILED_ADVERTISEMENT'


export const deleteAdvertisement = (advertisementId) => (dispatch) => {
    request
        .delete(`${baseUrl}/advertisements/${advertisementId}`)
        .then(response => dispatch({
            type: REMOVE_ADVERTISEMENT,
            payload: advertisementId
        }))
}

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

export const updateAdvertisement = (advertisementId, updates) => (dispatch) => {
    request
        .put(`${baseUrl}/advertisements/${advertisementId}`)
        .send(updates)
        .then(response => dispatch({
            type: UPDATE_ADVERTISEMENT,
            payload: response.body
        }))
}