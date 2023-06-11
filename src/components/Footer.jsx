// import sjurblue from "../assets/sjurioblue.png"
import sjuriowhite from "../assets/sjuriowhite.png"

export default function Footer() {
  return (
    <footer className="my-10 p-4 font-karla text-sm">
      <div className="w-full bg-violet-400 p-5 text-white rounded-xl">
        <div className="flex flex-col items-center justify-around gap-3 md:flex-row md:gap-8">
          <p className="font-exa">© Sjur Hassel 2023</p>
          <img src={sjuriowhite} alt="" className="w-[50px]" />
          <p>Built with React.js & TailwindCss</p>
        </div>
      </div>
    </footer>
  );
}
