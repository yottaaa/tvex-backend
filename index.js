const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const home = require('./routes/indexRoute');
const todos = require('./routes/todoRoute'); 
const users = require('./routes/userRoute'); 

// middleware
app.use(bodyParser.json());

// routers
app.use('/', home);
app.use('/api/v1/todos', todos);
app.use('/api/v1/users', users);

// if the url does not exists
app.all('*', (req, res) => {
    res.status(404).send('Sorry not found')
})

// listen the server
app.listen(port, () => {
    console.log(`You can access the site in http://localhost:${port}/`)
})
