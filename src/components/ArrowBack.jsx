import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export default function ArrowBack() {
  const navigate = useNavigate();

  return (
    <MdArrowBack
      onClick={() => navigate(-1)}
      size={45}
      className="z-10 fixed left-[-20px] top-[150px] mx-8 cursor-pointer rounded-full bg-white p-[8px] shadow-md duration-300 ease-in-out hover:p-[7px] hover:shadow-xl sm:left-0 sm:top-[160px]"
    />
  );
}