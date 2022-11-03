import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/assets/images/logo.svg"

const Search = ({cartItem}) => {
    window.addEventListener("scroll",()=>{
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100);
    })
    return ( 
        <>
            <section className="search">
                <div className="container c-flex">
                    <div className="width logo">
                        <img src={logo} alt=''/>
                    </div>

                    <div className="search-box f-flex">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Search and press enter"/>
                        <span>All Categories</span>
                    </div>

                    <div className="icon f-flex width">
                        <i className="fa fa-user icon-circled"/>
                        <div className="cart">
                            <Link to='/cart'>
                                <i className="fa fa-shopping-bag icon-circled"/>
                                <span>{cartItem.length === 0 ? " " : cartItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Search;