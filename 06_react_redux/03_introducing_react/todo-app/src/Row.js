import React, { Component } from 'react';
import Label from './Label';
import DeleteButton from './DeleteButton';
import Checkbox from './Checkbox';

function Row(props) {

    return (
      <div className="row pt-1">
        <div className="col">
          <Checkbox
            item={props.item}
            index={props.index}
            checked={props.checked}
            onCheck={()=>props.onCheck(props.item, props.index)}
          />
        </div>

        <div className="col">
          <Label checked={props.checked} item={props.item}/>
        </div>

        <div className="col">
          <DeleteButton onClick={()=>props.onDelete(props.index)}/>
        </div>
      </div>
    );
}

export default Row;
