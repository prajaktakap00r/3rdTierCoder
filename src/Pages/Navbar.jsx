import logo from "../assets/leetcodeLogo.png";
export default function Navbar() {
  return (
    <header className="p-4 flex justify-between items-center bg-white h-[5rem] overflow-hidden mb-[6.3rem]">
      <div className="text-2xl pl-[6.3rem]">
        <img src={logo} className="w-[30px] h-[30px]" />
      </div>
      <nav>
        <a href="/" className="text-md pr-[6.3rem]">
          Home
        </a>
      </nav>
    </header>
  );
}
