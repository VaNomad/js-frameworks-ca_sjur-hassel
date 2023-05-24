import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search !== "") {
      fetch(`https://api.noroff.dev/api/v1/online-shop?q=${search}`)
        .then((res) => res.json())
        .then((data) => setSearchData(data));
    }
  }, [search]);

  return (
    <>
      <div className="relative w-full border border-y-black border-y-2">
        <form action="">
          <div className="flex justify-between overflow-hidden rounded bg-white shadow-sm shadow-gray-400">
            <input
              type="text"
              placeholder="Search for Items . . ."
              autoComplete="off"
              onChange={handleChange}
              value={search}
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
        <div className="absolute z-10 flex flex-col mt-2 p-2 overflow-hidden rounded bg-white">
          {searchData.map((data, index) => {
            return (
              <a href={data} key={index} className="py-2">
                {data.title}
              </a>
            );
          })}
          {/* <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
            <p className="text-sm font-medium text-gray-600">Button Ripple Effect</p>
            <p className=""></p>
          </div> */}
        </div>
      </div>
    </>
  );
}
