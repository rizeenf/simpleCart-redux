import React, { useState } from "react";
import { ShoppingCart, ChefHat } from "lucide-react";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const handleCartOpen = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-10 h-12 shadow-lg ">
        <div className="logo flex flex-row gap-2">
          <ChefHat size={24} color="lightblue" />
          <span>Main Course</span>
        </div>
        <div
          onClick={handleCartOpen}
          className="cart flex flex-row p-2 bg-cyan-100 rounded gap-2 cursor-pointer"
        >
          <ShoppingCart size={20} color="lightblue" />
          <span>Keranjang</span>
        </div>
      </div>
      <Cart handleCart={handleCartOpen} isCartOpen={isCartOpen} />
    </>
  );
};

export default Header;
