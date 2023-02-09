import React from "react";
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}>
               <label>New Signings</label>
               <textarea 
               value={newTodoValue}
               onChange={onChange}
               placeholder="Add a new player for signing"
               
               />
                   <div className="TodoForm-buttonContainer">
                   <button
                   className="TodoForm-button-cancel"
                   type="button"
                   onClick={onCancel}
                   >
                    Cancel
                   </button>
                   <button 
                   className="TodoForm-button-add"
                   type="submit"
                   >
                      Add signing
                   </button>
                   </div>
        </form>

    );
}

export { TodoForm };