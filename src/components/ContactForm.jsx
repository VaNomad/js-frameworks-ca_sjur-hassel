import { useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBack from "./ArrowBack";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
    if (subject.trim().length < 3) {
      newErrors.subject = "Subject needs to have at least 3 characters";
    } else {
      newErrors.subject = "";
    }
    if (message.trim().length < 3) {
      newErrors.message = "Message must contain at least 3 characters";
    } else {
      newErrors.message = "";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  }

  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName,
        email,
        subject,
        message,
      };
      console.log(formData);
      toast.success("Your Message Has Been Sent!", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'toastStyle'
      });

      // Clear form inputs
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
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
    } else if (id === "subject") {
      setSubject(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: value.trim().length < 3 ? "Type at least 3 characters" : "",
      }));
    } else if (id === "message") {
      setMessage(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: value.trim().length < 3 ? "Type at least 3 characters" : "",
      }));
    }
  }

  return (
    <div className="mx-auto mt-[90px] text-center">
      <div>
        <ArrowBack />
        <form
          onSubmit={onSubmit}
          className="mx-auto flex flex-col justify-center rounded-xl p-8 sm:w-[600px] gap-2"
        >
          <div className="mb-5 rounded-full bg-violet-300 py-2 shadow-md shadow-gray-400">
            <h2 className="font-exa text-sm text-gray-600 xs:text-xl">
              Contact Us !
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

          <div className="relative flex flex-col">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Your E-mail"
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
          <div className="relative flex flex-col">
            <input
              type="text"
              id="subject"
              value={subject}
              placeholder="Message Subject"
              onChange={onInputChange}
              minLength={3}
              required
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base"
            />
            {errors.subject && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.subject}
              </p>
            )}
          </div>
          <div className="relative flex flex-col">
            <textarea
              id="message"
              value={message}
              rows={4}
              placeholder="Your Message"
              onChange={onInputChange}
              minLength={3}
              required
              className="resize-none rounded-[30px] border border-gray-300 bg-white px-4 py-2 text-xs shadow-md shadow-gray-400 xs:text-base mb-8"
            ></textarea>
            {errors.message && (
              <p className="absolute right-3 top-2 animate-pulse text-xs text-fuchsia-600 xs:text-base">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            onClick={onSubmit}
            className="buttonNormal mx-auto mb-5"
          >
            Submit
          </button>
        </form>
        <ToastContainer theme="light" transition={Zoom} />
      </div>
    </div>
  );
}
