import React, { Component } from 'react';


//react reconnait que c'est une déclaration de composant réact et
//pas une fonction normale javascript parce que le return commence par un chevron.
function Row(props) {
  return (
    <tr>
      <td> {props.product.decathlon_id} </td>
      <td> {props.product.title} </td>
      <td> {props.product.price} </td>
    </tr>
  );
}

export default Row;
