import { FAIL_CONTACT, LOAD_CONTACT, ONE_CONTACT, SUCCESS_CONTACT } from "../ActionTypes/ActionTypes"


//intialState
const intialState = {
load:false,
success:null,
fail:null,
listContacts:[],
oneContact:{}
}
//reducer function
const contactReducer = (state=intialState,{type,payload})=>{
    switch (type) {

       case LOAD_CONTACT:
        return {...state,load:true}
        case SUCCESS_CONTACT:
        return{...state,load:false,listContacts:payload}
    case FAIL_CONTACT:
        return{...state,load:false,fail:payload}
        case ONE_CONTACT:
            return {...state,oneContact:payload,load:false}

        default:
         return state
    }
}
//export
export default contactReducer