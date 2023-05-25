import { useState } from "react"
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
 

  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <>
      {/* Search Bar */}
      <div className="relative w-full border border-y-black border-y-2">
        <div className="flex justify-between overflow-hidden rounded bg-white shadow-sm shadow-gray-400">
          <input
            type="text"
            placeholder="Search for Items . . ."
            autoComplete="off"
            onChange={handleChange}
            value={search}
            className="block w-full flex-1 py-2 px-3 focus:outline-none"
          />
          {/* Search & Close Buttons */}
          <div className="flex">
            {search === "" ? (
              <div
                className="m-1 p-2 cursor-pointer items-center rounded bg-green-600 hover:bg-green-500
               hover:scale-105 transition-all duration-200"
              >
                <BsSearch size={25} color="white" />
              </div>
            ) : (
              <div
                className="m-1 p-2 inline-flex cursor-pointer items-center rounded bg-fuchsia-600 hover:bg-fuchsia-400
               hover:scale-105 transition-all duration-200"
              >
                <IoMdClose size={25} color="white" onClick={handleClose} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}