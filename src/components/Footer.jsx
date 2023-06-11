import sjurblue from "../assets/sjurioblue.png"

export default function Footer() {
  return (
    <footer className="my-10 p-4">
      <div className="w-full bg-violet-100 p-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
          <img src={sjurblue} alt="" className="w-[50px]" />
          <p className="font-exa text-sm font-thin uppercase">
            © sjur hassel 2023
          </p>
          <p className="text-xs">Built with React.js & TailwindCss</p>
        </div>
      </div>
    </footer>
  );
}
