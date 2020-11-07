import React from 'react';

function TrendsItem({ data }) {
    console.log(data);
    return (
        
        data.map((e, i) => <div key = {i} className="trend__item" >
            <div className="trend__item__pic">
                <img src={e.image} alt />
            </div>
            <div className="trend__item__text">
    <h6>{e.title}</h6>
                <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                </div>
    <div className="product__price">{e.money}</div>
            </div>
        </div >)
    );
}

export default TrendsItem;