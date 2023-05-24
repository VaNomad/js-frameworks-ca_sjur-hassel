import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <>
      <div className="relative w-full border border-y-black border-y-2">
        <form action="">
          <div className="flex justify-between overflow-hidden rounded bg-white shadow-sm shadow-gray-400">
            <input
              type="text"
              className="block w-full flex-1 py-2 px-3 focus:outline-none"
            />
            <span
              className="m-1  p-2 inline-flex cursor-pointer items-center rounded bg-green-600 hover:bg-fuchsia-600
             hover:scale-105 transition-all duration-200"
            >
              <BsSearch size={25} color="white" />
            </span>
          </div>
        </form>
        <div className="absolute mt-2 w-full overflow-hidden rounded bg-white">
          {/* <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
            <p className="text-sm font-medium text-gray-600">Button Ripple Effect</p>
            <p className=""></p>
          </div> */}
        </div>
      </div>
    </>
  );
}