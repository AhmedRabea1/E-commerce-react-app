import React from 'react';
import Sliderdata from './SliderData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots : (dots) =>{
            return <ul style={{margin : 0}}>{dots}</ul>
        }
    };
    return ( 
        <>
            <Slider {...settings}>
            {Sliderdata.map((value,index)=>
            {
                return(
                    <div className='box d-flex top' key={index}>
                        <div className='left'>
                            <h1>{value.title}</h1>
                            <p>{value.desc}</p>
                            <button className='btn-primary'>Visit Collections</button>
                        </div>
                        <div className='right'>
                            <img src={value.cover} alt=''/>
                        </div>
                    </div>
                )
            }
            )
}
    </Slider>
        </>
    )
}
export default SlideCard;