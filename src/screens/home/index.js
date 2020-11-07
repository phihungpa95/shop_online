import React, { useEffect, useReducer } from 'react';
import LoadImage from '../../components/LoadImage';
import Categories from './components/categories';
import Product from './components/product';
import Banner from './components/banner';
import Trend from './components/trend';
import Discount from './components/discount';
import Sevices from './components/services';
import Instagram from '../../components/instagram';

import { GetProductAPI } from '../../redux/action';
import { useDispatch } from 'react-redux';


export default function Home() {

    
    const distpatch = useDispatch()
    useEffect(LoadImage, [])
    useEffect(() => {
       
        distpatch(GetProductAPI())
        
    }, []);


    return (
        <div className="HomePage">

            {/* Categories Section Begin */}
            <Categories />
            {/* Categories Section End */}
            {/* Product Section Begin */}
            <Product />
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
