import React,{useState} from 'react'

function Todo(){
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
  
    const addTodo = () => {
      if (task.trim() === '') return;
      setTodos([...todos, task]);
      setTask('');
    };
  
    const removeTodo = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };
  
    return (
      <div classNameName="container mx-auto max-w-md mt-10 shadow-lg p-8">
        <h1 classNameName="text-3xl font-semibold mb-4">Todo List</h1>
        <div classNameName="flex mb-4">
          <input
            type="text"
            classNameName="border p-2 w-full rounded-l"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            classNameName="bg-blue-500 text-white p-2 rounded-r"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              classNameName="flex items-center justify-between p-2 border-b"
            >
              {todo}
              <button
                classNameName="text-red-500"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Todo