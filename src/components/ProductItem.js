import React, { useEffect, Component } from 'react';

import LoadImage from './LoadImage';

export default class ProductItem extends Component {
    render() {
        let { data } = this.props;
        // useEffect(LoadImage, [data])
        return (
            <div className="col-lg-4 col-md-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" data-setbg={data.image}>
                        {
                            data.sale &&
                            <div className="label sale">Sale</div>
                        }
                        {
                            data.out_of_stock &&
                            <div className="label stockout">out of stock</div>
                        }
                        {
                            typeof data.new !== 'undefined' ?
                                <div className="label new">New</div>
                                : null
                        }
                        <ul className="product__hover">
                            <li><a href="img/shop/shop-3.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                            <li><a href="#"><span className="icon_heart_alt" /></a></li>
                            <li><a href="#"><span className="icon_bag_alt" /></a></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">{data.title}</a></h6>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="product__price">
                            {data.money}
                            {
                                <span>{data.promotion}</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
