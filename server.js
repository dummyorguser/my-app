const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({status:200, "message":"Welcome to docker from API"});
});

app.listen(3000, () => {
    console.log("Server running on port: 3000");
})