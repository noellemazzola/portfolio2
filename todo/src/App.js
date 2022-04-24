import React, {useState} from "react";
import "./App.css";
import Form from "./components/form";
import toDo from "./components/todo list";

function App() {
    const[inputText, setInputText] = useState("");
    const[toDos, settoDos] = useState([]);
    return (
        <div className= "App">
            <header>
                <h1>Noelle's To Do List</h1>
            </header>
            <Form 
                inputText= {inputText}
                toDos= {toDos} 
                settoDos= {settoDos} 
                setInputText= {setInputText} 
                />
            
            <toDo />            
        </div>
    )
}

export default App;