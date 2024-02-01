import { FAIL_CONTACT, LOAD_CONTACT, SUCCESS_CONTACT } from "../ActionTypes/ActionTypes"
import axios from 'axios'


//get contacts
export const getContacts = ()=>async(dispatch)=>{
    dispatch({type:LOAD_CONTACT})
    try {
        const contacts =await axios.get('/api/contacts/getContacts')
        dispatch ({type:SUCCESS_CONTACT,payload:contacts.data})
    } catch (error) {
        dispatch({type:FAIL_CONTACT,payload:error})
    }
}
// get contact by id 
export const getOneContact = (id)=>async(dispatch)=>{
    dispatch({type:LOAD_CONTACT})
    try {
        const contacts =await axios.get(`/api/contacts/getContactById/${id} `)
        dispatch ({type:SUCCESS_CONTACT,payload:contacts.data})
    } catch (error) {
        dispatch({type:FAIL_CONTACT,payload:error})
    }
}