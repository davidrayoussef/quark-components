import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './DragAndDrop.css';

class Droppable extends Component {
  static propTypes = {
    targetList: PropTypes.arrayOf(PropTypes.string),
    dragEnter: PropTypes.func,
    dragOver: PropTypes.func,
    drop: PropTypes.func
  };

  render() {
    return (
      <ul
        className={style.dropzone}
        onDragEnter={this.props.dragEnter}
        onDrop={this.props.drop}
        onDragOver={this.props.dragOver}
      >
        {this.props.targetList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default Droppable;
