import { useEffect, useState } from "react"
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css"
export const Todo = () => {


    const [inputValue, setinputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime,setDateTime]=useState("")

    const handleInputChange = (value) => {
        setinputValue(value);
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return; //if Input value is empty then don't store the data;

        if (task.includes(inputValue)) {
            setinputValue(""); // Clear input field even if the task already exists
            return; // Exit the function
        }

        setTask((prevTask) => [...prevTask, inputValue]);  //setTasK is a react function which is used to update the value


        setinputValue("");
    };


    //todo Date and Time
    useEffect(()=>{
        const interval=setInterval(()=>{

            const now=new Date();
            const formattedDate=now.toLocaleDateString();
            const formattedTime=now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
           },1000);
           
           return ()=>clearInterval(interval);
        
    }, []);
   
    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <h2 className="date-time">{dateTime}</h2>
        </header>
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn"> Add Task</button>
                </div>
            </form>
        </section>
        <section className="myUnOrderList">
            <ul>
                {task.map((curTask, index) => {
                    return (
                        <li key={index} className="todo-item">
                            <span>{curTask}</span>
                            <button className="check-btn">
                                <IoMdCheckmark />
                            </button>
                            <button className="delete-btn">
                                <MdDeleteForever />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>

    </section>

}