
import { useEffect, useState } from "react";
import { Search, Moon, Sun, Globe, UserRound, Menu, X,} from "lucide-react";
import {  Link } from "react-router-dom";

const Navbarcontent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  const navLinks = [
    { name: "Homes", link: "/homes" },
    { name: "Owners", link: "/ListRental" },
    { name: "How it works", link: "/how-it-works" },
    { name: "Complaints", link: "/complaints" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white/10  bg-white text-black dark:bg-[#141414] dark:text-white  backdrop-blur-2xl text-black">
        <nav className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center px-5 sm:px-8 lg:px-10">

         
          <Link to={"/"} className="mr-8 text-[22px] font-black tracking-[-0.05em] sm:text-[25px]">APTENZA</Link>
          
          <div className="hidden items-center lg:flex">
            {navLinks.map((link) => (

              <Link key={link} to={link.link}  className="px-4 py-2 text-[14px] font-medium transition-colors duration-200 hover:text-neutral-500">
                {link.name}
              
              </Link>
              
            ))}
          </div>

          <div className="ml-auto hidden items-center  gap-1 lg:flex">

           
            <div className="flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Search size={17} className="mr-2 text-white" />

              <input
                type="text"
                placeholder="Search"
                className="lg:w-55 xl:w-76 bg-transparent text-sm text-white outline-none placeholder:text-white/70"
              />
            </div>

           
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex  h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100  cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={17} strokeWidth={1.8} />
              ) : (
                <Moon size={17} strokeWidth={1.8} />
              )}
            </button>

           


            <Link to={"/signin"}
            className="ml-2 flex items-center gap-2 rounded-full border border-black px-4 py-2 text-[14px] cursor-pointer font-medium transition duration-200 hover:bg-black hover:text-white"
             >
            <UserRound size={15} />
              Sign in
            </Link>
           
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full lg:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

      
        <div
          className={`overflow-hidden border-t border-neutral-100 bg-white transition-all duration-300 lg:hidden ${menuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-5 py-4 sm:px-8">

          
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-neutral-100 py-4 text-[16px] font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

           
            <div className="flex items-center gap-2 py-5">

              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 cursor-pointer">
                <Search size={18} />
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 cursor-pointer"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

             

              <a
                href="#signin"
                onClick={() => setMenuOpen(false)}
                className="ml-auto flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
              >
                <UserRound size={15} />
                Sign in
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[72px]" />
    </>
  );
};

export default Navbarcontent;

