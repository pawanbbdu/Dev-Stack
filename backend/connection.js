const mongoose = require('mongoose');
const url = 'mongodb+srv://pawan:pawan@cluster0.kbjuzfi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
})
.catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;
// synchronous and asynchronous