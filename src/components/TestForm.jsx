/* eslint-disable no-undef */

function TestForm() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <form className="flex h-1/2 w-1/2 flex-col justify-center">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Your full Name"
          minLength={3}
          required
          className="mb-4 rounded-md p-2"
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Your E-mail"
          required
          className="mb-4 rounded-md p-2"
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Message Subject"
          minLength={3}
          required
          className="mb-4 rounded-md p-2"
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Your Message"
          minLength={3}
          required
          className="mb-4 rounded-md p-2"
        ></textarea>
        <button type="submit" className="rounded-md bg-fuchsia-600 px-20 py-2 text-xl font-light uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-fuchsia-500 hover:font-bold hover:tracking-widest hover:shadow-xl">
          Submit
        </button>
      </form>
    </div>
  );
}
export default TestForm;
