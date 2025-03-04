import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState(""); // Initial state ensures input is always controlled

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return; // Prevent empty tasks
        const newTask = {
            id: Date.now(),
            content: inputValue.trim(),
            checked: false,
        };
        onAddTodo(newTask);
        setInputValue(""); // Clear the input field after submitting
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter a task"
                        className="todo-input"
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
};
