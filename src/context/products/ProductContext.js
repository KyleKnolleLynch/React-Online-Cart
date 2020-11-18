//    FUNCTIONAL COMPONENT USING SETSTATE AND USEEFFECT

import React, { useState, useContext, useEffect } from 'react'
import { productsData } from '../../data'

const ProductContext = React.createContext()

const ProductProvider = ({ children }) => {
  //  set initial state
  const [state, setState] = useState({
    loading: false,
    products: [],
    productDetails: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  })

  //  destructure cart state for use as a dependancy in the addTotals useEffect.  
  const { cart } = state

  //  fetch product data array to display on homepage, in this case from local file, but could be fetching from database or backend api.
  //  if no data is retrieved, display loading spinner by setting loading state value to true.
  const setProducts = () => {
    let tempProducts = []
    productsData.forEach((item) => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    if (!tempProducts) {
      setState({ ...state, loading: true })
    } else {
      setState({ ...state, products: tempProducts, loading: false })
      return tempProducts
    }
  }

  //  grab selected item from product data array via id
  const getItem = (id) => {
    return state.products.find((item) => item.id === id)
  }

  //  set selected product from product data array to display details on details page
  const handleDetail = (id) => {
    const product = getItem(id)
    setState({ ...state, productDetails: product })
  }

  //  add selected product to cart
  const addToCart = (id) => {
    const product = getItem(id)
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    setState({
      ...state,
      cart: [...state.cart, product],
      modalProduct: product,
      modalOpen: !state.modalOpen,
    })
  }

  //  toggle modal open/closed
  const toggleModal = () => {
    setState({ ...state, modalOpen: !state.modalOpen })
  }

  //  increment selected product quanity in cart
  const increment = (id) => {
    let tempCart = [...cart]
    const index = tempCart.indexOf(getItem(id))
    let product = tempCart[index]
    product.count = product.count + 1
    product.total = product.count * product.price
    setState({ ...state, cart: tempCart })
  }

  //  decrement selected product quanity in cart
  const decrement = (id) => {
    let tempCart = [...cart]
    const index = tempCart.indexOf(getItem(id))
    let product = tempCart[index]
    product.count = product.count - 1
    if (product.count < 1) {
      return removeItem(id)
    } else {
      product.total = product.count * product.price
    }

    setState({ ...state, cart: tempCart })
  }

  //  remove selected product from cart
  const removeItem = (id) => {
    let tempCart = [...cart].filter((item) => item.id !== id)
    let tempProducts = [...state.products]
    const index = tempProducts.indexOf(getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    setState({
      ...state,
      cart: tempCart,
      products: tempProducts,
      modalProduct: {},
    })
  }

  //  completely remove all products from cart
  const clearCart = () => {
    setState({ ...state, cart: [], products: setProducts() })
  }

  //  update and keep track of products subtotal, tax, and total values in cart
  const addTotals = () => {
    const showTwoDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    const subtotal = showTwoDecimals(
      Number(cart.reduce((acc, cur) => acc + cur.total, 0))
    )
    const tax = showTwoDecimals(Number(subtotal * 0.08))
    const total = showTwoDecimals(Number(subtotal) + Number(tax))

    setState({
      ...state,
      cartSubtotal: subtotal,
      cartTax: tax,
      cartTotal: total,
    })
  }

  //  update cart subtotal, tax, and total values if any product quantity changes are made in cart
  useEffect(() => {
    addTotals()
    // eslint-disable-next-line
  }, [cart])

  //  display product data array on homepage
  useEffect(() => {
    setProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getItem,
        handleDetail,
        addToCart,
        toggleModal,
        clearCart,
        increment,
        decrement,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(ProductContext)
}

export { ProductContext, ProductProvider }

///////////////////////////////////////////////////////////////

//    CLASS BASED COMPONENT USING CONSUMER

// import React, { Component } from 'react';
// import { productsData, productDetails } from '../../data';

// const ProductContext = React.createContext();

// class ProductProvider extends Component {
//   state = {
//     products: [],
//     productDetails,
//     cart: [],
//     modalOpen: false,
//     modalProduct: productDetails,
//     cartSubtotal: 0,
//     cartTax: 0,
//     cartTotal: 0
//   };

//   componentDidMount() {
//     this.setProducts();
//   }

//   setProducts = () => {
//     let products = [];
//     productsData.forEach(item => {
//       const singleItem = { ...item };
//       products = [...products, singleItem];
//     });
//     this.setState(() => {
//       return { products };
//     });
//   };

//   getItem = id => {
//     return this.state.products.find(item => item.id === id);
//   };

//   handleDetail = id => {
//     const product = this.getItem(id);
//     this.setState(() => {
//       return { productDetails: product };
//     });
//   };

//   addToCart = id => {
//     let tempProducts = [...this.state.products];
//     const index = tempProducts.indexOf(this.getItem(id));
//     let product = tempProducts[index];
//     product.inCart = true;
//     product.count = 1;
//     const price = product.price;
//     product.total = price;

//     this.setState(
//       () => {
//         return { products: tempProducts, cart: [...this.state.cart, product] };
//       },
//       () => {
//         this.addTotals();
//       }
//     );
//   };

//   toggleModal = id => {
//     const product = this.getItem(id);
//     this.setState(() => {
//       return { modalProduct: product, modalOpen: !this.state.modalOpen };
//     });
//   };

//   increment = id => {
//     let tempCart = [...this.state.cart];
//     const index = tempCart.indexOf(this.getItem(id));
//     let product = tempCart[index];
//     product.count = product.count + 1;
//     product.total = product.count * product.price;

//     this.setState(
//       () => {
//         return { cart: [...tempCart] };
//       },
//       () => {
//         this.addTotals();
//       }
//     );
//   };

//   decrement = id => {
//     let tempCart = [...this.state.cart];
//     const index = tempCart.indexOf(this.getItem(id));
//     let product = tempCart[index];
//     product.count = product.count - 1;
//     if (product.count < 1) {
//       return this.removeItem(id);
//     } else {
//       product.total = product.count * product.price;
//     }
//     this.setState(
//       () => {
//         return { cart: [...tempCart] };
//       },
//       () => {
//         this.addTotals();
//       }
//     );
//   };

//   removeItem = id => {
//     const tempCart = [...this.state.cart].filter(item => item.id !== id);
//     let tempProducts = [...this.state.products];
//     const index = tempProducts.indexOf(this.getItem(id));
//     let product = tempProducts[index];
//     product.inCart = false;
//     product.count = 0;
//     product.total = 0;
//     this.setState(
//       () => {
//         return { cart: tempCart, products: tempProducts };
//       },
//       () => {
//         this.addTotals();
//       }
//     );
//   };

//   clearCart = () => {
//     this.setState(
//       () => {
//         return { cart: [] };
//       },
//       () => {
//         this.setProducts();
//         this.addTotals();
//       }
//     );
//   };

//   addTotals = () => {
//     let subtotal = 0;
//     this.state.cart.map(item => (subtotal += item.total));
//     const tempTax = subtotal * 0.08;
//     const tax = parseFloat(tempTax.toFixed(2));
//     const total = subtotal + tax;
//     this.setState(() => {
//       return {
//         cartSubtotal: parseFloat(subtotal.toFixed(2)),
//         cartTax: tax,
//         cartTotal: parseFloat(total.toFixed(2))
//       };
//     });
//   };

//   render() {
//     return (
//       <ProductContext.Provider
//         value={{
//           ...this.state,
//           handleDetail: this.handleDetail,
//           addToCart: this.addToCart,
//           toggleModal: this.toggleModal,
//           increment: this.increment,
//           decrement: this.decrement,
//           removeItem: this.removeItem,
//           clearCart: this.clearCart
//         }}
//       >
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider, ProductConsumer };
