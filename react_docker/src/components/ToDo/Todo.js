import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
// import uuid from 'uuid';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();

    // Initial state...
    this.state = {
      task: '',
      items: []
    };
  }

  componentWillMount() {
    // Setting default tasks...
    this.setState({
      items: [
        {
          id: uuid(),
          task: 'Pay the rent',
          completed: false
        },
        {
          id: uuid(),
          task: 'Go to the gym',
          completed: false
        },
        {
          id: uuid(),
          task: 'Do my homework',
          completed: false
        }
      ]
    });
  }

  handleOnChange = e => {
    const { target: { value } } = e;

    // Updating our task state with the input value...
    this.setState({
      task: value
    });
  };

  handleOnSubmit = e => {
    // Prevent default to avoid the actual form submit...
    e.preventDefault();

    // Once is submitted we reset the task value and 
    // we push the new task to the items array.
    if (this.state.task.trim() !== '') {
      this.setState({
        task: '',
        items: [
          ...this.state.items,
          {
            id: uuid(),
            task: this.state.task,
            complete: false
          }
        ]
      });
    }
  };

  markAsCompleted = id => {
    // Finding the task by id...
    const foundTask = this.state.items.find(
      task => task.id === id
    );

    // Updating the completed status...
    foundTask.completed = true;

    // Updating the state with the new updated task...
    this.setState({
      items: [
        ...this.state.items,
        ...foundTask
      ]
    });
  };

  removeTask = id => {
    // Filtering the tasks by removing the specific task id...
    const filteredTasks = this.state.items.filter(
      task => task.id !== id
    );

    // Updating items state...
    this.setState({
      items: filteredTasks
    });
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>

        <form onSubmit={this.handleOnSubmit}>
          <input
            value={this.state.task}
            onChange={this.handleOnChange}
          />
        </form>

        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;