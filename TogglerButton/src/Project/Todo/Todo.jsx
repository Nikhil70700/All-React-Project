import { useState } from "react";
import "./Todo.css"
import { TodoList } from "./TOdoList";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
export const Todo = () => {



    const [task, setTask] = useState([]);




    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        //TO check if the input value is empty or not 
        if (!content) return;
        //To check if data is already exist or not 
        // if (task.includes(inputValue))
        //     return; // Exit the function

        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);

        if (ifTodoContentMatched) return;

        //!Note: In ES2015 (also kown as ES6) ,If the key and value are the same in a JavScript object,you can use shorthand property names to wriyte them only once(Instead of explicitly writing both the key and the value, you can just write the key, and JavaScript will automatically assign the value with the same name as the key.)


        setTask((prevTask) => [...prevTask, { id, content, checked }]);  //setTasK is a react function which is used to update the value


    };




    //Todo handleDeleteTodo function.....

    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };

    //Todo handleClearTodoData functionality...........

    const handleClearTodoData = () => {
        setTask([]);
    };


    //todo handleCheckTodo functionality............

    const handleCheckedTodo=(task)=>{
    const updatedTask=task.map((curTask)=>{
       if(curTask.content===task){
        return{...curTask,checked:!curTask.checked};
       }else{
        return curTask;
       }
    });
    setTask(updatedTask);
    }

    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>

            <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnOrderList">
            <ul>
                {task.map((curTask) => {
                    return (
                        <TodoList 
    key={curTask.id} 
    data={curTask.content} 
    onHandleDeleteTodo={handleDeleteTodo} 
    checked={curTask.checked}
    onHandleCheckedTodo={handleCheckedTodo} // 
/>
                    );

                })}
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
        </section>

    </section>

}