/* eslint-disable no-undef */

function TestForm() {
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="flex h-1/2 w-2/3 flex-col justify-center rounded-xl px-8 shadow-xl">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Your full Name"
          minLength={3}
          required
          className="mb-4 rounded-md border border-gray-300 p-2"
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Your E-mail"
          required
          className="p-2 border mb-4 rounded-md border-gray-300"
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Message Subject"
          minLength={3}
          required
          className="p-2 border mb-4 rounded-md border-gray-300"
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Your Message"
          rows={4}
          minLength={3}
          required
          className="p-2 border mb-4 rounded-md border-gray-300 resize-none"
        ></textarea>
        <button
          type="submit"
          className="rounded-md bg-green-500 px-20 py-2 text-xl font-light uppercase tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-green-600 hover:font-bold hover:tracking-widest hover:shadow-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default TestForm;
