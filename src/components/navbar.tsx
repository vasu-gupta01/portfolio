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

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleClick = () => {
    setNavOpen(false);
  };

  return (
    <div className="fixed mb-8 shadow-md w-full bg-white z-20">
      <nav className="relative flex justify-between py-5 flex-wrap nav-text max-w-screen-xl m-auto px-4">
        <div className="relative z-20 place-items-start text-3xl my-auto text-slate-900 tracking-tighter font-semibold">
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
            className={`${"transition ease transform duration-300 fixed flex flex-col flex-wrap rounded-lg text-md divide-y w-full shadow-lg right-0 justify-between items-center px-4 bg-white pb-3"} ${
              navOpen ? "block translate-y-12" : "-translate-y-full opacity-0"
            }`}
            ref={navRef}
          >
            <Link href="">
              <a
                className="py-4 transition duration-300 ease-in-out text-[#1D3557] hover:text-[#457B9D]"
                onClick={handleClick}
              >
                About Me
              </a>
            </Link>
            <Link href="#skills-section">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#457B9D]"
                onClick={handleClick}
              >
                Skills
              </a>
            </Link>
            <Link href="#projects-section">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#457B9D]"
                onClick={handleClick}
              >
                Projects
              </a>
            </Link>
            <Link href="">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#457B9D]"
                onClick={handleClick}
              >
                Contact
              </a>
            </Link>
            <Link href="/PunarVasuGupta-Resume2022.pdf">
              <a
                target="_blank"
                className="py-4 text-[#E63946] transition duration-300 ease-in-out hover:text-[#457B9D]"
                onClick={handleClick}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>

        <div className="text-md font-semibold text-gray-600 justify-between my-auto hidden md:block tracking-wide">
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out text-[#1D3557] hover:text-[#457B9D]">
              About Me
            </a>
          </Link>
          <Link href="#skills-section">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#457B9D]">
              Skills
            </a>
          </Link>
          <Link href="#projects-section">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#457B9D]">
              Projects
            </a>
          </Link>
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#457B9D]">
              Contact
            </a>
          </Link>
          <Link href="/PunarVasuGupta-Resume2022.pdf">
            <a
              target="_blank"
              className="mx-6 nav-link text-[#E63946] transition duration-300 ease-in-out hover:text-[#457B9D]"
            >
              Resume
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
