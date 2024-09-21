const { rejects } = require('assert');
const { response } = require('./app');
const User = require('./module.js');

//read

const getUser = () =>{
    return new Promise((resolve, reject) => {
        User.find()
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};


//create 
const addUser = (req) => {
    return new Promise((resolve, reject) => {
        const user = new User({
            id: req.id,
            name: req.name
        });
        user.save()
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    })
};

const udpateUser = (req) => {
    return new Promise((resolve, reject) => {
        const id = req.id;
        const name = req.name;

        User.updateOne({id: id}, {$set: {name: name}})
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
};

const deleteUser = (req) => {
    return new Promise((resolve, reject) => {
        User.deleteOne({id: req})
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

exports.getUser = getUser;
exports.addUser = addUser;
exports.udpateUser = udpateUser;
exports.deleteUser = deleteUser;