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
    <div className="flex h-screen items-center justify-center">
      <ArrowBack />
      <form
        onSubmit={onSubmit}
        className="flex w-[600px] flex-col justify-center rounded-xl p-8 mx-8 mt-[80px] shadow-xl"
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
          <label htmlFor="subject" className="text-lg font-bold text-gray-600">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            placeholder="Message Subject"
            onChange={onInputChange}
            minLength={3}
            required
            className="rounded-md border border-gray-300 p-2"
          />
          {errors.subject && (
            <p className="animate-pulse text-fuchsia-600">{errors.subject}</p>
          )}
        </div>

        <div className="flex h-[180px] flex-col">
          <label htmlFor="message" className="text-lg font-bold text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            rows={4}
            placeholder="Your Message"
            onChange={onInputChange}
            minLength={3}
            required
            className="resize-none rounded-md border border-gray-300 p-2"
          ></textarea>
          {errors.message && (
            <p className="animate-pulse text-fuchsia-600">{errors.message}</p>
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
