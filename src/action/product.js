import * as TYPE from "../contans/product";

export const getListProduct = (params) => {
    return {
        type: TYPE.GET_LIST_PRODUCT,
        ...params,
    };
};

export const getListProductSuccess = (data) => {
    return {
        type: TYPE.GET_LIST_PRODUCT_SUCCESS,
        data,
    };
};

export const getListProductError = (mess) => {
    return {
        type: TYPE.GET_LIST_PRODUCT_ERROR,
        mess,
    };
};

export const getDetailProduct = (params) => {
    return {
        type: TYPE.GET_DETAIL_PRODUCT,
        ...params,
    };
};

export const getDetailProductSuccess = (data) => {
    return {
        type: TYPE.GET_DETAIL_PRODUCT_SUCCESS,
        data,
    };
};

export const getDetailProductError = (mess) => {
    return {
        type: TYPE.GET_DETAIL_PRODUCT_ERROR,
        mess,
    };
};