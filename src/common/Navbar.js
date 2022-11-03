import React, { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    return ( 
        <>
            <header className="header">
                <div className="container d-flex">
                    <div className="categories d-flex">
                        <span class='fa fa-border-all'></span>
                        <h4>
                            Categories <i className="fa fa-chevron-down"></i>
                        </h4>
                    </div>
                    <div className="navlink">
                        <ul className= {MobileMenu ? "nav-links-MobileMenu" : "link f-flex capitalize"} onClick={()=>setMobileMenu(false)}>
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            <li>
                                <Link to="/pages">pages</Link>
                            </li>
                            <li>
                                <Link to="/user">user account</Link>
                            </li>
                            <li>
                                <Link to="/vendor">vendor aaccount</Link>
                            </li>
                            <li>
                                <Link to="/track">track my order</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>
                        <button className="toggle" onClick={()=>setMobileMenu(!MobileMenu)}>
                            {MobileMenu ? <i className='fa fa-times close home-btn'></i> : <i class="fa-solid fa-minus"></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Navbar;