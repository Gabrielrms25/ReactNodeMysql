const express = require('express');
const app = express();

// teste

app.get("/", (req, res) =>{
    res.send(" word");
});


app.listen(3001, () => {
    console.log('running on port 3001');
});