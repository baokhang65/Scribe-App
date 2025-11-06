import { Plus, Info } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { useState } from 'react'
import { toast } from 'sonner'
import api from '@/lib/axios'

const AddTask = ({handleNewTaskAdded}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const addTask = async () => {
    if (newTaskTitle.trim()) {
      try {
        await api.post('/tasks/smart', { rawInput: newTaskTitle })
        toast.success(`${newTaskTitle} added successfully!`)
        handleNewTaskAdded()
      } catch (error) {
        console.error('Error adding task:', error)
        toast.error('Failed to add task. Please try again.')
      }

      setNewTaskTitle('')
    } else {
      toast.error('Task title cannot be empty.')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <Card className='p-6 border-0 bg-gradient-card shadow-custom-lg'>
      <div className='flex flex-col gap-3 sm:flex-row'>
        <div className="flex-1 space-y-1.5">
          <Input 
            type='text'
            placeholder='Add a new task...'
            className='h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-0 focus:ring-primary/20'
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <p className="text-xs text-muted-foreground flex items-center gap-1 pl-1">
            <Info size={12} /> Use #tag, !priority (1-3), due:date (e.g., today, tomorrow, YYYY-MM-DD).
          </p>
        </div> 

        <Button
          variant='gradient'
          size='xl'
          className='px-6'
          onClick={addTask}
          disabled={!newTaskTitle.trim()}
        >
          <Plus className='size-5' />
          Add Task
        </Button>
      </div>
    </Card>
  )
}

export default AddTask