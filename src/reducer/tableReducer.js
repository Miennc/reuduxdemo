import * as TYPE from "../contans/categories";

const initialState = {
    loading: false,
    data: [],
    mess: null,
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_LIST_CATEGORIES:
            return {
                ...state,
                loading: true,
            };

        case TYPE.GET_LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
            };

        case TYPE.GET_LIST_CATEGORIES_ERROR:
            return {
                ...state,
                loading: false,
                mess: action.mess,
            };

        default:
            return state;
    }
};

export default tableReducer;