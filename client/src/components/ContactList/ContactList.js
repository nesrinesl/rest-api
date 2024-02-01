import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../JS/Actions/ContactActions'
import ContactCard from '../ContactCard/ContactCard'
import { Spinner } from 'react-bootstrap'

const ContactList = () => {
  const dispatch = useDispatch()
  const load = useSelector((state)=>state.contactReducer.load)
  const listContacts  =useSelector((state)=>state.contactReducer.listContacts)
  useEffect(() => {
  dispatch(getContacts())        
    }
   ,[dispatch])
  
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',marginTop:"9%"}}>
      {
        load? <div style={{display:'flex',justifyContent:'center'}}> <Spinner animation="border" variant="dark" /></div>
        :
        listContacts.map((contact)=>
        <ContactCard contact={contact} key={contact._id} />)
      }
    </div>
  )
}

export default ContactList
