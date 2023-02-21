import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import "./EditTodoPage.css";

function EditTodoPage() {
    const location = useLocation();
    const params = useParams();
    const id = Number(params.id);

    const { state, stateUpdaters } = useTodos();
    const { loading, getTodo } = state;
    const { editTodo } = stateUpdaters;

    let todoText;
    if (location.state?.todo) {
        todoText = location.state.todo.text; 
    } else if (loading) {
      return <p>Loading...</p>
    } else {
      const todo = getTodo(id);
      todoText = todo.text;
    }   



    return (
      <div className='EditBackground'>
          <TodoForm
          label="Edit your signing"
          defaultTodoText={todoText}
          submitText="Edit signing"
          submitEvent={(newText) => editTodo(id, newText)}
          />
          </div>
      );
}

export { EditTodoPage };