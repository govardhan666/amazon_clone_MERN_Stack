import React from "react";
import {ProductProps} from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";


const Products = ({productData} : any) =>{
    const dispatch = useDispatch();
    return(
        <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {productData.map(({id,
            title,
            price,
            description,
            category,
            image}:ProductProps) =>(
                    <div key={id} className="w-full bg-white text-black p-4 border border-gray-300
                    rounded-lg group overflow-hidden">
                        <div className="w-full h-[260px] relative">
                        <Image className="w-full h-full object-cover scale-90 hover:scale-100
                        transition-transform duration-300" width={300} height={300} src={image} alt="productImg"/>
                        <div className="w-12 h-12 absolute bottom-20 right-0 border-[1px] 
                        border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0
                        transition-transform duration-300">
                            <span onClick={() => dispatch(
                                addToCart({
                                    id : id,
                                    title:title,
                                    price:price,
                                    description:description,
                                    category:category,
                                    image:image,
                                    quantity:1,
                            })
                        )} className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center 
                            text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300
                            "><HiShoppingCart/></span>
                            <span onClick={() => dispatch(
                                addToFavorite({
                                    id : id,
                                    title:title,
                                    price:price,
                                    description:description,
                                    category:category,
                                    image:image,
                                    quantity:1,
                            }) 
                        )}className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center 
                            text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300
                            "><FaHeart/></span>
                        </div>
                        </div>
                        <hr />
                        <div className="px-4 py-3 flex flex-col gap-1">
                            <p className="text-xs text-gray-500 tracking-wide">{category}</p>
                            <p className="text-base font-medium">{title}</p>
                            <p className="flex items-center">
                                <span className="text-amazon_blue font-bold">
                                    <FormattedPrice amount={price*10}/>
                                </span>
                            </p>
                            <p className="text-xs text-gray-600 text-justify">
                                {description.substring(0,200)}
                            </p>
                            <button onClick={() => dispatch(
                                addToCart({
                                    id : id,
                                    title:title,
                                    price:price,
                                    description:description,
                                    category:category,
                                    image:image,
                                    quantity:1,
                            })
                        )} className="h-10 font-medium bg-amazon_blue text-white round-md hover:bg-amazon_yellow 
                            hover:text-black duration-300 mt-2">Add to cart</button>
                        </div>
                    </div>
                ))}
        </div>

    );
};

export default Products;