import express from 'express';
import { createTask, getTask, getTasks, updateTask, deleteTask } from '../controllers/task/taskController.js';
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/task/create',protect, createTask)

router.get('/tasks',protect, getTasks)
router.get('/task/:id',protect, getTask);

router.put('/task/update/:id', protect, updateTask);
router.delete('/task/delete/:id', protect, deleteTask);

export default router;