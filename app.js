const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const User=require('./user');
const app = express()
app.use(express.json())
const port = 3000
mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (req, res) => {
        console.log('connected to mongodb');
    })


app.get('/users', (req, res) => {
    let users = ['Talha', 'Hassan', 'Mazhar', 'Hafsa', 'Mazhar'];
    res.json({ users: { users } });
});

app.post("/create_users",async (req, res) => {
 try{
    const new_user = User(req.body);
    await new_user.save();
    res.json(new_user);
 }catch(err){
    console.log(err);
 }

})

app.listen(port, () => console.log(`nodeApp listening on port ${port}!`))