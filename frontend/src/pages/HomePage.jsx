import AddTask from "@/components/AddTask"
import DateTimeFilter from "@/components/DateTimeFilter"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import StatsAndFilters from "@/components/StatsAndFilters"
import TaskList from "@/components/TaskList"
import TaskListPagination from "@/components/TaskListPagination"
import { useEffect, useState, useMemo } from "react"
import { toast } from "sonner"
import api from "@/lib/axios"
import { visibleTaskLimit } from "@/lib/data"

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([])
  const [activeTaskCount, setActiveTaskCount] = useState(0)
  const [completeTaskCount, setCompleteTaskCount] = useState(0)
  const [filter, setFilter] = useState("all")
  const [dateQuery, setDateQuery] = useState("all")
  const [page, setPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState(null)
  const [selectedPriority, setSelectedPriority] = useState(null)

  useEffect(() => {
    fetchTasks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateQuery])

  useEffect(() => {
    setPage(1)
  }, [filter, dateQuery, selectedTag, selectedPriority])

  const fetchTasks = async () => {
    try {
      const res = await api.get(`/tasks?filter=${dateQuery}`)
      setTaskBuffer(res.data.tasks)
      setActiveTaskCount(res.data.activeCount)
      setCompleteTaskCount(res.data.completeCount)
    } catch (error) {
      console.error("Error fetching tasks:", error)
      toast.error("Error fetching tasks.")
    }
  }

  const handleTaskChanged = () => {
    fetchTasks()
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  const uniqueTags = useMemo(() =>
    Array.from(new Set(taskBuffer.flatMap(task => task.tags || []))).sort(),
    [taskBuffer]
  )

  const priorityOptions = useMemo(() => [
    { value: 1, label: 'High' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'Low' },
  ], [])

  const filteredTasks = useMemo(() => taskBuffer.filter((task) => {
    let statusMatch = false
    switch (filter) {
      case "active":
        statusMatch = task.status === "active"
        break
      case "completed":
        statusMatch = task.status === "complete"
        break
      default: 
        statusMatch = true
        break
    }

    const tagMatch = !selectedTag || (task.tags && task.tags.includes(selectedTag))
    const priorityMatch = !selectedPriority || task.priority === selectedPriority

    return statusMatch && tagMatch && priorityMatch
  }), [taskBuffer, filter, selectedTag, selectedPriority])

  const totalPages = Math.ceil(filteredTasks.length / visibleTaskLimit)

  const visibleTasks = filteredTasks.slice(
    (page - 1) * visibleTaskLimit,
    page * visibleTaskLimit
  )

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages)
    } else if (totalPages === 0 && filteredTasks.length === 0 && page !== 1) {
      setPage(1)
    }
  }, [page, totalPages, filteredTasks.length])

  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      <div className="container relative z-10 pt-8 mx-auto">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          <Header />

          <AddTask handleNewTaskAdded={handleTaskChanged} />

          <StatsAndFilters
            filter={filter} 
            setFilter={setFilter} 
            activeTasksCount={activeTaskCount} 
            completedTasksCount={completeTaskCount} 
            uniqueTags={uniqueTags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            priorityOptions={priorityOptions}
            selectedPriority={selectedPriority}
            setSelectedPriority={setSelectedPriority}
          />

          <TaskList
            filteredTasks={visibleTasks}
            filter={filter}
            handleTaskChanged={handleTaskChanged}
          />

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination
              handleNext={handleNext}
              handlePrev={handlePrev}
              handlePageChange={handlePageChange}
              page={page}
              totalPages={totalPages}
            />
            <DateTimeFilter
              dateQuery={dateQuery}
              setDateQuery={setDateQuery}
            />
          </div>

          <Footer
            activeTasksCount={activeTaskCount}
            completedTasksCount={completeTaskCount}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage