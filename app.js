const express = require('express');
const cors = require('cors');
const contraller = require('./contraller.js')

const app = express();

app.use( cors() );

app.use( express.urlencoded({extended: true}));

app.use(express.json());

app.get('/users', (req, res) => {
    contraller.getUser()
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.send(error);
        });
});

app.post('/createuser', (req,res) => {
    contraller.addUser(req.body)
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            res.send(error);
        });
});

app.put('/updateuser', (req, res) => {
    contraller.udpateUser(req.body)
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            res.send(error);
        });
});

app.delete('/deleteuser', (req, res) => {
    contraller.deleteUser(req.query.id)
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            res.send(error);
        });
})

module.exports = app;