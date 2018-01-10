import React, { Component } from 'react';
import Label from './Label';

function Row(props) {
  return (
    <div className="row">
      <div className="col">
        <input
          type="checkbox"
          checked={props.checked(props.item)}
          name="{item.status}"
          onClick={()=>props.onClick(props.item, props.index)}
        />
      </div>

      <Label
        checked={props.checked}
        item = {props.item}
      />

      <div className="col">
        <button
          type="submit"
          onClick={()=>props.onDelete(props.index)}
          className="btn btn-primary"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Row;
