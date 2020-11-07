import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';
import Login from '../screens/login';
import Search from './search';

export default function Header(props) {

    let search = useRef(null)

    function searchHandle() {
        search.current.open();
    }

    let login = useRef(null)

    function loginHandle() {
        login.current.open();
    }


    return (
        
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-2">
                        <div className="header__logo">
                            <NavLink to="/"><img src="img/logo.png" alt /></NavLink>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <nav className="header__menu">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="">Women’s</NavLink></li>
                                <li><NavLink to="#">Men’s</NavLink></li>
                                <li><NavLink to="/shop">Shop</NavLink></li>
                                <li><NavLink to="#">Pages</NavLink>
                                    <ul className="dropdown">
                                        <li><NavLink to="/product">Product Details</NavLink></li>
                                        <li><NavLink to="/shop-cart">Shop Cart</NavLink></li>
                                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                                        <li><NavLink to="/blog-details">Blog Details</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__right">
                            <div className="header__right__auth">
                                <a onClick={loginHandle}>Login</a>
                                <NavLink to="#">Register</NavLink>
                            </div>
                            <ul className="header__right__widget">
                                <li><span onClick={searchHandle} className="icon_search search-switch" /></li>
                                <li><a href="#"><span className="icon_heart_alt" />
                                    <div className="tip">2</div>
                                </a></li>
                                <li><a href="#"><span className="icon_bag_alt" />
                                    <div className="tip">2</div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="canvas__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
            <Search ref={search} />
            <Login ref={login} />
        </header>
    )
}