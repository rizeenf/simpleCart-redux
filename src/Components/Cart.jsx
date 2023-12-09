import { ChefHat, Ticket } from "lucide-react";
import React from "react";
import CurrencyFormat from "react-currency-format";

const Cart = ({ handleCart, isCartOpen }) => {
  return (
    <div
      className={`fixed z-10 overflow-auto top-0 right-0 bg-cyan-50 transition-all duration-500 h-full flex flex-col max-w-[100dvw]
    ${isCartOpen ? "w-[30rem]" : "w-[0]"}
    `}
    >
      <div className="logo flex flex-row justify-between items-center p-5">
        <div className="logo flex flex-row gap-2">
          <ChefHat size={24} color="lightblue" />
          <span>Main Course</span>
        </div>
        <span
          className=" font-bold text-cyan-600 cursor-pointer"
          onClick={handleCart}
        >
          x
        </span>
      </div>
      <div className="items flex-[4]">
        <div className="item m-5">
          <div className=" flex flex-row justify-between border-t">
            <img
              src="https://images.pexels.com/photos/13884280/pexels-photo-13884280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="aspect-square w-16 m-2 rounded-sm object-cover flex-[1] "
            />
            <div className="price m-2 flex-[3]">
              <h5 className=" whitespace-nowrap text-sm">
                Tea - Lemon Scented
              </h5>
              <CurrencyFormat
                value={5215}
                thousandSeparator
                prefix="Rp "
                displayType={"text"}
                className=" text-cyan-700 font-semibold "
              />
              <h6 className=" whitespace-nowrap text-xs font-light">
                Fusce consequat. Nulla nisl. Nunc nisl
              </h6>
            </div>
            <div className="count flex flex-row justify-end items-center flex-[1]">
              <button className=" p-1 m-2 w-7 h-7 rounded bg-cyan-600 text-xs text-white">
                +
              </button>
              <span>1</span>
              <button className=" p-1 m-2 w-7 h-7 rounded bg-cyan-600 text-xs text-white">
                -
              </button>
            </div>
          </div>
          <input
            type="text"
            className="w-full  text-xs p-2"
            placeholder="Masukkan catatan disini..."
          />
        </div>
      </div>
      <div className="voucher border-t mx-3 flex-[1]">
        <div className="wrapper my-3">
          <div className="content flex flex-row gap-2 items-center">
            <Ticket size={20} />
            <span className=" text-sm">Tambah voucher</span>
          </div>
          <input
            type="text"
            className="w-full text-xs p-2 mt-1"
            placeholder="Masukkan vouchermu disini..."
          />
        </div>
      </div>

      <div className="total border-t mx-3 flex-[1]">
        <div className="wrapper my-3 flex justify-between bg-gray-200 rounded p-2">
          <span>Total</span>
          <CurrencyFormat
            value={52215}
            thousandSeparator
            prefix="Rp "
            displayType={"text"}
            className=" text-cyan-700 font-semibold "
          />
        </div>
        <button className="p-2 w-full rounded bg-cyan-600 text-xs text-white">
          Buat Pesanan
        </button>
      </div>
    </div>
  );
};

export default Cart;
