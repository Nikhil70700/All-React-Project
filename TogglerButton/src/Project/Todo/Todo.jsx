import { useState } from "react";
import "./Todo.css"
import { TodoList } from "./TOdoList";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
export const Todo = () => {



    const [task, setTask] = useState([]);




    const handleFormSubmit = (inputValue) => {


        if (!inputValue) return; //if Input value is empty then don't store the data;

        if (task.includes(inputValue))// Clear input field even if the task already exists
            return; // Exit the function


        setTask((prevTask) => [...prevTask, inputValue]);  //setTasK is a react function which is used to update the value


    };




    //Todo handleDeleteTodo function.....

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    //Todo handleClearTodoData functionality...........

    const handleClearTodoData = () => {
        setTask([]);
    }

    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>

            <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnOrderList">
            <ul>
                {task.map((curTask, index) => {
                    return <TodoList key={index} data={curTask} onHandleDeleteTodo={handleDeleteTodo} />


                })}
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
        </section>

    </section>

}