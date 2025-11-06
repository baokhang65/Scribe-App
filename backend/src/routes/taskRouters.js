import express from 'express'
import { getAllTasks, createTask, updateTask, deleteTask, smartCreateTask } from '../controllers/taskControllers.js'

const router = express.Router()

router.get("/", getAllTasks)

router.post("/", createTask)
router.post("/smart", smartCreateTask)

router.put("/:id", updateTask)

router.delete("/:id", deleteTask)

export default router