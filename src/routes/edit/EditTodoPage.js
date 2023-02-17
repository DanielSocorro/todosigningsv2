import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
    const params = useParams();
    const id = Number(params.id);

    const { state, stateUpdaters } = useTodos();
    const { loading, getTodo } = state;
    const { editTodo } = stateUpdaters;

    if (loading) {
        return <p>Loading...</p>
    } else {
      const todo = getTodo(id);
      return (
            <TodoForm
            label="Edit your signing"
            defaultTodoText={todo.text}
            submitText="Edit signing"
            submitEvent={(newText) => editTodo(id, newText)}
            />
        );
    }   
}

export { EditTodoPage };