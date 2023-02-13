import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {
    return (
        <TodoForm
        label="Edit your signing"
        submitText="Edit"
        submitEvent={() => console.log('call to editTodo')}
        />

    );
}

export { EditTodoPage };