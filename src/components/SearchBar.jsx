// Imports —————————————————————————————————————————————————————
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Component —————————————————————————————————————————————————————
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const navigate = useNavigate();

  // Handlers
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClose = () => {
    setSearch("");
    setSearchData([]);
    setSelectedItem(-1);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        navigate(`/details/${searchData[selectedItem].id}`);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  const handleOnClick = () => {
    navigate(`/details/${searchData[selectedItem].id}`);
  }

  // Call
  useEffect(() => {
    if (search !== "") {
      const url = `https://api.noroff.dev/api/v1/online-shop?q=${search}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setSearchData(data));
    }
  }, [search]);

  return (
    <>
      {/* Search Bar */}
      <div className="relative w-full border border-y-black border-y-2">
        <form action="">
          <div className="flex justify-between overflow-hidden rounded bg-white shadow-sm shadow-gray-400">
            <input
              type="text"
              placeholder="Search for Items . . ."
              autoComplete="on"
              onChange={handleChange}
              value={search}
              onKeyDown={handleKeyDown}
              className="block w-full flex-1 py-2 px-3 focus:outline-none"
            />
            {/* Search & Close Buttons */}
            <div className="flex">
              { search === "" ? (
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
        </form>
        {/* Search Suggestions Drop-Down */}
        <div className="absolute z-10 flex flex-col mt-2 p-2 overflow-hidden rounded bg-white">
          {searchData.map((data, index) => {
            return (
              <a
                href={data}
                key={index}
                className={
                  selectedItem === index
                    ? "search-line my-1 active"
                    : "searchline"
                }
                onClick={handleOnClick}
                // onClick={() => navigate(`/details/${data.id}`)}
              >
                {data.title}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
