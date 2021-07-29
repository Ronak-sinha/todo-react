import React from 'react'
import { Todolist } from "./Todolist";

export const Todos = (props) => {
    let todosstyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3" style={todosstyle}>
            <h3 className="text-center my-3">Todo List</h3>
            {props.todos.length === 0 ? "no todos to display" :
                props.todos.map((todo) => {
                    return (<Todolist todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                })
            }
        </div>
    )
}
