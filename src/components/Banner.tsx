import React from "react";
import { Carousel }  from 'react-responsive-carousel';
import sliderImg_1 from "../images/slider/slide1.jpg"
import sliderImg_2 from "../images/slider/slide2.jpg"
import sliderImg_3 from "../images/slider/slide3.jpg"
import sliderImg_4 from "../images/slider/slide4.jpg"
import sliderImg_5 from "../images/slider/slide5.jpg"
import sliderImg_6 from "../images/slider/slide6.jpg"
import sliderImg_7 from "../images/slider/slide7.jpg"
import sliderImg_8 from "../images/slider/slide8.jpg"
import Image from "next/image";



const Banner = () =>{
    return(
        <div className="relative">
             <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} interval={3000}>
                <div>
                    <Image priority src={sliderImg_1} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={sliderImg_2} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={sliderImg_3} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={sliderImg_4} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={sliderImg_5} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={sliderImg_6} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={sliderImg_7} alt="sliderImg" />
                    
                </div>
                <div>
                    <Image src={sliderImg_8} alt="sliderImg" />
                    
                </div>
               
            </Carousel>
            <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
        </div>
    );
   
};

export default Banner;