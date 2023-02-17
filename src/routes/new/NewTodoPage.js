import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import './NewTodoPage.css';

function NewTodoPage() {
    const { stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;
    return (
        <div className="newpage">
        <TodoForm
        label="Add your new signing"
        submitText="Add signing"
        submitEvent={(text) => addTodo(text)}
        />
        </div>
    );
}

export { NewTodoPage };