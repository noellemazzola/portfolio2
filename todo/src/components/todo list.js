import React from "react";
import twoDo from ".components/todo.js";

function toDoList({todos, setTodos, filteredTodos}) {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <twoDo 
                    setTodos= {setTodos}
                    todos= {todos}
                    key= {todo.id}
                    todo= {todo}
                    text= {todo.text}
                    />
                ))}
            </ul>
        </div>
    )
}


export default toDoList;