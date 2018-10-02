import React, { Component } from 'react';
import '../css/Rapp.css';

class List extends Component {

  state={
    check: false,
    strike: 'none'
  }

  onCheck(item){
    this.setState({check: !this.state.check})
    if (this.state.strike === 'none'){
      this.setState({strike: 'line-through'})
    } else {
      this.setState({strike: 'none'})
    }
  }

  render() {
    const strike = {
      textDecoration: this.state.strike,
    }

  return (
    <ul className='list-style'>
      { this.props.items.map((item, index) =>
         <li key={index}>
           <div className="outer-div">
             <div className="item-checkbox">
               <input type="checkbox" checked={this.state.check}
                 onChange={() => this.onCheck(item)} />
              </div>
              <div className="item-text">
                 <span style= {strike}> {item} </span>
              </div>
              <div className="item-remove-div">
                <button className="item-remove" onClick={() => this.props.onDeleteList(index)}>
                </button>
              </div>
            </div>
             <br />
         </li>
       )}
    </ul>
  )}
}

export default List;
