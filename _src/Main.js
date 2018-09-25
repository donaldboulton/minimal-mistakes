import React, { Component } from 'react';
import TodoList from './List';
import './Rapp.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      term: ''
    };
  }

  handleChange = event => {
    this.setState({ term: event.target.value });
  }

  handleItemClick = ({ value, checked }) => {
    this.setState({
      items: this.state.items.map(item => item.value === value ? { value, checked: !checked } : item)
    });
  }

  onSubmit = event => {
    event.preventDefault();

    if (this.state.term.length > 0) {
      this.setState({
        term: '',
        items: [...this.state.items, { value: this.state.term, checked: false }]
      });
    }
  }

  handleDelete = index => {
    console.info('todo: remove todo at index', index);
    // deletion logic... keep in mind that using index as key properties on jsx could breaks the correct functioning of this component.
  }

  render() {
    return (
      <div className="Appcenter">
       <h3 className="Appheader" > TODO-LIST </h3>
       <div className='mainCenter'>
       <form className="App" onSubmit={this.onSubmit}>
          <input placeholder="add task" value={this.state.term} onChange={this.handleChange}
          className="inputField"/>
          <button>Add to the List</button>
        </form>
        <TodoList 
          onTodoClick={this.handleItemClick}
          onDelete={this.handleDelete}
          todos={this.state.items}
        />
        <div className="footer-outer">
          <span className="footer">
            Number of completed items in an array:
            {this.state.items.filter(item => item.checked).length}
          </span>
        </div>
      </div>
    </div>
    );
  }
}

export default Main
