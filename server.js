const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

const Contact = mongoose.model("Contact", {
name: String,
email: String
});

app.post("/contact", async (req,res)=>{
await Contact.create(req.body);
res.send("Saved");
});

app.listen(3000, ()=>{
console.log("Server running");
});