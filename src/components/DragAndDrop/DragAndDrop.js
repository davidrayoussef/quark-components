import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from './Draggable';
import Droppable from './Droppable';
import style from './DragAndDrop.css';

class DragAndDrop extends Component {
  dragged;

  state = {
    originalList: this.props.data,
    targetList: []
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.string)
  };

  dragStart = e => {
    this.dragged = e.target;
  };

  dragEnter = e => {};

  dragOver = e => {
    e.preventDefault();
  };

  drop = e => {
    console.log('in drop', this.dragged);
    console.log(e.target.className);

    e.preventDefault();
    if (e.target.className.includes('dropzone')) {
      this.updateLists(this.dragged.textContent);
    }
  };

  updateLists = droppedItem => {
    this.setState({
      targetList: [...this.state.targetList, droppedItem],
      originalList: this.state.originalList.filter(item => item !== droppedItem)
    });
  };

  render() {
    return (
      <div className={style.dragAndDropContainer}>
        <Draggable originalList={this.state.originalList} dragStart={this.dragStart} />
        <Droppable
          targetList={this.state.targetList}
          dragEnter={this.dragEnter}
          dragOver={this.dragOver}
          drop={this.drop}
        />
      </div>
    );
  }
}

export default DragAndDrop;
