const express = require('express');
const router = express.Router();
const {getTasks} = require('../controllers/task')
router.get('/getTasks',getTasks);
router.post('/addTasks')
// router.put('putTasks')
// router.delete('deleteTasks')
module.exports = router;