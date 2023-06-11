// import sjurblue from "../assets/sjurioblue.png"
import sjuriowhite from "../assets/sjuriowhite.png"
import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai"

export default function Footer() {
  return (
    <footer className="my-10 p-4 font-karla text-sm">
      <div className="w-full rounded-xl bg-violet-500 p-5 text-white">
        <div className="flex flex-col items-center justify-around gap-3 md:flex-row md:gap-8">
          <p className="font-exa">© Sjur Hassel 2023</p>
          <AiOutlineGithub size={20} href="https://github.com/VaNomad" />
          <img src={sjuriowhite} alt="" className="w-[50px]" />
          <AiOutlineLinkedin
            size={20}
            href="https://www.linkedin.com/in/sjurhassel/"
          />
          <p>Built with React.js & TailwindCss</p>
        </div>
      </div>
    </footer>
  );
}
