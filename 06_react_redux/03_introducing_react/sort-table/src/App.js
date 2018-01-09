import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "underscore";

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]

function Row(props) {
  return (
    <tr>
      <td> {props.product.decathlon_id} </td>
      <td> {props.product.title} </td>
      <td> {props.product.price} </td>
    </tr>
  );
}

class Table extends Component {
  constructor (props) {
    super(props);
    this.state = {products:products};
  }

  sortById () {
    this.setState(
      {products: _.sortBy(this.state.products, 'decathlon_id')}
    )
  }

  sortByTitle () {
    this.setState(
      {products: _.sortBy(this.state.products, 'title')}
    )
  }

  sortByPrice () {
    this.setState(
      {products: _.sortBy(this.state.products, 'price')}
    )
  }

  render() {
    return (
      <table>
        <tr>
          <th>
            Decathlon ID
            <button type="button" onClick={()=>this.sortById()}>Sort!</button>
          </th>
          <th> Title
            <button type="button" onClick={()=>this.sortByTitle()}>Sort!</button>
          </th>
          <th>
            Price
            <button type="button" onClick={()=>this.sortByPrice()}>Sort!</button>
          </th>
        </tr>
        {this.state.products.map( item => {
          return <Row product={item}/>;
        })}
      </table>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Table/>
    );
  }
}

export default App;
