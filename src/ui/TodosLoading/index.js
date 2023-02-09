import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-CompleteIcon"></span>
      <p className="LoadingTodo-text">Loading Signings...</p>
      <span className="LoadingTodo-DeleteIcon"></span>
    </div>
  );
}

export { TodosLoading }