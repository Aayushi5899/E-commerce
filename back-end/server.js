const express = require('express');


const app = express();


app.get ('/test', (req, res)=>{
    res.send("Hello API..")
});

app.listen(5000)