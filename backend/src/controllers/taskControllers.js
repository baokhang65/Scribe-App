import Task from '../models/taskModel.js'
import antlr4 from 'antlr4'
import SmartTodoLexer from '../parser/SmartTodoLexer.js'
import SmartTodoParser from '../parser/SmartTodoParser.js'
import { TaskDataVisitor } from '../parser/TaskDataVisitor.js'

export const getAllTasks = async (req, res) => {
  const {filter =  'today'} = req.query
  const now = new Date()
  let startDate

  switch (filter) {
    case 'today':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      break
    case 'week':
      const mondayDate = now.getDate() - (now.getDay() - 1) - (now.getDay() === 0 ? 7 : 0)
      startDate = new Date(now.getFullYear(), now.getMonth(), mondayDate)
      break
    case 'month':
      startDate = new Date(now.getFullYear(), now.getMonth(), 1)
      break
    case 'all':
      default: {
        startDate = null
      }
  }

  const query = startDate ? { createdAt: { $gte: startDate } } : {}

  try {
    const result = await Task.aggregate([
      {
        $match: query
      },
      {
        $facet: {
          tasks: [{$sort: { createdAt: -1 }}],
          activeCount: [{$match: { status: 'active' }}, { $count: 'count' }],
          completeCount: [{$match: { status: 'completed' }}, { $count: 'count' }],
        }
      }
    ])
    const tasks = result[0].tasks
    const activeCount = result[0].activeCount[0] ?.count || 0
    const completeCount = result[0].completeCount[0]?.count || 0
    res.status(200).json({ tasks, activeCount, completeCount })
  } catch (error) {
    console.error("Error retrieving tasks:", error)
    res.status(500).json({ message: "Error retrieving tasks" })
  } 
}

export const createTask = async (req, res) => {
  try {
    const { title } = req.body
    const task = new Task({ title })

    const newTask = await task.save()
    res.status(201).json({ task: newTask })
  } catch (error) {
    console.error("Error creating task:", error)
    res.status(500).json({ message: "Error creating task" })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { title, status, completedAt } = req.body
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id, 
      { 
        title, 
        status, 
        completedAt 
      }, 
      { new: true }
    )
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" })
    }
    res.status(200).json(updatedTask)
  } catch (error) {
    console.error("Error updating task:", error)
    res.status(500).json({ message: "Error updating task" })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" })
    }
    res.status(200).json(deletedTask)
  } catch (error) {
    console.error("Error deleting task:", error)
    res.status(500).json({ message: "Error deleting task" })
  }
}

export const smartCreateTask = async (req, res) => {
  try {
    const { rawInput } = req.body

    if (!rawInput) {
      return res.status(400).json({ message: "rawInput is required" })
    }

    const chars = new antlr4.InputStream(rawInput)
    const lexer = new SmartTodoLexer(chars) 
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new SmartTodoParser(tokens)
    const tree = parser.startRule()

    const visitor = new TaskDataVisitor()
    const taskData = visitor.visit(tree)

    const task = new Task(taskData)
    const newTask = await task.save()
    res.status(201).json({ task: newTask })
  } catch (error) {
    console.error("Error smart-creating task:", error)
    res.status(500).json({ message: "Error smart-creating task" })
  }
}