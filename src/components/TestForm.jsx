

export default function TestForm() {
  return (
    <div className="h-screen w-full">
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Your full Name"
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Your E-mail"
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Message Subject"
        />
        <label htmlFor="message">Message</label>
        <textarea
          type="text-area"
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
