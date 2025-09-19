import logo from "../assets/FinalName.png";

function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* <h1 className="text-3xl font-bold text-green-700">Travora</h1> */}
        <img src={logo}  alt="Travora" className="h-18 w-32"/>
        <nav className="space-x-6">
          <a href="/" className="hover:text-violet-600 font-medium">
            Home
          </a>
          <a href="/About" className="hover:text-violet-600 font-medium">
            About
          </a>
          <a href="/Dashboard" className="hover:text-violet-600 font-medium">
            Dashboard
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
