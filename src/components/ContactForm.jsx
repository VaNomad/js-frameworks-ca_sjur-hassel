import { useState } from "react";
import { BASE_URL } from "../constants/url";

export default function ContactForm() {
  const [fullName, setFullName] = useState(""); // min 3 characters, required
  const [email, setEmail] = useState(""); // min 3 characters, required
  const [subject, setSubject] = useState(""); // must be valid, required
  const [message, setMessage] = useState(""); // min 3 characters, required

  function onSubmit(e) {
    e.preventDefault();
    const body = {
      fullName,
      email,
      subject,
      message,
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function onInputChange(e) {
    const { id, value } = e.target;

    if (id === "fullid") {
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
    <div>
      <form onSubmit={onSubmit} className="bg-black h-screen w-full">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          placeholder="Your full Name"
          onChange={ onInputChange }
          minLength={ 3 }
          required
         className="border border-black"/>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Your E-mail"
          onChange={ onInputChange }
          required
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          placeholder="Message Subject"
          onChange={ onInputChange }
          minLength={ 3 }
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          placeholder="Your Message"
          onChange={ onInputChange }
          minLength={ 3 }
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
