import * as ActionType from './../constants/actionType';

import { callAPI } from './../../utils/callAPI';

export const GetProductAPI = () => {
    return dispatch => {
        callAPI(`Product`, "GET")
            .then(res => {
                console.log(res, 'PRODUCT');
                dispatch(GetProduct(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const GetDanhMucAPI = () => {
    return dispatch => {
        callAPI(`danh-muc`, "GET")
        .then(res => {
            console.log(res, 'DANHMUC');
            dispatch({
                type: ActionType.DANHMUC,
                danhmuc: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const GetDanhSachAPI = () => {
    return dispatch => {
        callAPI(`danh-sach-san-pham`, "GET")
        .then(res => {
            console.log(res, 'DANHSACHSANPHAM');
            dispatch({
                type: ActionType.DANHSACHSANPHAM,
                danhsachSanpham: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const GetProduct = listCourse => {
    return {
        type: ActionType.PRODUCT,
        listCourse
    }
}