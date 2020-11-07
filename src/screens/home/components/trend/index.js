import React, { useEffect, useReducer } from 'react';
import TrendsItem from '../../../../components/TrendsItem';
import { Type, Reducer } from '../../../../Reducer';

function Index({ data }) {
    let [state, dispatch] = useReducer(Reducer, {
        producthot: [],
        productseller: [],
        productfeature: []
    });
    console.log(data);
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
    return (
        <section className="trend spad" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4>Hot Trend</h4>
                            </div>
                            <TrendsItem data={state.producthot} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4>Best seller</h4>
                            </div>
                            <TrendsItem data={state.productseller} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4>Feature</h4>
                            </div>
                            <TrendsItem data={state.productfeature} />
                        </div>
                    </div>
                </div>
            </div>
    </section >
    );
}

export default Index;