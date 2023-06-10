import { Link } from "react-router-dom";
import box from "../assets/box.png";
import deliverytruck from "../assets/deliverytruck.png";
import checkmark from "../assets/checkmark.png";

export default function CheckOutSuccess() {
  return (
    <div className="mt-[60px] flex flex-col items-center justify-center p-8 h-screen">
      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 shadow-xl">
        <div className="mx-4 mb-5 mt-14 rounded-lg bg-white px-8 py-2 text-center font-semibold uppercase shadow-xl">
          <h1>Your Order Is Confirmed!</h1>
        </div>
        <div className="relative">
          <img
            src={checkmark}
            alt="Green checkmark"
            className="absolute left-0 right-0 m-auto w-[35px]"
          />
          <img src={box} alt="An open cardboard box" className="w-[100px]" />
        </div>
        <div>
          <div className="mx-4 mb-4 rounded-lg bg-white p-2 text-sm shadow-xl">
            <p className="text-center text-base font-semibold">
              Your payment has been received!
            </p>
          </div>
          <div className="mx-4 mt-4 rounded-lg bg-white p-2 text-sm shadow-xl">
            <p className="text-center text-lg font-semibold">
              Thank you for your order!
            </p>
          </div>
        </div>
        <div>
          <img
            src={deliverytruck}
            alt="Red delivery truck"
            className="w-[100px]"
          />
        </div>
        <div className="mx-14 mb-4 rounded-lg bg-white p-2 text-center text-sm font-semibold shadow-xl">
          <h2>
            You will recieve notice in the App when your item has been shipped!
          </h2>
        </div>
        <Link to={"/"} className="flex w-full justify-center mt-5 mb-10">
          <button className="buttonNormal">Back to Shop</button>
        </Link>
      </div>
    </div>
  );
}
