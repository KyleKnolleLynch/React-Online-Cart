import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductProvider } from './context/products/ProductContext';
import Navbar from './components/layout/Navbar';
import CpuList from './components/pages/CpuList/CpuList';
import CpuDetails from './components/pages/CpuDetails/CpuDetails';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';

import './sass/config.scss';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container' style={{paddingTop: '5rem'}}>
            <Switch>
              <Route exact path='/' component={CpuList} />
              <Route exact path='/cpuDetails' component={CpuDetails} />
              <Route exact path='/cart' component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ProductProvider>
  );
};

export default App;
