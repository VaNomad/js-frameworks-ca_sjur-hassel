import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBack from "./ArrowBack";
// import creditcard from "../assets/creditcard.png";

export default function CheckOutForm() {
  const cart = useShoppingCartContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (fullName.trim().length < 3) {
      newErrors.fullName = "Full name must have at least 3 characters";
    } else {
      newErrors.fullName = "";
    }
    if (!validEmail(email)) {
      newErrors.email = "Invalid email address";
    } else {
      newErrors.email = "";
    }
    if (address.trim().length < 3) {
      newErrors.address = "address needs to have at least 3 characters";
    } else {
      newErrors.address = "";
    }
    if (!validPostalCode(postcode)) {
      newErrors.postcode = "address needs to have at least 3 characters";
    } else {
      newErrors.postcode = "";
    }
    if (!validPhone(phone)) {
      newErrors.phone = "must be a valid Norwegian phone number";
    } else {
      newErrors.phone = "";
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

  function onSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName,
        email,
        address,
        postcode,
        phone,
      };
      console.log(formData);
      toast.success("Your Checkout was Successful!", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "toastStyle",
      });

      // Clear form inputs
      setFullName("");
      setEmail("");
      setAddress("");
      setPostCode("");
      setPhone("");
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
          ? "Must be a valid Norwegian Postal Code"
          : "",
      }));
    } else if (id === "phone") {
      setPhone(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: !validPhone(value)
          ? "Must be a valid Norwegian phone number"
          : "",
      }));
    } 
  }

  return (
    <div className="mt-[90px] text-center">
      <div className="container mx-auto border">
        <ArrowBack />
        <div className="z-10 m-2 mx-auto max-w-[150px] rounded-full bg-black px-2 py-1 text-center text-xs font-semibold uppercase text-white xs:text-base">
          <p>Check Out</p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mx-8 mt-[80px] flex w-[600px] flex-col justify-center rounded-xl p-8 shadow-xl"
        >
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
              className="rounded-md border border-gray-300 p-2"
            />
            {errors.fullName && (
              <p className="absolute right-3 top-2 animate-pulse text-fuchsia-600">
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
              className="rounded-md border border-gray-300 p-2"
            />
            {errors.email && (
              <p className="absolute right-3 top-2 animate-pulse text-fuchsia-600">
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
              className="rounded-md border border-gray-300 p-2"
            />
            {errors.address && (
              <p className="absolute right-3 top-2 animate-pulse text-fuchsia-600">
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
              required
              className="rounded-md border border-gray-300 p-2"
            />
            {errors.postcode && (
              <p className="absolute right-3 top-2 animate-pulse text-fuchsia-600">
                {errors.postcode}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="relative flex flex-col">
            <input
              type="tel"
              id="phone"
              value={phone}
              placeholder="Phone Number"
              onChange={onInputChange}
              minLength={8}
              required
              className="resize-none rounded-md border border-gray-300 p-2"
            ></input>
            {errors.phone && (
              <p className="absolute right-3 top-2 animate-pulse text-fuchsia-600">
                {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            className="rounded-md bg-fuchsia-600 px-20 py-2 text-xl font-light uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-fuchsia-500 hover:font-bold hover:tracking-widest hover:shadow-xl"
          >
            Submit
          </button>
        </form>
        <Link to="/checkoutsuccess">
          <button
            onClick={() => cart.deleteAllFromCart()}
            className="buttonCta"
          >
            Buy
          </button>
        </Link>
        <ToastContainer theme="light" transition={Zoom} />
      </div>
    </div>
  );
}
