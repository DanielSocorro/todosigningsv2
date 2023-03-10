import React from "react";
import { useNavigate } from "react-router";
import './TodoForm.css';

function TodoForm(props) {
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] 
    = React.useState(props.defaultTodoText ||'');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
       navigate('/');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
    };
    return (
        <form onSubmit={onSubmit}>
               <label>{props.label}</label>
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
                      {props.submitText}
                   </button>
                   </div>
        </form>

    );
}

export { TodoForm };