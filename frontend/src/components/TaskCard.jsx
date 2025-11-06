import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Calendar, CheckCircle2, SquarePen, Trash2 } from 'lucide-react'
import { Circle } from 'lucide-react'
import { Input } from './ui/input'
import api from '@/lib/axios'
import { toast } from 'sonner'
import { useState } from 'react'
import { Tag, AlarmClock, Flag } from 'lucide-react'

const TaskCard = ({ task, index, handleTaskChanged }) => {
  const [isEditing, setIsEditing] = useState(false) 
  const [updatedTaskTitle, setUpdatedTaskTitle] = useState(task.title || '')

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`)
      toast.success('Task deleted successfully.')
      handleTaskChanged()
    } catch (error) {
      console.error('Error deleting task:', error)
      toast.error('Failed to delete task. Please try again later.')
    }
  }

  const updatedTask = async () => {
    try {
      setIsEditing(false)
      await api.put(`/tasks/${task._id}`, { title: updatedTaskTitle })
      toast.success('Task updated successfully.')
      handleTaskChanged()
    } catch (error) {
      console.error('Error updating task:', error)
      toast.error('Failed to update task. Please try again later.')
    }
  }

  const toogleTaskCompleteButton = async () => {
    try {
      if (task.status === 'active') {
        await api.put(`/tasks/${task._id}`, { status: 'completed', completedAt: new Date().toISOString() })
        toast.success('Task marked as completed.')
      } else {
        await api.put(`/tasks/${task._id}`, { status: 'active', completedAt: null })
        toast.success('Task marked as active.')
      }
      handleTaskChanged()
    } catch (error) {
      console.error('Error toggling task completion:', error)
      toast.error('Failed to toggle task completion. Please try again later.')
    }
  }

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
    updatedTask()
    }
  }

  return (
    <Card className={cn(
      'p-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group',
      task.status === 'completed' && 'opacity-75'
    )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className='flex items-center gap-4'>
        <Button
          variant='ghost'
          size='icon'
          className={cn(
            'flex-shrink-0 size-8 rounded-full transition-all duration-200',
            task.status === 'completed' ? 'text-success hover:text-success/80' : 'text-muted-foreground hover:text-primary'
          )}
          onClick={toogleTaskCompleteButton}
        >
          {task.status === 'completed' ? (
            <CheckCircle2 className='size-5'/>
          ) : (
            <Circle className='size-5'/>
          )}
        </Button>

        <div className='flex-1 min-w-0'>
          {isEditing ? (
            <Input
              placeholder='Edit task...'
              className='flex-1 h-12 text-base border-border/50 focus:border-primary/50 focus:ring-primary/20'
              type='text'
              value={updatedTaskTitle}
              onChange={(e) => setUpdatedTaskTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={() => {
                setIsEditing(false)
                setUpdatedTaskTitle(task.title || '')
              }}
            />
          ) : (
            <p className={cn(
              'text-base transition-all duration-200',
              task.status === 'completed' ? 'line-through text-muted-foreground' : 'text-foreground'
            )}>
              {task.title}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
            
            {task.tags && task.tags.length > 0 && (
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                <Tag className="size-3" />
                <span className="text-xs font-medium">{task.tags[0]}</span>
              </div>
            )}

            {task.priority && (
               <div className={cn(
                  "flex items-center gap-1",
                  task.priority === 1 && "text-red-600",
                  task.priority === 2 && "text-yellow-600",
                  task.priority === 3 && "text-gray-500"
               )}>
                <Flag className="size-3" />
                <span className="text-xs font-medium">
                  {task.priority === 1 ? 'High' : task.priority === 2 ? 'Medium' : 'Low'}
                </span>
              </div>
            )}

            {task.dueDate && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <AlarmClock className="size-3" />
                <span className="text-xs">
                  {new Date(task.dueDate).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {new Date(task.createdAt).toLocaleString()}
            </span>
            {task.completedAt && (
              <>
                <span className="text-xs text-muted-foreground"> - </span>
                <Calendar className="size-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(task.completedAt).toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        <div className='hidden gap-2 group-hover:inline-flex animate-slide-up'>
          <Button
            variant='ghost'
            size='icon'
            className='flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-info'
            onClick={() => {
              setIsEditing(true) 
              setUpdatedTaskTitle(task.title || '')
            }}
          >
            <SquarePen className='size-4'/>
          </Button>

          <Button
            variant='ghost'
            size='icon'
            className='flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-destructive'
            onClick={() => deleteTask(task._id)}
          >
            <Trash2/>
          </Button>
        </div>
      </div>
    </Card>
  )
}
export default TaskCard