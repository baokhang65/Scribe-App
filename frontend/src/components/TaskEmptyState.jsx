import { Circle } from "lucide-react"
import { Card } from "./ui/card"

const TaskEmptyState = ({ filter }) => {
  return (
    <Card className='p-8 text-center border-0 bg-gradient-card shadow-custom-md'>
      <div className='space-y-3'>
        <Circle className='size-12 mx-auto text-muted-foreground'/>
        <div>
          <h3 className='text-foreground font-medium'>
            {
              filter === 'active' ?  
              'No active tasks yet' :
              filter === 'completed' ? 
              'No completed tasks yet' :
              'No tasks available'
            }
          </h3>

          <p className='text-sm text-muted-foreground'>
            {filter === 'all' ? 'Try creating a new task!' : `Try changing the "all" filter to see ${filter === 'active' ? 'completed' : 'actived'} tasks.`}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default TaskEmptyState