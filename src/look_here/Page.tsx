import React from "react";
import {starterTodos, TodoType} from "./index";
import TodoList from "./TodoList";
import SelectedTodo from "./SelectedTodo";

const Page: React.FC = () => {

    const [todos, setTodos] = React.useState<TodoType[]>(starterTodos)

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: '100%',
            height: '100%',
            justifyContent: "space-around"
        }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <SelectedTodo content={todos[0]}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <TodoList todos={todos}/>
            </div>
        </div>
    )
}

export default Page;