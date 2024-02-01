import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { getOneContact } from '../../JS/Actions/ContactActions'

const ContactDetails = () => {
    const dispatch = useDispatch ()
    const navigate = useNavigate()


    const contact= useSelector((state)=>state.contactReducer.oneContact)
    const load= useSelector((state)=>state.contactReducer.load)
    const match = useMatch('contactDetails/:id');

    useEffect(() => {
        dispatch(getOneContact(match.params.id))
          }
         ,[dispatch,match.params.id])
console.log(load)
console.log(contact)

  return (
    <div> 
{
    load? 'loading...'
    :
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img alt='profile' variant="top" src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" />
    <Card.Body>
      <Card.Title>{contact.name}</Card.Title>
      <Card.Text>
        {contact.email}
      </Card.Text>
      <Card.Text>
        {contact.phone}
      </Card.Text>
      <Button onClick={()=>navigate(-1)} variant="primary">Back</Button>
    </Card.Body>
  </Card>
    </>
}

         </div>
  )
}

export default ContactDetails