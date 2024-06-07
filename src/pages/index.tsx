
import HeaderBottom from "@/components/header/HeaderBottom";
import Header from "@/components/header/Header"
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import {ProductProps} from "../../type"

interface Props{
  productData: ProductProps;
}

export default function Home({productData}: Props) {
  console.log(productData);
  return (
    <main>
      
      <div className="max-w-screen-2xl mx-auto">
        <Banner/>
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
        <Products productData={productData}/>
        </div>
      </div>
      
    </main>
  );
}


export const getServerSideProps = async() =>{
  const res = await fetch("https://fakestoreapi.com/products")
  const productData = await res.json();
  return {props: {productData}};
}