const contactSchema = require("../models/contactSchema")

exports.test = (req,res)=>{
    try {
        res.status(200).send('holaaaaaaaa')
    } catch (error) {
        res.status(400).send(error)
    }
}

// add new contact 
exports.addContact = async (req,res)=>{
try {
    const {name,email,phone}=req.body
    const newContact = new contactSchema({name,email,phone})
    await newContact.save()
    res.status(200).send({success:[{msg:'Contact added '}],newContact})
} catch (error) {
    res.status(400).send (error)
}
}
//get contacts
exports.getContacts = async(req,res)=>{
    try {
    const contacts = await contactSchema.find()
    res.status(200).send(contacts)
    } catch (error) {
        res.status(400).send (error)

    }
}
//get contact by id 
exports.getById = async (req,res)=>{
    try {
        const {_id} = req.params
        let foundContact = await contactSchema.findById({_id})
        !foundContact?
        res.status(400).send('contact not found ')
        :
        res.status(200).send(foundContact)
    } catch (error) {
        res.status(400).send (error)   
    }
}
//delete contact 
exports.deleteContact = async (req,res)=>{
    try {
        const {_id}=req.params
        await contactSchema.findByIdAndDelete({_id})
        res.status(200).send({msg:'contact deleted successfully'})
        
    } catch (error) {
        res.status(400).send (error)   
        

    }
}
// edit contact (take 2 parameters)
exports.editContact = async(req,res)=>{
    try {
        const {_id}=req.params
       const {name,email,phone}=req.body
       await contactSchema.findByIdAndUpdate({_id},{$set:{name,email,phone}})
    } catch (error) {
        res.status(400).send (error)   

    }
}