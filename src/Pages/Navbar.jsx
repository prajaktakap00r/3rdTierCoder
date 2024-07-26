import logo from "../assets/leetcodeLogo.png";
export default function Navbar() {
  return (
    <header className="p-4 flex justify-between items-center bg-white h-[4rem] overflow-hidden">
      <div className="text-2xl">
        <img src={logo} className="w-10 h-10" />
      </div>
      <nav>
        <a href="/" className="text-lg">
          Home
        </a>
      </nav>
    </header>
  );
}
