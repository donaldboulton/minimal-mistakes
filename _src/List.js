import React, { Component } from 'react';
import './Rapp.css';

class List extends Component {
  render() {
    const { todos, onTodoClick, onDelete } = this.props;
    return (
      <ul className='list-style list-unstyled'>
        {
          todos.map((item, index) =>
          <li key={index}>
            <div className="outer-div">
              <div className="item-checkbox">
                <input type="checkbox" checked={item.checked}
                  onChange={() => onTodoClick(item)} />
                </div>
                <div className="item-text">
                  <span style={checkboxStyle(item.checked)}>{item.value}</span>
                </div>
                <div className="item-remove-div">
                  <button className="item-remove" 
                    onClick={() => onDelete(index)}>
                    Remove
                  </button>
                </div>
              </div>
              <br />
          </li>
        )}
      </ul>
    )}
  }

function checkboxStyle(checked) {
  return {
      textDecoration: checked? 'line-through' : 'none',
    };
}

export default List;
