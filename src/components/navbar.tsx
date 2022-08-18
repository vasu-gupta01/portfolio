import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = ({ target }: MouseEvent) => {
      if (!navRef.current?.contains(target as Node)) {
        setNavOpen(false);
      }
    };

    const handleScroll = () => {
      setNavOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="mb-8 shadow-md">
      <nav className="relative flex justify-between py-5 flex-wrap nav-text max-w-screen-xl m-auto px-4">
        <div className="relative z-20 place-items-start text-2xl my-auto text-slate-900 tracking-tighter font-medium">
          <Link href="/">
            <a className="nav-title transition duration-300 ease-in-out hover:text-[#457B9D]">
              Vasu Gupta.
            </a>
          </Link>
        </div>

        <div className="flex flex-col md:hidden justify-between my-auto">
          <div className="space-y-2 mx-6" onClick={() => setNavOpen(!navOpen)}>
            <div className="block h-1 w-8 rounded bg-slate-900" />
            <div className="block h-1 w-8 rounded bg-slate-900" />
            <div className="block h-1 w-8 rounded bg-slate-900" />
          </div>

          <div
            className={`${"transition ease transform duration-300 z-10 fixed flex flex-col flex-wrap rounded-lg text-md divide-y w-full shadow-lg right-0 justify-between items-center px-4 bg-white pb-3"} ${
              navOpen ? "block translate-y-14" : "-translate-y-full opacity-0"
            }`}
            ref={navRef}
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

        <div className="text-md justify-between my-auto hidden md:block">
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
