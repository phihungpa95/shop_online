export const Type = {
    INIT_DATA: 0,
}

export function Reducer(state, action) {

    switch (action.type) {
        case Type.INIT_DATA:
            let { section_1, productList } = action.data;

            return { section1: section_1, productList }
        default:
            return state;
    }
}   