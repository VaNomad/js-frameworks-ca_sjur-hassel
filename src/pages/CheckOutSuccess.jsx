import { Link } from "react-router-dom";
import box from "../assets/box.png";
import deliverytruck from "../assets/deliverytruck.png";
import checkmark from "../assets/checkmark.png"

export default function CheckOutSuccess() {
  return (
    <div className="mt-[80px] flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 shadow-xl">
        <div className="m-4 rounded-lg bg-white px-8 py-2 text-center font-semibold uppercase shadow-xl">
          <h1>Your Order Is Confirmed!</h1>
        </div>
        <div className="relative">
          <img
            src={checkmark}
            alt="Green checkmark"
            className="absolute left-0 right-0 m-auto w-[70px]"
          />
          <img src={box} alt="An open cardboard box" className="w-[200px]" />
        </div>
        <div>
          <div className="mx-4 mb-4 rounded-lg bg-white p-2 text-sm shadow-xl">
            <p className="text-base text-center font-semibold">
              Your payment has been received!
            </p>
          </div>
          <div className="mx-4 mt-4 rounded-lg bg-white p-2 text-sm shadow-xl">
            <p className="text-lg text-center font-semibold">
              Thank you for your order!
            </p>
          </div>
        </div>
        <div>
          <img src={deliverytruck} alt="Red delivery truck" className="w-[200px]"/>
        </div>
        <div className="mx-4 mb-4 rounded-lg bg-white p-2 text-sm font-semibold text-center shadow-xl">
          <h2>
            You will recieve notice in the App when your item has been shipped!
          </h2>
        </div>
        <Link to={"/"} className="mb-4 shadow-xl">
          <button className="rounded-md border border-gray-300 bg-lime-400 px-10 py-2 text-base uppercase tracking-wide transition-all duration-200 ease-in-out hover:bg-lime-300 hover:font-bold hover:shadow-xl md:w-[500px]">
            Back to Shop
          </button>
        </Link>
      </div>
    </div>
  );
}
