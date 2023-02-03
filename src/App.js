import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTaskForm from "./components/AddTaskForm";
import Todo from "./components/Todo";
import {useState} from "react";


function App() {
    const [toDo, setToDo] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if(newTask){
            let index = toDo.length + 1;
            let newEntry = {id: index, title: newTask, status:false}
            setToDo([...toDo, newEntry]);
            setNewTask('');
        }
    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id);
        setToDo(newTasks);
    }

    const markDone = (id) => {
        let newTask = toDo.map(task => {
            if(task.id === id){
                return ({...task, status: !task.status});
            }
            return task;
        })
        setToDo(newTask);
    }

  return (
    <div className="container App">
        <h2>To Do List</h2>
      <AddTaskForm
      newTask={newTask}
      setNewTask={setNewTask}
      addTask={addTask}
      />
        {toDo && toDo.length ? '' : 'No Tasks...'}
        <Todo
        toDo={toDo}
        markDone={markDone}
        deleteTask={deleteTask}
        />
    </div>
  );
}

export default App;
