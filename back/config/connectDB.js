//require mongoose 
const mongoose = require('mongoose')

//function connect to DB 
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('connected to DATABASE succesfully!!')
    } catch (error) {
        console.log(error)
    }
}
//export function  connect
module.exports = connect ;