import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css';

// Material UI styling
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

const toDos = [
     {
      task: 'Clean House',
      id: 1528817077286,
      completed: false
      //groceries: groceriesData // groceries: groceries,
    },

    {
      task: 'Laundry',
      id: 1528817078156,
      completed: false
      //groceries: groceriesData // groceries: groceries,
    },

    {
      task: 'Pay bills',
      id: 1528817074825,
      completed: false
      //groceries: groceriesData // groceries: groceries,
    }
];

class App extends React.Component {
  constructor() {
    super();
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    this.state = {
      toDos: toDos
    };
  };

  addToDo = e => {
    e.preventDefault();
    const newToDo = {
      task: this.state.toDo,
      id: Date.now(),
      completed: false
    };
    console.log("More work for you!", newToDo);
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    });
  };

  changeToDo = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleTodo = id => {
    let toDos = this.state.toDos.slice();
    toDos = toDos.map(toDo => {
      if (toDo.id === id) {
        toDo.completed = !toDo.completed;
        return toDo;
      } else {
        return toDo;
      }
    });
    this.setState({ toDos });
  };

  clearCompleted = e => {
    e.preventDefault();
    let toDos = this.state.toDos.filter(toDo => !toDo.completed);
    this.setState({ toDos });
  };

  render() {
    return (
      <Container className="to-do-app" maxWidth='sm'>
        <h1>Welcome to your To do List!</h1>
        <div className="todoList">
          <TodoList
            toggleHandler={this.toggleTodo}
            toDos={this.state.toDos}
          />
        </div>
        <div className="todoForm">
          <TodoForm
            clearHandler={this.clearCompleted}
            toDo={this.state.toDo}
            addHandler={this.addToDo}
            changeHandler={this.changeToDo}
          />
        </div>
      </Container>
    );
  };
}

export default App;