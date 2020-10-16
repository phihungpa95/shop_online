import React, { useEffect, useReducer } from 'react';
import LoadImage from '../../components/LoadImage';
import Categories from './components/categories';
import Product from './components/product';
import Banner from './components/banner';
import Trend from './components/trend';
import Discount from './components/discount';
import Sevices from './components/services';
import Instagram from '../../components/instagram';

import { Type, Reducer } from './Reducer';

function Home() {

    let [state, dispatch] = useReducer(Reducer, {
        section1: [],
        productList: []
    });

    useEffect(LoadImage, [])
    useEffect(() => {
        loadData(res => {
            dispatch({ type: Type.INIT_DATA, data: res })
        });
    }, [])

    function loadData(callback) {
        fetch('/data/home.json')
            .then(res => res.json())
            .then(callback)
    }

    console.log(state)
    return (
        <div className="HomePage">

            {/* Categories Section Begin */}
            <Categories data={state.section1} />
            {/* Categories Section End */}
            {/* Product Section Begin */}
            <Product data={state.productList} />
            {/* Product Section End */}
            {/* Banner Section Begin */}
            <Banner />
            {/* Trend Section Begin */}
            <Trend />
            {/* Trend Section End */}
            {/* Discount Section Begin */}
            <Discount />
            {/* Discount Section End */}
            {/* Services Section Begin */}
            <Sevices />
            {/* Services Section End */}
            {/* Instagram Begin */}
            <Instagram />
            {/* Instagram End */}
        </div>
    );
}

export default Home;