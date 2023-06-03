// import ContactForm from "../constants/url"

export default function Contact() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center text-9xl font-bold text-black">
        <div className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 pb-5 pt-4 shadow-xl shadow-gray-400">
          <div className="rounded-xl bg-gradient-to-r from-fuchsia-700 to-violet-600 p-6 text-white shadow-md shadow-black">
            <div className="rounded-xl p-6 shadow-inner shadow-gray-900">
              <h1 className="from-3% to-98% bg-gradient-to-b from-fuchsia-600 via-amber-400 via-40% to-fuchsia-500 bg-clip-text text-transparent">
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
    </div>
  );
}