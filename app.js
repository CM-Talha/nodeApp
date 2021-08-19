const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
const port = 3000
mongoose.connect(
    process.env.db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (req, res) => {
        console.log('connected to mongodb');
        console.log(res);
    })

app.use(express.json())
app.get('/users', (req, res) => {
    let users = ['Talha', 'Hassan', 'Mazhar', 'Hafsa', 'Mazhar'];
    res.json({ users: { users } });
}
);
app.post('/users', (req, res) => {
    console.log(req.body.name);
    res.send(`User is created successfully ${req.body.name} from ${req.body.city}`);

});
app.listen(port, () => console.log(`Example app listening on port port!`))