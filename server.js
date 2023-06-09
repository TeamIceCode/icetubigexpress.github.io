const express = require('express');
const cors = require('cors')


const userRouter = require('./routes/users.router');
const getAllItems = require('./routes/items.router');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/merchandise', getAllItems);

app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
})

// const express = require('express');
// const cors = require('cors')

// // routes
// const userRouter = require('./routes/users.router');



// const app = express();
// app.use(cors());
// const PORT = 3000;

// // Register a middleware function that parses incoming JSON payloads/request
// app.use(express.json());

// // middleware logger
// // app.use((req, res, next) => {
// //     const start = Date.now();
// //     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
// //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// //     res.header('Access-Control-Allow-Headers', 'Content-Type');  
// //     next();
// //     const delta = Date.now() - start;
// //     console.log(`${req.method} ${req.url} ${delta}ms`);
// // });

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.post('/greeting', (req, res) => {
//     const name = req.body.name;
//     const greeting = `Hello Master ${name}`;
//     res.send(greeting);
// });

// app.use('/users', userRouter);

// // http://localhost:3000/change-password (HTTP PUT METHOD)



// app.listen(PORT, () => {
//     console.log(`Server is listening to http://localhost:${PORT}`);
// });

