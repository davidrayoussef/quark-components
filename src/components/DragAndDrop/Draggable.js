import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Draggable extends Component {
  static propTypes = {
    originalList: PropTypes.arrayOf(PropTypes.string),
    dragStart: PropTypes.func
  };

  render() {
    return (
      <ul>
        {this.props.originalList.map(item => (
          <li key={item} onDragStart={this.props.dragStart} draggable>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default Draggable;
