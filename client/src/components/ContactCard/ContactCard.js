import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const ContactCard = ({contact}) => {
  const navigate = useNavigate()
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img alt='profile' variant="top" src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.email}
        </Card.Text>
        <Button onClick={()=>navigate(`/contactDetails/${contact._id}`)} variant="primary">More Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard