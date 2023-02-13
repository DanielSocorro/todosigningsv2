import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
    return (
        <TodoForm
        label="Add your new signing"
        submitText="Add"
        submitEvent={() => console.log('call to addTodo')}
        />

    );
}

export { NewTodoPage };