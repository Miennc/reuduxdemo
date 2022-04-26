import * as TYPE from "../contans/categories";

export const getListCategories = (params) => {
    return {
        type: TYPE.GET_LIST_CATEGORIES,
        ...params,
    };
};

export const getListCategoriesSuccess = (data) => {
    return {
        type: TYPE.GET_LIST_CATEGORIES_SUCCESS,
        data,
    };
};


export const getListCategoriesError = (mess) => {
    return {
        type: TYPE.GET_LIST_CATEGORIES_ERROR,
        mess,
    };
};