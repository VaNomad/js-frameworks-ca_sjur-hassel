import { useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBack from "./ArrowBack";

export default function ContactForm() {
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
    if (postcode.trim().length < 3) {
      newErrors.address = "address needs to have at least 3 characters";
    } else {
      newErrors.address = "";
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
    return "^[A-Z0-9\\-]{5,8}$".test(phone);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName,
        email,
        address,
        phone,
      };
      console.log(formData);
      toast.success("Your phone Has Been Sent!", {
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
        email: !validEmail(value) ? "Invalid email address" : "",
      }));
    } else if (id === "address") {
      setAddress(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: value.trim().length < 3 ? "Type at least 3 characters" : "",
      }));
    } else if (id === "phone") {
      setPhone(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: value.trim().length < 3 ? "Type at least 3 characters" : "",
      }));
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <ArrowBack />
      <form
        onSubmit={onSubmit}
        className="mx-8 mt-[80px] flex w-[600px] flex-col justify-center rounded-xl p-8 shadow-xl"
      >
        <div className="flex h-[100px] flex-col">
          <label htmlFor="fullName" className="text-lg font-bold text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            placeholder="Your full Name"
            onChange={onInputChange}
            minLength={3}
            required
            className="rounded-md border border-gray-300 p-2"
          />
          {errors.fullName && (
            <p className="animate-pulse text-fuchsia-600">{errors.fullName}</p>
          )}
        </div>

        <div className="flex h-[100px] flex-col">
          <label htmlFor="email" className="text-lg font-bold text-gray-600">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your E-mail"
            onChange={onInputChange}
            required
            className="rounded-md border border-gray-300 p-2"
          />
          {errors.email && (
            <p className="animate-pulse text-fuchsia-600">{errors.email}</p>
          )}
        </div>

        <div className="flex h-[100px] flex-col">
          <label htmlFor="address" className="text-lg font-bold text-gray-600">
            address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="phone address"
            onChange={onInputChange}
            minLength={3}
            required
            className="rounded-md border border-gray-300 p-2"
          />
          {errors.address && (
            <p className="animate-pulse text-fuchsia-600">{errors.address}</p>
          )}
        </div>

        <div className="flex h-[100px] flex-col">
          <label htmlFor="postcode" className="text-lg font-bold text-gray-600">
            address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="phone address"
            onChange={onInputChange}
            minLength={3}
            required
            className="rounded-md border border-gray-300 p-2"
          />
          {errors.address && (
            <p className="animate-pulse text-fuchsia-600">{errors.address}</p>
          )}
        </div>

        <div className="flex h-[180px] flex-col">
          <label htmlFor="phone" className="text-lg font-bold text-gray-600">
            phone
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            placeholder="Phone Number"
            onChange={onInputChange}
            minLength={11}
            required
            className="resize-none rounded-md border border-gray-300 p-2"
          ></input>
          {errors.phone && (
            <p className="animate-pulse text-fuchsia-600">{errors.phone}</p>
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
      <ToastContainer theme="light" transition={Zoom} />
    </div>
  );
}
