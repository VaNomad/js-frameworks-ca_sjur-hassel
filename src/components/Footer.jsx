// import sjurblue from "../assets/sjurioblue.png"
import sjuriowhite from "../assets/sjuriowhite.png"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/cart") return null;
  return (
    <footer className="my-10 p-4 font-karla text-sm">
      <div className="w-full rounded-xl bg-violet-500 p-5 text-white">
        <div className="flex flex-col items-center justify-around gap-3 md:flex-row md:gap-8">
          <p className="font-exa">© Sjur Hassel 2023</p>
          <Link to={"https://github.com/VaNomad"} target="_blank">
            <AiOutlineGithub size={20} />
          </Link>
          <img src={sjuriowhite} alt="" className="w-[50px]" />
          <Link to={"https://www.linkedin.com/in/sjurhassel/"} target="_blank">
            <AiOutlineLinkedin size={20} />
          </Link>
          <p>Built with React.js & TailwindCss</p>
        </div>
      </div>
    </footer>
  );
}
