import { Badge } from './ui/badge'
import { FilterType } from '@/lib/data'
import { Button } from './ui/button'
import { Filter, Tag, Flag } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const StatsAndFilters = ({ completedTasksCount = 0, activeTasksCount = 0, filter = 'all', setFilter, uniqueTags, selectedTag, setSelectedTag, priorityOptions, selectedPriority, setSelectedPriority }) => {
return (
    <div className='flex flex-col gap-4'>
      
      <div className='flex gap-3'> 
        <Badge
          variant='secondary'
          className='bg-white/50 text-accent-foreground border-info/20'
        >
          {activeTasksCount} {FilterType.active}
        </Badge>
        <Badge
          variant='secondary'
          className='bg-white/50 text-success border-success/20'
        >
          {completedTasksCount} {FilterType.completed} 
        </Badge>
      </div>

      <div className='flex flex-col gap-2 sm:flex-row sm:flex-wrap'>
        {Object.values(FilterType).map((type) => ( 
          <Button
            key={type}
            variant={filter === type ? 'gradient' : 'ghost'} 
            size='sm' 
            className='capitalize' 
            onClick={() => setFilter(type)} 
          >
            <Filter className='size-4'/> 
            {FilterType[type]} 
          </Button>
        ))}

        <Select
          value={selectedTag || ''}
          onValueChange={(value) => setSelectedTag(value === 'all' ? null : value)}
          disabled={!uniqueTags || uniqueTags.length === 0}
        >
          <SelectTrigger className="w-full sm:w-[140px] h-9 text-sm">
            <div className="flex items-center gap-2">
              <Tag className='size-4'/>
              <SelectValue placeholder="All Tags" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {uniqueTags && uniqueTags.map(tag => (
              <SelectItem key={tag} value={tag}>#{tag}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={selectedPriority ? String(selectedPriority) : ''}
          onValueChange={(value) => setSelectedPriority(value === 'all' ? null : parseInt(value))}
        >
          <SelectTrigger className="w-full sm:w-[160px] h-9 text-sm">
             <div className="flex items-center gap-2">
                <Flag className='size-4'/>
                <SelectValue placeholder="All Priorities" />
             </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            {priorityOptions && priorityOptions.map(option => (
              <SelectItem key={option.value} value={String(option.value)}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}

export default StatsAndFilters