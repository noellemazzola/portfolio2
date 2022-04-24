import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import toDoList from "./components/todo list";

function App() {
    

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    
    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
    }, [todos, status])

    const filterHandler = () => {
        switch(status) {
            case `completed`:
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case `uncompleted`:
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break; 
            default:
                setFilteredTodos(todos);
                break;  
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
           let todoLocal = JSON.parse(localStorage.getItem("todos"));
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Noelle's To Do List</h1>
            </header>
            <Form 
            inputText= {inputText}
            todos= {todos} 
            setTodos= {setTodos}
            setInputText= {setInputText}
            setStatus= {setStatus}
            />
            <toDoList 
                setTodos= {setTodos}
                todos= {todos}
                filteredTodos= {filteredTodos}
            />
        </div>
    ) 
}

export default App;