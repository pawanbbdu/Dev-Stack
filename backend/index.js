const express = require('express');
const app = express();
//importing routers
const userRouter = require('./routers/userRouter');
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000']
}));

//parsh json data
app.use(express.json());
//adding routers
app.use('/user', userRouter);

const port = 5000;

app.get('/', (req,res) => {
    res.send('working perfectly');
});

app.get('/', (req,res) => {
    res.send('Respons from Add');

});
app.listen (port, () => {console.log('server started'); } );


