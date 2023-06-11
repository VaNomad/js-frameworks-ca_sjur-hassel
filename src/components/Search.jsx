import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Search({onSearch}) {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const navigate = useNavigate();

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
      <div className="fixed top-[80px] z-10 w-full xs:w-[420px] lg:w-[640px] border border-y-2 border-y-gray-400 xs:border-none xs:rounded-full shadow-lg xs:top-[60px]">
        <div className="flex justify-between overflow-hidden rounded xs:rounded-full ps-2 bg-white shadow-sm shadow-gray-400">
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
                className="m-1 inline-flex cursor-pointer items-center rounded md:rounded-full bg-violet-500 p-2 transition-all
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
