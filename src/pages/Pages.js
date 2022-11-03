import React from 'react';
import Home from './../components/mainpage/Home';
import FlashDeal from './../components/flashDeals/FlashDeal';
import TopCateg from '../components/top/TopCateg';
import NewArrivals from '../components/New Arrivals/NewArrivals';
import Discount from '../components/Discount/Discount';
import Shop from '../components/shop/Shop';
import Announcement from '../components/announcement/Announcement';
import Wrapper from '../components/Wrapper/Wrapper';

const Pages = ({ productItems,cartItem,addToCart,shopItems }) => {
    return ( 
        <>
            <Home cartItem={cartItem}/>
            <FlashDeal productItems = {productItems} addToCart={addToCart}/>
            <TopCateg/>
            <NewArrivals/>
            <Discount/>
            <Shop shopItems={shopItems} addToCart={addToCart}/>
            <Announcement/>
            <Wrapper/>
        </>
     );
}
 
export default Pages;