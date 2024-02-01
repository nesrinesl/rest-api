//require mongoose
const mongoose =require('mongoose')

//get schema 
const Schema =mongoose.Schema

//create contact schema 
const contactSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:Number
});

// expoert schema 
module.exports= Contact =mongoose.model('contact',contactSchema)










// export schema
//const Contact = mongoose.model('contact', contactSchema);

//module.exports = Contact;