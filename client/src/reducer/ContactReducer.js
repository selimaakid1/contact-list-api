import { GET_CONTACT } from '../actions/types'

let initstate = [
    {
        name: "lima"
    }
]
const ContactReducer = (state = initstate, action ) => {
    switch(action.type){
        case GET_CONTACT:
            return action.payload
        default:
            return state
    }
}

export default ContactReducer