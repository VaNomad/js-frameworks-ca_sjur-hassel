/* eslint-disable no-undef */

function TestForm() {
  return (
    <div>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Your full Name"
          minLength={3}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Your E-mail"
          required
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Message Subject"
          minLength={3}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Your Message"
          minLength={3}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default TestForm;
