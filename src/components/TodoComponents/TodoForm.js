import React from 'react';


const ToDoForm = props => {
  return (
    <form>
      <input className='inputStyle'
        type="text"
        value={props.value}
        name="toDo"
        onChange={props.changeHandler}
        placeholder="add a task..."
      /><br /><br />
      <button onClick={props.addHandler}>Add</button>{" "}{" "}
      <button onClick={props.clearHandler}>Clear Completed</button>
    </form>
  )
};

export default ToDoForm;
