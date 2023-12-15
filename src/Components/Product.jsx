import React from "react";
import { items } from "../utils/data";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    event.preventDefault();

    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        img: item.img,
        price: item.price,
        qty: 1,
        desc: item.desc,
      })
    );
  };

  return (
    <div className="flex flex-row flex-wrap justify-between w-full gap-5 p-5">
      {items.map((item) => (
        <form
          onSubmit={() => handleSubmit(item)}
          key={item.id}
          className="p-1 shadow-lg max-w-[10rem] overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-32 m-2 rounded-sm aspect-square"
          />
          <div className="ml-2 price">
            <h5 className="text-sm whitespace-nowrap">{item.title}</h5>
            <CurrencyFormat
              value={item.price}
              thousandSeparator
              prefix="Rp "
              displayType={"text"}
            />
          </div>
          <button
            type="submit"
            className="w-32 p-1 m-2 text-xs text-white rounded bg-cyan-600"
          >
            + Tambahkan ke keranjang
          </button>
        </form>
      ))}
    </div>
  );
};

export default Product;
