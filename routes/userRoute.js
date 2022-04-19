const express = require('express');
const router = express.Router();
const [
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteUser,
    filterUser
] = require('../controllers/userController');

// Create User
router.post('/', async (req,res) => {
    const result = await createUser(req.body);
    console.log(result)
    if (result.status === 201) {
        res.status(201).json({"detail":result.msg});
    } else if (result.status === 400) {
        res.status(400).json({"detail":result.msg});
    } else {
        res.status(404).json({"detail":"Not found"});
    }
})
// Get All Users
router.get('/', async (req,res) => {
    const result = await findAllUsers();
    console.log(result)
    if (result.status === 200) {
        res.status(200).json(result.data);
    } else if (result.status === 400) {
        res.status(400).json({"detail":result.msg});
    } else {
        res.status(404).json({"detail":"Not found"});
    }
})
// Filter Users
router.post('/search', async (req,res) => {
    const result = await filterUser(req.body);
    console.log(result)
    if (result.status === 200) {
        res.status(200).json(result.data);
    } else if (result.status === 400) {
        res.status(400).json({"detail":result.msg});
    } else {
        res.status(404).json({"detail":"Not found"});
    }
})
// Get User
router.get('/:userId', async (req,res) => {
    const result = await findUser(req.params['userId']);
    console.log(result)
    if (result.status === 200) {
        res.status(200).json(result.data);
    } else if (result.status === 400) {
        res.status(400).json({"detail":result.msg});
    } else {
        res.status(404).json({"detail":"Not found"});
    }
})
// Update User
router.put('/:userId', async (req,res) => {
    const result = await updateUser(req.params['userId'], req.body);
    console.log(result)
    if (result.status === 200) {
        res.status(200).json({"detail":result.msg});
    } else if (result.status === 400) {
        res.status(400).json({"detail":result.msg});
    } else {
        res.status(404).json({"detail":"Not found"});
    }
})
// Delete User
router.delete('/:userId', async (req,res) => {
    const result = await deleteUser(req.params['userId']);
    console.log(result)
    if (result.status === 200) {
        res.status(200).json({"detail":result.msg});
    } else if (result.status === 400) {
        res.status(400).json({"detail":result.msg});
    } else {
        res.status(404).json({"detail":"Not found"});
    }
})

module.exports = router
