import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <label for="add-todo">Add A New Todo</label>
        <input id="add-todo" ref={node => input = node} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);