const Footer = ({completedTasksCount = 0, activeTasksCount = 0}) => {
  return <>
    {completedTasksCount + activeTasksCount > 0 && (
      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          {
            completedTasksCount > 0 && (
              <>
                  Awsome 🎉 You have completed {completedTasksCount} task {activeTasksCount > 0 && `, and have ${activeTasksCount} active tasks left`}!
              </>
            )
          }

          {completedTasksCount === 0 && activeTasksCount > 0 && (
            <>
              Let 's get started! You have {activeTasksCount} active tasks to complete.
            </>
          )}
        </p>
      </div>
    )}
  </>
}

export default Footer