
    



const {Schema, model} = require('../connection')

const myschema = new mongoose.Schema(
    {
    name : String,
    email : String,
    password : String,
    avatar: String,
    createdAt : Date
    }
)


module.exports = model('users', myschema);