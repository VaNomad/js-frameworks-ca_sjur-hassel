import { useState } from "react";
// import { BASE_URL } from "../constants/url";

export default function ContactForm() {
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [errors, setErrors] = useState({})

  function validateForm() {
    const errors = {};

    if (fullName.trim().length < 3) {
      errors.fullName = "Your full name must have at least 3 characters";
    }
    if (validEmail(email)) {
      errors.mail = "Invalid email address";
    }
    if (subject.trim().length < 3) {
      errors.subject = "The subject needs to have at least 3 characters"
    }
    if (message.trim().length < 3) {
      errors.message = "Your message must contain at least 3 characters"
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
  }

  function onSubmit(data) {
    if (validateForm && onsubmit) {
      alert("Success")
      console.log(data)
    }
  }

  // function onSubmit(e) {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     const body = {
  //       fullName,
  //       email,
  //       subject,
  //       message,
  //     };

  //     fetch(BASE_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error(error));
  //   }
    
  // }

  function onInputChange(e) {
    const { id, value } = e.target;

    if (id === "fullName") {
      setFullName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "subject") {
      setSubject(value);
    } else if (id === "message") {
      setMessage(value);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="flex w-2/3 flex-col justify-center rounded-xl px-8 shadow-xl"
      >
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          placeholder="Your full Name"
          onChange={onInputChange}
          minLength={3}
          required
          className="mb-4 rounded-md border border-gray-300 p-2"
        />
        {errors.fullName && <p>{errors.fullName}</p>}

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Your E-mail"
          onChange={onInputChange}
          required
          className="mb-4 rounded-md border border-gray-300 p-2"
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          placeholder="Message Subject"
          onChange={onInputChange}
          minLength={3}
          required
          className="mb-4 rounded-md border border-gray-300 p-2"
        />
        {errors.subject && <p>{errors.subject}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          placeholder="Your Message"
          onChange={onInputChange}
          minLength={3}
          required
          className="mb-4 resize-none rounded-md border border-gray-300 p-2"
        ></textarea>
        {errors.message && <p>{errors.message}</p>}

        <button
          type="submit"
          onClick={onSubmit}
          className="rounded-md bg-fuchsia-600 px-20 py-2 text-xl font-light uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-fuchsia-500 hover:font-bold hover:tracking-widest hover:shadow-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
