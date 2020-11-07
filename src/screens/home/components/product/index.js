import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import LoadImage from '../../../../components/LoadImage';
import * as action from '../../../../redux/action/index';

function Index(props) {
    // componentDidMount() {
    //     this.props.getDanhSach()
    // }

    useEffect(() => {
        props.getDanhSach();
    }, []);

    let data = props.danhsachSanpham;
    console.log(props.danhsachSanpham);
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="section-title">
                            <h4>New product</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <ul className="filter__controls">
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".women">Women’s</li>
                            <li data-filter=".men">Men’s</li>
                            <li data-filter=".kid">Kid’s</li>
                            <li data-filter=".accessories">Accessories</li>
                            <li data-filter=".cosmetic">Cosmetics</li>
                        </ul>
                    </div>
                </div>
                <div className="row property__gallery">
                    {
                        data?.map((e, i) => <div key={i} className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className={"product__item" + (e.sale ? ' sale' : '')}>
                                <div className="product__item__pic set-bg">
                                    <img src={e.image} />
                                    {
                                        e.sale &&
                                        <div className="label sale">Sale</div>
                                    }
                                    {
                                        e.out_of_stock &&
                                        <div className="label stockout">out of stock</div>
                                    }
                                    {
                                        typeof e.new !== 'undefined' ?
                                            <div className="label new">New</div>
                                            : null
                                    }

                                    <ul className="product__hover">
                                        <li><a href="img/product/product-1.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
                                        <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                        <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">{e.title}</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>

                                    <div className="product__price">
                                        {e.money}
                                        {
                                            e.promotion &&
                                            <span>{e.promotion}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = state => {
    return {
        danhsachSanpham: state.productReducer.DANHSACHSANPHAM
    }
}
const mapDishpatchToProps = dispatch => {
    return {
        getDanhSach: () => {
            dispatch(action.GetDanhSachAPI())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDishpatchToProps
)(Index)

// function Index({ data }) {
//     useEffect(LoadImage, [data])
//     console.log(data)
//     return (
//         <section className="product spad">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-4">
//                         <div className="section-title">
//                             <h4>New product</h4>
//                         </div>
//                     </div>
//                     <div className="col-lg-8 col-md-8">
//                         <ul className="filter__controls">
//                             <li className="active" data-filter="*">All</li>
//                             <li data-filter=".women">Women’s</li>
//                             <li data-filter=".men">Men’s</li>
//                             <li data-filter=".kid">Kid’s</li>
//                             <li data-filter=".accessories">Accessories</li>
//                             <li data-filter=".cosmetic">Cosmetics</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="row property__gallery">
//                     {
//                         data?.map((e, i) => <div key={i} className="col-lg-3 col-md-4 col-sm-6 mix women">
//                             <div className={"product__item" + (e.sale ? ' sale' : '')}>
//                                 <div className="product__item__pic set-bg" data-setbg={e.image}>
//                                     {
//                                         e.sale &&
//                                         <div className="label sale">Sale</div>
//                                     }
//                                     {
//                                         e.out_of_stock &&
//                                         <div className="label stockout">out of stock</div>
//                                     }
//                                     {
//                                         typeof e.new !== 'undefined' ?
//                                             <div className="label new">New</div>
//                                             : null
//                                     }

//                                     <ul className="product__hover">
//                                         <li><a href="img/product/product-1.jpg" className="image-popup"><span className="arrow_expand" /></a></li>
//                                         <li><a href="#"><span className="icon_heart_alt" /></a></li>
//                                         <li><a href="#"><span className="icon_bag_alt" /></a></li>
//                                     </ul>
//                                 </div>
//                                 <div className="product__item__text">
//                                     <h6><a href="#">{e.title}</a></h6>
//                                     <div className="rating">
//                                         <i className="fa fa-star" />
//                                         <i className="fa fa-star" />
//                                         <i className="fa fa-star" />
//                                         <i className="fa fa-star" />
//                                         <i className="fa fa-star" />
//                                     </div>

//                                     <div className="product__price">
//                                         {e.money}
//                                         {
//                                             e.promotion &&
//                                             <span>{e.promotion}</span>
//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>)
//                     }
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Index;