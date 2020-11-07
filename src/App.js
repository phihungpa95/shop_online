import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/home';
import Product from './screens/product';
import Blog from './screens/blog';
import BlogDetails from './screens/blog-details';
import CheckOut from './screens/checkout';
import Contact from './screens/contact';
import Shop from './screens/shop';
import ShopCart from './screens/shop-cart';

import Context from './Context';
import { GetDanhMucAPI } from './redux/action';


function App(props) {
  let [login, setLogin] = useState(false);
  let [cart, setCart] = useState([]); 


  return (
    <Context.Provider value={{ login, setLogin, cart, setCart }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/shop-cart">
            <ShopCart />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/blog-details">
            <BlogDetails />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Footer />
        
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;

// Home: Section 1, new product, product slider, hot, instgram
// API get product list
// Cart: Lưu Context
// Login: Thay header menu, lưu Context
// Product detail API: thong tin san pham, san pham lien quan
// LƯu thong tin instgram vào Context
