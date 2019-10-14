import React, { Component } from 'react';
import { productsData, productDetails } from '../../data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    productDetails,
    cart: [],
    modalOpen: false,
    modalProduct: productDetails,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
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
      return { products };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productDetails: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const cpuItem = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(cpuItem);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const cpuItem = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(cpuItem);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count < 1) {
      return this.removeItem(id);
    } else {
      product.total = product.count * product.price;
    }
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  removeItem = id => {
    const tempCart = [...this.state.cart].filter(item => item.id !== id);
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    let product = tempProducts[index];
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    this.setState(
      () => {
        return { cart: tempCart, products: tempProducts };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total));
    const tempTax = subtotal * 0.08;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subtotal.toFixed(2),
        cartTax: tax,
        cartTotal: total.toFixed(2)
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
