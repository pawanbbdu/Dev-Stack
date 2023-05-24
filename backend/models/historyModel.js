const {Schema, model} = require('../connection')

const myschema = new Schema({
    user : { type: Schema.Types.ObjectId, ref: 'users' },
    data : String,
    password : String,
    avatar: String,
    createdAt : Date
})

module.exports = model('history', myschema);
