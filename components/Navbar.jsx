import React from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Welcome to HelloGoods</Link>
      </p>
      {/* adding search bar here */}
  
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty"> {totalQuantities} </span>
      </button>
      {/* adding drop menu below */}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
