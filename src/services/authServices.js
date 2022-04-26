import { Axios } from './Axios';

function getCategory() {
    return Axios.get('categories/get?id_website=4');
}

function getProduct(id) {
    return Axios.get(`products/get?active=1&id_parent=0&id_website=4&id_cat=${id}`);
}
export const authServices = {
    getCategory,
    getProduct,
};