import React from "react";
import {TodoType} from "./index";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<{ todos: TodoType[] }> = ({todos}) => {

    return (
        <div>
            <h2>{'Todo List'}</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
                {todos.map((it) => <TodoListItem content={it}/>)}
            </div>
        </div>
    )
}

export default TodoList