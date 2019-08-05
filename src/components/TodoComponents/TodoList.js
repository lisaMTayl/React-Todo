import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
  return (
    <div>
      {props.toDos.map(toDo => (
        <ToDo
          toggleHandler={props.toggleHandler}
          toDo={toDo}
          key={toDo.id}
        />
      ))}
    </div>
  );
};

export default ToDoList;