import { formatCurrency } from "../utils/FormatCurrency";
import { useNavigate } from "react-router-dom";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ArrowBack from "./ArrowBack";
import { SlPaypal } from "react-icons/sl";
import { FaApplePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import mastercard from "../assets/mastercard.png";
import visacard from "../assets/visacard.png";
import visaverified from "../assets/visaverified.png";
import verisign from "../assets/verisign.png";
import { BsTrash } from "react-icons/bs";

export default function CheckOutForm() {
  const { items, getTotalCost } = useShoppingCartContext();
  const navigate = useNavigate();
  const cart = useShoppingCartContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("")
  const [expires, setExpires] = useState("");
  const [cvc, setCvc] = useState("");

  function validateForm() {
    const newErrors = {};

    if (fullName.trim().length < 3) {
      newErrors.fullName = "Name must have at least 3 characters";
    } else {
      newErrors.fullName = "";
    }
    if (!validEmail(email)) {
      newErrors.email = "Invalid email address";
    } else {
      newErrors.email = "";
    }
    if (address.trim().length < 3) {
      newErrors.address = "Address needs to have at least 3 characters";
    } else {
      newErrors.address = "";
    }
    if (!validPostalCode(postcode)) {
      newErrors.postcode = "Postal Code must be 4 digits";
    } else {
      newErrors.postcode = "";
    }
    if (!validPhone(phone)) {
      newErrors.phone = "Phone Number must be 8 digits";
    } else {
      newErrors.phone = "";
    }
    if (nameOnCard.trim().length < 3) {
      newErrors.nameOnCard = "Name must have at least 3 characters";
    } else {
      newErrors.nameOnCard = "";
    }
    if (!validCardNumber(cardNumber)) {
      newErrors.cardNumber = "Number must be 16 digits";
    } else {
      newErrors.cardNumber = "";
    }
    if (!validExpires(expires)) {
      newErrors.expires = "Number must be 4 digits";
    } else {
      newErrors.expires = "";
    }
    if (!validCvc(cvc)) {
      newErrors.cvc = "Number must be 3 digits";
    } else {
      newErrors.cvc = "";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  }

  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validPhone(phone) {
    return /^\d{8}$/.test(phone);
  }

  function validPostalCode(postcode) {
    return /^\d{4}$/.test(postcode);
  }

  function validCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);
  }

  function validExpires(expires) {
    return /^\d{4}$/.test(expires);
  }

  function validCvc(cvc) {
    return /^\d{3}$/.test(cvc);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName,
        email,
        address,
        postcode,
        phone,
        nameOnCard,
        cardNumber,
        expires,
        cvc,
      };
      console.log(formData);

      // Clears form inputs
      setFullName("");
      setEmail("");
      setAddress("");
      setPostCode("");
      setPhone("");
      setNameOnCard("");
      setCardNumber("");
      setExpires("");
      setCvc("");
      cart.deleteAllFromCart();
      navigate("/checkoutsuccess");
    }
  }

  function onInputChange(e) {
    const { id, value } = e.target;

    if (id === "fullName") {
      setFullName(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: value.trim().length < 3 ? "Type at least 3 characters" : "",
      }));
    } else if (id === "email") {
      setEmail(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: !validEmail(value) ? "Must be a valid E-mail" : "",
      }));
    } else if (id === "address") {
      setAddress(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: value.trim().length < 10 ? "Must be a Norwegian Address" : "",
      }));
    } else if (id === "postcode") {
      setPostCode(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        postcode: !validPostalCode(value)
          ? "Must be Norwegian Postal Code"
          : "",
      }));
    } else if (id === "phone") {
      setPhone(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: !validPhone(value)
          ? "Must be a 8 digit phone number"
          : "",
      }));
    } else if (id === "nameOnCard") {
      setNameOnCard(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameOnCard: value.trim().length < 3 ? "Type at least 3 characters" : "",
      }));
    } else if (id === "cardNumber") {
      setCardNumber(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumber: value.trim().length < 16 ? "Must be a valid Card, 16 digits" : "",
      }));
    } else if (id === "expires") {
      setExpires(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        expires: value.trim().length < 4 ? "Must be a valid Date, 4 digits" : "",
      }));
    } else if (id === "cvc") {
      setCvc(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvc: value.trim().length < 3 ? "Must be a valid Code, 3 digits" : "",
      }));
    }
  }

  return (
    <div className="mx-auto mt-[90px] text-center">
      <div className="">
        <ArrowBack />
        <h1 className="z-10 mx-auto mb-3 mt-8 max-w-[160px] rounded-full bg-black px-2 py-1 text-center font-exa text-xs font-semibold uppercase text-white xs:text-base">
          <p>Check Out</p>
        </h1>
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="mx-auto flex max-w-lg items-center justify-between rounded-lg p-2 shadow-lg font-karla"
            >
              {/* Image */}
              <div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="m-1 h-[50px] w-[50px] rounded-lg object-cover shadow-md"
                />
              </div>

              {/* Title & Price */}
              <div>
                <h1 className="text-sm font-semibold">{item.title}</h1>
              </div>
              <div className="flex justify-between">
                {item.discountedPrice && item.discountedPrice < item.price ? (
                  <div>
                    <h2>{formatCurrency(item.discountedPrice)}</h2>
                    <h2 className="text-amber-600 line-through decoration-black">
                      {formatCurrency(item.price)}
                    </h2>
                  </div>
                ) : (
                  <h2 className="text-sm font-semibold">
                    {formatCurrency(item.discountedPrice)}
                  </h2>
                )}
              </div>

              {/* Trash Button */}
              <div>
                <button
                  onClick={() => cart.deleteFromCart(item.id)}
                  className="circleBtnRed"
                >
                  <BsTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 w-full">
          <h1 className="border-y-2 border-gray-400 py-2 font-karla text-xl font-bold text-gray-600">
            Total: {formatCurrency(getTotalCost())}
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="mx-auto flex flex-col justify-center rounded-xl p-8 sm:w-[600px] font-karla"
        >
          <div className="mb-2 rounded-full bg-violet-300 py-2 shadow-md shadow-gray-400">
            <h2 className="font-exa text-sm text-gray-600 xs:text-xl">
              Delivery Location
            </h2>
          </div>

          {/* Full Name */}
          <div className="relative flex flex-col">
            <input
              type="text"
              id="fullName"
              value={fullName}
              placeholder="Full Name"
              onChange={onInputChange}
              minLength={3}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            />
            {errors.fullName && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative flex flex-col">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="E-mail"
              onChange={onInputChange}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            />
            {errors.email && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.email}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="relative flex flex-col">
            <input
              type="text"
              id="address"
              value={address}
              placeholder="Address"
              onChange={onInputChange}
              minLength={10}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            />
            {errors.address && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.address}
              </p>
            )}
          </div>

          {/* Postal Code */}
          <div className="relative flex flex-col">
            <input
              type="tel"
              id="postcode"
              value={postcode}
              placeholder="Postal Code"
              onChange={onInputChange}
              minLength={4}
              maxLength={4}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            />
            {errors.postcode && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.postcode}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="relative mb-6 flex flex-col">
            <input
              type="tel"
              id="phone"
              value={phone}
              placeholder="Phone Number"
              onChange={onInputChange}
              minLength={8}
              maxLength={8}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            ></input>
            {errors.phone && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Payment Method */}
          <div className="mb-2 rounded-full bg-lime-300 py-2 shadow-md shadow-gray-400">
            <h2 className="font-exa text-sm text-gray-600 xs:text-xl">
              Payment Method
            </h2>
          </div>

          {/* Paypal */}
          <div className="relative flex flex-col">
            <div className="flex items-center justify-between rounded-full border border-gray-300 bg-white p-2 px-4 text-xs shadow-md shadow-gray-400 xs:text-base">
              <input type="radio" id="paypal" name="payment" required></input>
              <label htmlFor="paypal">Paypal</label>
              <label htmlFor="paypal">
                <SlPaypal />
              </label>
            </div>
          </div>

          {/* Apple Pay */}
          <div className="relative flex flex-col">
            <div className="flex items-center justify-between rounded-full border border-gray-300 bg-white p-2 px-4 text-xs shadow-md shadow-gray-400 xs:text-base">
              <input type="radio" id="applePay" name="payment" required></input>
              <label htmlFor="applePay">Apple Pay</label>
              <label htmlFor="applePay">
                <FaApplePay />
              </label>
            </div>
          </div>

          {/* Visa/MasterCard */}
          <div className="relative mb-8 flex flex-col">
            <div className="flex items-center justify-between rounded-full border border-gray-300 bg-white p-2 px-4 text-xs shadow-md shadow-gray-400 xs:text-base">
              <input
                type="radio"
                id="visaMaster"
                name="payment"
                required
              ></input>
              <label htmlFor="visaMaster" className="ms-5">
                Visa / MasterCard
              </label>
              <label className="flex gap-2">
                <label htmlFor="visaMaster">
                  <SiVisa />
                </label>
                <label htmlFor="visaMaster">
                  <RiMastercardFill />
                </label>
              </label>
            </div>
          </div>

          {/* Card Details */}
          <div className="mb-2 rounded-full bg-indigo-300 py-2 shadow-md shadow-gray-400">
            <h2 className="font-exa text-sm text-gray-600 xs:text-xl">
              Card Details
            </h2>
          </div>

          {/* Card Images */}
          <div className="grid grid-cols-7">
            <div className="col-span-3">
              <img src={visacard} alt="" className="" />
            </div>
            <div className="col-span-1 my-auto">
              <img src={visaverified} alt="" className="" />
              <img src={verisign} alt="" className="" />
            </div>
            <div className="col-span-3 my-auto scale-110">
              <img src={mastercard} alt="" className="" />
            </div>
          </div>

          {/* Name on Card */}
          <div className="relative flex flex-col">
            <input
              type="text"
              id="nameOnCard"
              value={nameOnCard}
              placeholder="Name on Card"
              onChange={onInputChange}
              minLength={3}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            />
            {errors.nameOnCard && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.nameOnCard}
              </p>
            )}
          </div>

          {/* Card Number */}
          <div className="relative flex flex-col">
            <input
              type="tel"
              id="cardNumber"
              value={cardNumber}
              placeholder="Card Number"
              onChange={onInputChange}
              minLength={16}
              maxLength={16}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            ></input>
            {errors.cardNumber && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.cardNumber}
              </p>
            )}
          </div>

          {/* Expires Month/Year */}
          <div className="relative flex flex-col">
            <input
              type="tel"
              id="expires"
              value={expires}
              placeholder="Card Expires Month/Year"
              onChange={onInputChange}
              minLength={4}
              maxLength={4}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            ></input>
            {errors.expires && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.expires}
              </p>
            )}
          </div>

          {/* CCV-/CVC */}
          <div className="relative mb-8 flex flex-col">
            <input
              type="tel"
              id="cvc"
              value={cvc}
              placeholder="CCV-/CVC Code"
              onChange={onInputChange}
              minLength={3}
              maxLength={3}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            ></input>
            {errors.cvc && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.cvc}
              </p>
            )}
          </div>

          {/* Checkout Button */}
          <button onClick={onSubmit} className="buttonCta mx-auto mb-8">
            Place Order
          </button>

          {/* Back To Cart Button */}
          <Link to="/cart">
            <button className="buttonNormal mx-auto">Back To Cart</button>
          </Link>
          
        </form>
      </div>
    </div>
  );
}
