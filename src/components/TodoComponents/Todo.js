import React from 'react';

const ToDo = props => {
  return (
    <div className='displayTasks'
      //Pending tasks = red text; completed = black text, italic with line-through
      style={props.toDo.completed ? { textDecoration: 'line-through', fontStyle: 'italic', color: 'black' } : null}
      onClick={() => props.toggleHandler(props.toDo.id)}
    >
      {props.toDo.task}
    </div>
  );
};

export default ToDo;