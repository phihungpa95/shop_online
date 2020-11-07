import * as ActionType from './../constants/actionType';

let intialState = {
    PRODUCT: [],
    danhmuc: [],
    danhsachSanpham: []
}

const productReducer = (state = intialState, action) => {
    switch (action.type) {
        case ActionType.PRODUCT:
            state.PRODUCT = action.listCourse;
            console.log(action.listCourse, 'REDUX');
            return { ...state };
        case ActionType.DANHMUC:
            state.DANHMUC = action.danhmuc;
            console.log(action.danhmuc, 'danh mục');
            return { ...state };
        case ActionType.DANHSACHSANPHAM:
            state.DANHSACHSANPHAM = action.danhsachSanpham;
            console.log(action.danhsachSanpham, 'danh sách sản phẩm');
            return { ...state };
        default:
            return { ...state };
    }
}
export default productReducer;