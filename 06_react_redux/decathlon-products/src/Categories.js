import React, { Component } from 'react';
import logo from './logo.svg';
import { nav, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Categories extends Component {

  componentDidMount() {
    console.log("je suis dans componentDidMount");

    fetch("http://localhost:4000/")
      .then(result => result.json())
      .then(categories => this.props.updateCategories(categories));
  }

  render() {
    return (
      <div className="App">
        <p> List of categories </p>
        {this.props.loading
          ? <p>Loading...</p>
          : <ul>
              {this.props.categories.map((category, index) => 
                <li key={index}> {category.label}</li>
              )}
            </ul>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories:state.categories,
    loading: state.loadingCategories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCategories: (categories) => dispatch({
      type: "UPDATE_CATEGORIES",
      categories: categories,
      loadingCategories:false
    })
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Categories));
