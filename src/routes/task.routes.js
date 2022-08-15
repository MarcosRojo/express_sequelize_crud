import { Router } from "express";

import {getTask, createTask, getTasks, updateTask, deleteTask} from '../controllers/tasks.controller.js'

const router = Router();
router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/tasks/:id', getTask);

export default router;