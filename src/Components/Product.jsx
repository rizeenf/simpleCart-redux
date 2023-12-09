import React from "react";
import { items } from "../utils/data";
import CurrencyFormat from "react-currency-format";

const Product = () => {
  const handleSubmit = (item) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-between w-full p-5">
      {items.map((item) => (
        <form
          onSubmit={() => handleSubmit(item)}
          key={item.id}
          className="p-1 shadow-lg max-w-[10rem] overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.title}
            className="aspect-square w-32 m-2 rounded-sm"
          />
          <div className="price ml-2">
            <h5 className=" whitespace-nowrap text-sm">{item.title}</h5>
            <CurrencyFormat
              value={item.price}
              thousandSeparator
              prefix="Rp "
              displayType={"text"}
            />
          </div>
          <button
            type="submit"
            className=" p-1 m-2 rounded bg-cyan-600 w-32 text-xs text-white"
          >
            + Tambahkan ke keranjang
          </button>
        </form>
      ))}
    </div>
  );
};

export default Product;
