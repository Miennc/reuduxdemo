import React, {useContext, useEffect, useState} from "react";
import {authServices} from '../services/authServices'
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct,getListProductSuccess,getListProductError } from "../action/product";
import { getListCategoriesSuccess,getListCategoriesError } from "../action/categories";

function Home(props) {

    const [showModal, setShowModal] = useState(false);
    const [product,setProduct] = useState([])
    const dispatch = useDispatch();
    const temp = useSelector((state) => state);
    console.log(temp);

    useEffect(() => {
        authServices.getCategory().then((resp) => {
            dispatch(getListCategoriesSuccess({ data: resp.data.data }));
        }).catch((e) => {
            console.log(e);
            dispatch(getListCategoriesError({ mess: "lỗi rồi" }));
        });
        console.log(product.filters)
    }, []);

    const dataCategories = temp?.table?.data?.data;
    const dataProducts = temp?.product?.list?.data?.data;  

    const handleCategory = async (id) => {
        try{
            const resp = await authServices.getProduct(id);
            dispatch(getListProductSuccess({ data: resp.data.data }));
        }catch (e){
            console.log(e);
            dispatch(getListProductError({ mess: "lỗi rồi" }));
        }
    }

    const handleProduct = (item) => {
        setShowModal(true)
        setProduct(item)
    }
    console.log(dataProducts)

    return (
        <div>
            <div className="container">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-8">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-4xl text-5xl font-bold font-medium title-font mb-2 text-gray-900">List
                                    Categories</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {(dataCategories||[]).map((itemCategory,indexCategory)=>{
                                return(
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" onClick={handleCategory.bind(this, itemCategory.id)} key={indexCategory}>
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                                                 src={`http://192.168.1.43/storage/${itemCategory.thumb}`}/>
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{itemCategory.name}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{itemCategory.description}</h2>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>


                    </div>
                </section>
                <div className="">
                    <div className="flex flex-wrap w-full mb-8">
                        <div className="w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-4xl text-5xl font-bold font-medium title-font mb-2 text-gray-900">List
                                Products</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {(dataProducts||[]).map((itemProduct, indexProduct)=>{
                            return(
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"  key={indexProduct} onClick={handleProduct.bind(this,itemProduct)}>
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`http://192.168.1.43/storage/${itemProduct.thumb}`}/>
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-700 text-xl tracking-widest title-font mb-1">{itemProduct.name}</h3>
                                        <span className="text-gray-900 title-font text-lg font-medium">{itemProduct.price} vnđ</span> 
                                        <p className="text-gray-900 title-font text-lg font-medium">{itemProduct.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Modal size="lg" active={showModal} toggler={() => setShowModal(false)} className="max-h-screen">
                        <ModalHeader toggler={() => setShowModal(false)}>
                            Modal Title
                        </ModalHeader>
                        <ModalBody>
                            <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 w-full">
                                <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
                                     src={`http://192.168.1.43/storage/${product?.thumb}`}
                                     alt="bag" />
                                    <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                                        <div className="flex items-center">
                                            <h2 className="text-xl text-gray-800 font-medium mr-auto">{product?.name}</h2>
                                            <p className="text-gray-800 font-semibold tracking-tighter">
                                                <i className="text-blue-600 line-through mx-2 "> {product?.old_price}vnđ </i>
                                                only 
                                                 <span className="ml-2 text-red-500">{product?.price}vnđ</span>
                                            
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-700 mt-4">
                                            {product?.description}
                                        </p>
                                        <div className="flex items-center justify-end mt-4 top-auto">
                                            <button
                                                className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Add to cart
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="red"
                                buttonType="link"
                                onClick={(e) => setShowModal(false)}
                                ripple="dark"
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Home;