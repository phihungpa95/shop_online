export const Type = {
    INIT_DATA: [],
    PRODUCT_DATA: []
}

export function Reducer(state, action) {

    switch (action.type) {
        case Type.INIT_DATA:
            let { section_1, productList, product_hot, product_seller, product_feature } = action.data;
            return { section1: section_1, productList, producthot: product_hot, productseller: product_seller, productfeature: product_feature }
        case Type.PRODUCT_DATA:
            let { shop } = action.data;
            return { shop1: shop }
        default:
            return state;
    }
}   