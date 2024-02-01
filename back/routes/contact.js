//require mongoose 
const express =require ('express')
const { addContact, test, getContacts, getById, deleteContact, editContact } = require('../controllers/contact')

// require router
const router = express.Router()


// test Route
router.get ('/test',test)

//add conatct route 
router.post('/add_contact',addContact)
// get contact 
router.get('/getContacts',getContacts)
//get contact by id
router.get('getContactById/:_id',getById) 

//delete contact
router.delete('/deleteContacts/:_id',deleteContact)

// edit contact 
router.put('/editContact/:_id',editContact)
//export router 
module.exports = router