import React, { useEffect, useReducer, Component } from 'react';
import * as action from './../../redux/action';
import { connect } from 'react-redux';
import { GetProductAPI } from './../../redux/action';
import Instagram from '../../components/instagram';

import ProductItem from '../../components/ProductItem';
import { NavLink, useRouteMatch } from 'react-router-dom';

function Index(props) {
    
    let {url} = useRouteMatch();
    let renderHTML = () => {
        return props.listCourse?.map((item, index) => {
            return <ProductItem key = {index} data = {item} />
        })
    }

        console.log(props.getListProduct);
        return (            
            <>
                <div className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__links">
                                    <a href="./index.html"><i className="fa fa-home" /> Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="shop spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="shop__sidebar">
                                    <div className="sidebar__categories">
                                        <div className="section-title">
                                            <h4>Categories</h4>
                                        </div>
                                        <div className="categories__accordion">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-heading active">
                                                        <a data-toggle="collapse" data-target="#collapseOne">Women</a>
                                                        
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><a href="#">Coats</a></li>
                                                                <li><a href="#">Jackets</a></li>
                                                                <li><a href="#">Dresses</a></li>
                                                                <li><a href="#">Shirts</a></li>
                                                                <li><a href="#">T-shirts</a></li>
                                                                <li><a href="#">Jeans</a></li>
                                                                <li><NavLink to={`${url}/women`}>Women</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseTwo">Men</a>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><a href="#">Coats</a></li>
                                                                <li><a href="#">Jackets</a></li>
                                                                <li><a href="#">Dresses</a></li>
                                                                <li><a href="#">Shirts</a></li>
                                                                <li><a href="#">T-shirts</a></li>
                                                                <li><a href="#">Jeans</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseThree">Kids</a>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><a href="#">Coats</a></li>
                                                                <li><a href="#">Jackets</a></li>
                                                                <li><a href="#">Dresses</a></li>
                                                                <li><a href="#">Shirts</a></li>
                                                                <li><a href="#">T-shirts</a></li>
                                                                <li><a href="#">Jeans</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseFour">Accessories</a>
                                                    </div>
                                                    <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><a href="#">Coats</a></li>
                                                                <li><a href="#">Jackets</a></li>
                                                                <li><a href="#">Dresses</a></li>
                                                                <li><a href="#">Shirts</a></li>
                                                                <li><a href="#">T-shirts</a></li>
                                                                <li><a href="#">Jeans</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseFive">Cosmetic</a>
                                                    </div>
                                                    <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <ul>
                                                                <li><a href="#">Coats</a></li>
                                                                <li><a href="#">Jackets</a></li>
                                                                <li><a href="#">Dresses</a></li>
                                                                <li><a href="#">Shirts</a></li>
                                                                <li><a href="#">T-shirts</a></li>
                                                                <li><a href="#">Jeans</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar__filter">
                                        <div className="section-title">
                                            <h4>Shop by price</h4>
                                        </div>
                                        <div className="filter-range-wrap">
                                            <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={33} data-max={99} />
                                            <div className="range-slider">
                                                <div className="price-input">
                                                    <p>Price:</p>
                                                    <input type="text" id="minamount" />
                                                    <input type="text" id="maxamount" />
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">Filter</a>
                                    </div>
                                    <div className="sidebar__sizes">
                                        <div className="section-title">
                                            <h4>Shop by size</h4>
                                        </div>
                                        <div className="size__list">
                                            <label htmlFor="xxs">
                                                xxs
                <input type="checkbox" id="xxs" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="xs">
                                                xs
                <input type="checkbox" id="xs" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="xss">
                                                xs-s
                <input type="checkbox" id="xss" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="s">
                                                s
                <input type="checkbox" id="s" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="m">
                                                m
                <input type="checkbox" id="m" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="ml">
                                                m-l
                <input type="checkbox" id="ml" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="l">
                                                l
                <input type="checkbox" id="l" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="xl">
                                                xl
                <input type="checkbox" id="xl" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="sidebar__color">
                                        <div className="section-title">
                                            <h4>Shop by size</h4>
                                        </div>
                                        <div className="size__list color__list">
                                            <label htmlFor="black">
                                                Blacks
                <input type="checkbox" id="black" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="whites">
                                                Whites
                <input type="checkbox" id="whites" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="reds">
                                                Reds
                <input type="checkbox" id="reds" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="greys">
                                                Greys
                <input type="checkbox" id="greys" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="blues">
                                                Blues
                <input type="checkbox" id="blues" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="beige">
                                                Beige Tones
                <input type="checkbox" id="beige" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="greens">
                                                Greens
                <input type="checkbox" id="greens" />
                                                <span className="checkmark" />
                                            </label>
                                            <label htmlFor="yellows">
                                                Yellows
                <input type="checkbox" id="yellows" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="row">
                                    {renderHTML()}
                                    <div className="col-lg-12 text-center">
                                        <div className="pagination__option">
                                            <a href="#">1</a>
                                            <a href="#">2</a>
                                            <a href="#">3</a>
                                            <a href="#"><i className="fa fa-angle-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Instagram />
            </>
        );
}
const mapStateToProps = state => {
    return {
        listCourse: state.productReducer.PRODUCT
    };
};

export default connect(
    mapStateToProps
)(Index);

// export default Index;