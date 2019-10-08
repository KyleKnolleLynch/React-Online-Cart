import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductProvider } from './context/products/ProductContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/layout/Navbar';
import CpuList from './components/pages/CpuList/CpuList';
import CpuDetails from './components/pages/CpuDetails/CpuDetails';
import Cart from './components/pages/Cart';
import Modal from './components/modal/Modal';
import NotFound from './components/pages/NotFound';

import './sass/config.scss';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <ScrollToTop>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={CpuList} />
                <Route exact path='/cpuDetails' component={CpuDetails} />
                <Route exact path='/cart' component={Cart} />
                <Route component={NotFound} />
              </Switch>
              <Modal />
            </div>
          </Fragment>
        </ScrollToTop>
      </Router>
    </ProductProvider>
  );
};

export default App;
