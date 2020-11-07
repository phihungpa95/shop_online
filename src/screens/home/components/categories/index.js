import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LoadImage from '../../../../components/LoadImage';
import * as action from '../../../../redux/action/index';

function Index(props) {
    // componentDidMount() {
    //     this.props.getDanhMuc();
    // }

    useEffect(() => {
        props.getDanhMuc();
    }, [])
    let data = props.danhmuc;
    console.log(data,
        'danh mục sản phẩm');
    return (
        <section className="categories" >
            <div className="container-fluid">
                <div className="row">
                    {
                        data && data[0] &&
                        <div className="col-lg-6 p-0">
                            <div className="categories__item categories__large__item set-bg">
                                <img src={data[0].image} />
                                <div className="categories__text">
                                    <h1>{data[0].title}</h1>
                                    <p>{data[0].description}</p>
                                    <NavLink to={data[0].link}>Shop now</NavLink>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="col-lg-6">
                        <div className="row">
                            {
                                data?.slice(1).map(e => <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg">
                                        <img src={e.image} />
                                        <div className="categories__text">
                                            <h4>{e.title}</h4>
                                            <p>{e.description}</p>
                                            <NavLink to={e.link}>Shop now</NavLink>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        danhmuc: state.productReducer.DANHMUC
    }
}
const mapDishpatchToProps = dispatch => {
    return {
        getDanhMuc: () => {
            dispatch(action.GetDanhMucAPI());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDishpatchToProps
)(Index);