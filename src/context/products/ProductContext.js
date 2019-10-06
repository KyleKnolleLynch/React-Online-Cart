import React, { Component } from 'react';
import { productsData, productDetails } from '../../data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    productDetails
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    productsData.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
    return { products }});
  };

  handleDetail = () => {
    console.log('hello from handle details');
  };

  addToCart = (id) => {
    console.log(`Item id is: ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
