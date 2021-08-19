const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
app.use(express.json())
const port = 3000
mongoose.connect(
    process.env.db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (req, res) => {
        console.log('connected to mongodb');
        console.log(res);
    })


app.get('/users', (req, res) => {
    let users = ['Talha', 'Hassan', 'Mazhar', 'Hafsa', 'Mazhar'];
    res.json({ users: { users } });
});

app.post("/users",async (req, res) => {
    const new_user = new User(req.body);
    await new_user.save();
    res.json(new_user);
})

app.listen(port, () => console.log(`Example app listening on port port!`))