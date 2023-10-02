import { useState } from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    let prepTask = {
      id: Date.now(),
      task: newTask,
      completed: false
    }
    setTodoList([...todoList, prepTask])
    setNewTask('')
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          if (task.completed === false) {
            return { ...task, completed: true }
          } else {
            return { ...task, completed: false }
          }
        } else {
          return task
        }
      })
    )
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((todo) => {
          return <div className='todo' key={todo.id}>
            <h2 className={todo.completed ? 'completed' : ''}>{todo.task}</h2>
            <div>
              <button onClick={() => completeTask(todo.id)}>Complete task</button>
              <button onClick={() => deleteTask(todo.id)}>X</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
