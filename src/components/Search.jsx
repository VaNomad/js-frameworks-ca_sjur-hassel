// Imports —————————————————————————————————————————————————————
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import ProductList from "../api/ProductList";

// Component —————————————————————————————————————————————————————
export default function Search({onSearch}) {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const navigate = useNavigate();

  // Handlers
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleClose = () => {
    setSearch("");
    setSearchData([]);
    setSelectedItem(-1);
    onSearch('');
  };

  const handleOnClick = () => {
    if (selectedItem >= 0) {
      const selectedData = searchData[selectedItem];
      navigate(`/details/${selectedData.id}`);
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div className="fixed top-[80px] z-10 w-full md:w-[520px] lg:w-[840px] border border-y-2 border-y-gray-400 md:border-none shadow-lg xs:top-[50px] md:top-[60px]">
        <div className="flex justify-between overflow-hidden rounded bg-white shadow-sm shadow-gray-400">
          <input
            type="text"
            placeholder="Search products here . . ."
            autoComplete="on"
            onChange={handleInputChange}
            value={search}
            
            className="block w-full flex-1 px-3 py-2 focus:outline-none"
          />
          {/* Search & Close Buttons */}
          <div className="flex">
            {search === "" ? (
              <div
                className="m-1 items-center p-2"
              >
                <BsSearch size={15} color="black" onClick={handleOnClick}/>
              </div>
            ) : (
              <div
                className="m-1 inline-flex cursor-pointer items-center rounded bg-fuchsia-600 p-2 transition-all
               duration-200 hover:scale-105 hover:bg-fuchsia-400"
              >
                <IoMdClose size={15} color="white" onClick={handleClose} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
