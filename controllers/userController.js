const mongoose = require('mongoose');
const User = require('../models/userModel');

mongoose.connect('mongodb://localhost:27017/todo_db')

async function createUser(data) {
    let result = {
        status: 0, 
        msg: ""
    }
    try {
        await User.create(data)
        result['status'] = 201
        result['msg'] = "User created successfully."
        return result
    } catch (e) {
        result['status'] = 400
        result['msg'] = e.message
        return result
    }
}

async function findAllUsers() {
    let result = {
        status: 0, 
        data: [],
        msg: ""
    }
    try {
        const users = await User.find()
        result['status'] = 200
        result['data'] = users
        return result
    } catch (e) {
        result['status'] = 400
        result['msg'] = e.message
        return result
    } 
}

async function filterUser(filter) {
    let result = {
        status: 0, 
        data: [],
        msg: ""
    }
    try {
        const users = await User.find({
            first_name: RegExp(`${filter['first_name']}`, 'i'),
            last_name: RegExp(`${filter['last_name']}`, 'i')
        })
        result['status'] = 200
        result['data'] = users
        return result
    } catch {
        result['status'] = 400
        result['msg'] = e.message
        return result
    }
}

async function findUser(userId) {
    let result = {
        status: 0, 
        data: {},
        msg: ""
    }
    try {
        const user = await User.findById(userId)
        result['status'] = 200
        result['data'] = user
        return result
    } catch (e) {
        result['status'] = 400
        result['msg'] = e.message
        return result
    }
}

async function updateUser(id, data) {
    let result = {
        status: 0, 
        msg: ""
    }
    try {
        await User.updateOne({_id: id}, data)
        result['status'] = 200
        result['msg'] = "User update successfully."
        return result
    } catch (e) {
        result['status'] = 400
        result['msg'] = e.message
        return result
    }
}

async function deleteUser(id) {
    let result = {
        status: 0, 
        msg: ""
    }
    try {
        await User.findByIdAndDelete(id)
        result['status'] = 200
        result['msg'] = "User deleted."
        return result
    } catch (e) {
        result['status'] = 400
        result['msg'] = e.message
        return result
    }
}

module.exports = [
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteUser,
    filterUser
]