const mongoose = require('mongoose');
const Todo = require('../models/todoModel');

mongoose.connect('mongodb://localhost:27017/todo_db')

async function createTodo() {
    let result = {
        status: 0, 
        msg: ""
    }
    try {
        await Todo.create(data)
        result['status'] = 201
        result['msg'] = "Todo created successfully."
        return result
    } catch (e) {
        result['status'] = 400
        result['msg'] = e.message
        return result
    }
}

async function findAllTodo() {
    let result = {
        status: 0, 
        msg: ""
    }
    try {
        await Todo.create(data)
        result['status'] = 201
        result['msg'] = "Todo created successfully."
        return result
    } catch (e) {
        result['status'] = 400
        result['msg'] = e.message
        return result
    }
}

async function filterTodo(id) {
    return
}

async function findTodo(id) {
    return
}

async function updateTodo(id) {
    return
}

async function deleteTodo(id) {
    return
}


module.exports = [
    createTodo,
    findAllTodo,
    findTodo,
    updateTodo,
    deleteTodo,
    filterTodo
]