import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active"
    },
    completedAt: { 
      type: Date,
      default: null
    },
    priority: {
      type: Number,
      enum: [1, 2, 3],
      default: 3
    },
    tags : [
      { type: String, trim: true }
    ],
    dueDate: {
      type: Date,
      default: null
    }
  },
  { 
    timestamps: true
  }
)

const Task = mongoose.model("Task", taskSchema)

export default Task