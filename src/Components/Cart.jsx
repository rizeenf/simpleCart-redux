import { ChefHat, Ticket } from "lucide-react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCart,
  discountCart,
  increaseCart,
  resetCart,
} from "../utils/cartSlice";
import { useRef, useState } from "react";

const Cart = ({ handleCart, isCartOpen }) => {
  const [voucher, setVoucher] = useState("");
  const [isVoucherTrue, setIsVoucherTrue] = useState(false);

  const buttonVoucher = useRef(null);

  const data = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleIncreaseQty = (id, price) => {
    dispatch(increaseCart({ id, price }));
  };

  const handleDecreaseQty = (id, price) => {
    dispatch(decreaseCart({ id, price }));
  };

  const handleVoucher = (e) => {
    if (voucher.toLowerCase() == "hemat") {
      dispatch(
        discountCart({
          discount: 10000,
        })
      );
      setVoucher("hemat");
      setIsVoucherTrue(true);
      e.target.disabled = true;
    } else if (voucher.toLowerCase() == "puas") {
      dispatch(
        discountCart({
          discount: 100000,
        })
      );
      setVoucher("puas");
      setIsVoucherTrue(true);
      e.target.disabled = true;
    } else {
      setVoucher("");
      setIsVoucherTrue(false);
      e.target.disabled = false;
    }
  };

  const handleReset = () => {
    dispatch(resetCart());
    setVoucher("");
    setIsVoucherTrue(false);
    buttonVoucher.current.disabled = false;
  };

  return (
    <div
      className={`fixed z-10 overflow-auto top-0 right-0 bg-cyan-50 transition-all duration-500 h-full flex flex-col max-w-[100dvw]
    ${isCartOpen ? "w-[30rem]" : "w-[0]"}
    `}
    >
      <div className="flex flex-row items-center justify-between p-5 logo">
        <div className="flex flex-row gap-2 logo">
          <ChefHat size={24} color="lightblue" />
          <span>Main Course</span>
        </div>
        <span
          className="font-bold cursor-pointer text-cyan-600"
          onClick={handleCart}
        >
          x
        </span>
      </div>

      <div className="items flex-[4]">
        {data.map((item) => (
          <div className="m-5 item" key={item.id}>
            <div className="flex flex-row justify-between border-t ">
              <img
                src={item.img}
                alt={item.img}
                className="aspect-square w-16 m-2 rounded-sm object-cover flex-[1] "
              />
              <div className="price m-2 flex-[3]">
                <h5 className="text-sm whitespace-nowrap">{item.title}</h5>
                <CurrencyFormat
                  value={item.price}
                  thousandSeparator
                  prefix="Rp "
                  displayType={"text"}
                  className="font-semibold text-cyan-700"
                />
                <h6 className="text-xs font-light">{item.desc}</h6>
              </div>
              <div className="count flex flex-row justify-end items-center flex-[1]">
                <button
                  className="p-1 m-2 text-xs text-white rounded w-7 h-7 bg-cyan-600"
                  onClick={() => handleIncreaseQty(item.id, item.price)}
                >
                  +
                </button>
                <span>{item.qty}</span>
                <button
                  className="p-1 m-2 text-xs text-white rounded w-7 h-7 bg-cyan-600"
                  onClick={() => handleDecreaseQty(item.id, item.price)}
                >
                  -
                </button>
              </div>
            </div>
            <input
              type="text"
              className="w-full p-2 text-xs"
              placeholder="Masukkan catatan disini..."
              value={item.note}
            />
          </div>
        ))}
      </div>

      <div className="voucher border-t mx-3 flex-[1]">
        <div className="my-3 wrapper">
          <div className="flex flex-row items-center gap-2 content">
            <Ticket size={20} />
            <span className="text-sm ">Tambah voucher</span>
            <span className="text-xs ">PUAS : 100.000, HEMAT : 10.000</span>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
            <input
              type="text"
              className="w-full p-2 mt-1 text-xs"
              placeholder="Masukkan vouchermu disini..."
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
              disabled={isVoucherTrue}
            />
            <button
              ref={buttonVoucher}
              className="rounded bg-cyan-600 px-2 py-1 text-white disabled:bg-cyan-200"
              onClick={(e) => {
                handleVoucher(e);
              }}
            >
              Apply
            </button>
          </div>
          {isVoucherTrue ? (
            <div className="text-xs">
              Voucher berhasil dipasang dengan kode {voucher.toUpperCase()}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="total border-t mx-3 flex-[2]">
        <div className="flex justify-between p-2 my-3 bg-gray-200 rounded wrapper">
          <span>Total</span>
          <CurrencyFormat
            value={totalPrice}
            thousandSeparator
            prefix="Rp "
            displayType={"text"}
            className="font-semibold text-cyan-700"
          />
        </div>
        <div className="flex flex-row gap-1">
          <button
            className="w-full p-2 text-xs max-w-[100px] text-white rounded bg-red-400"
            onClick={handleReset}
          >
            Reset
          </button>
          <button className="w-full p-2 text-xs text-white rounded bg-cyan-600">
            Buat Pesanan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
