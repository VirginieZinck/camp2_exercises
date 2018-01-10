import React, { Component } from 'react';
import _ from "underscore";
import Row from './Row';

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


class Table extends Component {
  constructor (props) {
    super(props);
    this.state = {
      products:products,
      reverseSort: false
    };

    this.sortByPrice = this.sortByPrice.bind(this);
  }

  //1ère solution, le bind est fait dans le onClick avec une fat arrow
  sortById () {
    if (this.state.reverseSort) {
      this.setState(
        {
          products: _.sortBy(this.state.products, 'decathlon_id').reverse(),
          reverseSort: false
        }
      )
    } else {
      this.setState(
        {
          products: _.sortBy(this.state.products, 'decathlon_id'),
          reverseSort: true
        }
      )

    }
  }

  //2e solution, on met la fat arrow dans la déclaration de la fonction
  sortByTitle = () => {
    this.setState(
      {products: _.sortBy(this.state.products, 'title')}
    )
  }

  //3e solution, on fait un bind dans le constructor
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
            <button type="button" onClick={this.sortByTitle}>Sort!</button>
          </th>
          <th>
            Price
            <button type="button" onClick={this.sortByPrice}>Sort!</button>
          </th>
        </tr>
        {this.state.products.map( item => {
          return <Row product={item}/>;
        })}
      </table>
    )
  }
}


export default Table;
