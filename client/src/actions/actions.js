import { GET_CONTACT } from './types'
import axios from 'axios'

export const getContact = () => dispatch => {
    axios.get('/allcontact')
    .then( res => dispatch({
        type: GET_CONTACT,
        payload: res.data
    }) )
    .catch(err => console.log(err))
}

export const addContact = newContact => dispatch => {
    axios.post('/newcontact', newContact)
    .then(() => dispatch(getContact()))
    .catch(err => console.log(err))
}

export const deleteContact = id => dispatch => {
    axios.delete(`/deletecontact/${id}`)
    .then(() => dispatch(getContact()))
    .catch(err => console.log(err))
}

export const editContact = (id, updatedContact) => dispatch => {
    axios.put(`/editcontact/${id}`, updatedContact)
    .then(() => dispatch(getContact()))
    .catch(err => console.log(err))
}