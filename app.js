const express = require('express');
const app = express();

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true}));

const students = [];

app.post('/student', (req, res) => {
    students.push({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone
    });
    res.send('success');
});


app.listen(3000);