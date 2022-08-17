import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="mb-8 shadow-md">
      <nav className="relative flex justify-between py-6 flex-wrap nav-text max-w-screen-2xl m-auto px-4">
        <div className="relative z-20 place-items-start text-4xl my-auto text-slate-900 tracking-tighter font-medium">
          <Link href="/">
            <a className="nav-title transition duration-300 ease-in-out hover:text-[#457B9D]">
              Vasu Gupta.
            </a>
          </Link>
        </div>

        <div className="flex flex-col md:hidden justify-between my-auto ">
          <div className="space-y-2 mx-6" onClick={() => setNavOpen(!navOpen)}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={`${"transition ease transform duration-300 fixed z-10 flex flex-col rounded-lg text-lg divide-y w-full shadow-lg right-0 justify-between items-center px-4 bg-white pb-3"} ${
              navOpen ? "block translate-y-14" : "-translate-y-full opacity-0"
            }`}
          >
            <Link href="">
              <a className="py-4 transition duration-300 ease-in-out text-[#1D3557] hover:text-[#457B9D]">
                About Me
              </a>
            </Link>
            <Link href="">
              <a className="py-4 transition duration-300 ease-in-out hover:text-[#457B9D]">
                Projects
              </a>
            </Link>
            <Link href="">
              <a className="py-4 transition duration-300 ease-in-out hover:text-[#457B9D]">
                Contact
              </a>
            </Link>
          </div>
        </div>

        <div className="text-lg justify-between my-auto hidden md:block">
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out text-[#1D3557] hover:text-[#457B9D]">
              About Me
            </a>
          </Link>
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#457B9D]">
              Projects
            </a>
          </Link>
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#457B9D]">
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
