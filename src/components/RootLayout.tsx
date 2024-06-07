import React, { ReactElement } from "react";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";
import Footer from "./Footer";

interface Props{
    children:ReactElement
}

const RootLayout = ({children}: Props) =>{
    return(
        <>
        <Header/>
        <HeaderBottom/>
        {children}
        <Footer/>
        </>

    );
};

export default RootLayout;