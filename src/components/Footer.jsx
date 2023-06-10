import sjurblue from "../assets/sjurioblue.png"

export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-violet-100 p-5 text-center flex flex-col justify-center">
        <div className="flex justify-center items-center gap-3">
          <img src={ sjurblue } alt="" className="w-[50px]" />
          <p className="uppercase font-thin font-exa text-sm">© sjur hassel 2023</p>
        </div>
        <div>
          <p className="text-xs">Built with React.js & TailwindCss</p>
        </div>
      </div>
    </footer>
  )
}
