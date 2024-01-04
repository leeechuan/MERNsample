const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors(
    {
        origin: ["httmps://mern-sample-eight.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect("mongodb+srv://admin:test1234@cluster0.hvxbaty.mongodb.net/mern?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users)
    }).catch(function(err) {
        res.json(err)
    })
})

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
})




app.listen(3001, () =>{
    console.log("Server is Running")
})
