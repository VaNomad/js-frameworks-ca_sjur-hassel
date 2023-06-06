import ArrowBack from "../components/ArrowBack";

export default function Four04() {
  return (
    <div className="flex h-screen items-center justify-center text-9xl font-bold text-black">
      <ArrowBack />
      <div className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 pb-5 pt-4 shadow-xl shadow-gray-400">
        <div className="rounded-xl bg-gradient-to-r from-fuchsia-700 to-violet-600 px-6 text-white shadow-md shadow-black">
          <h1 className="p-4 text-sm font-light text-center">
            I am afraid there is a connection flaw here!
          </h1>
          <div className="rounded-xl p-6 shadow-inner shadow-gray-900">
            <h1 className="from-3% to-98% bg-gradient-to-b from-fuchsia-600 via-amber-400 via-40% to-fuchsia-500 bg-clip-text text-transparent">
              404
            </h1>
          </div>
          <h2 className="p-4 text-sm font-light text-center">Please go back and try again...</h2>
        </div>
      </div>
    </div>
  );
}