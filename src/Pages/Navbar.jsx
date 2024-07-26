import logo from "../assets/leetcodeLogo.png";
export default function Navbar() {
  return (
    <header className="p-4 px-20 flex justify-between items-center bg-white h-100 overflow-hidden">
      <div className="text-2xl">
        <img src={logo} className="w-5 h-5" />
      </div>
      <nav>
        <a href="/" className="text-[0.7rem] pr-[6.3rem]">
          Home
        </a>
      </nav>
    </header>
  );
}
