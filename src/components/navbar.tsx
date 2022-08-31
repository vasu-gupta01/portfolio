import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleShow = () => {
    const currentScrollY = window.scrollY;

    setShow(
      (prevScrollY > currentScrollY && prevScrollY - currentScrollY > 5) ||
        currentScrollY < 10
    );

    setPrevScrollY(currentScrollY);
  };

  const handleMouseDown = ({ target }: MouseEvent) => {
    if (!navRef.current?.contains(target as Node)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, [prevScrollY, handleShow, show]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown]);

  const handleClick = () => {
    setNavOpen(false);
  };

  return (
    <div
      className={`${"fixed mb-8 shadow-md w-full bg-[#00303D] z-20 transition-all ease-in-out duration-300"} ${
        show ? "" : "-translate-y-20 opacity-0"
      }`}
    >
      <nav className="relative flex justify-between py-5 flex-wrap nav-text max-w-screen-xl m-auto px-4">
        <div className="relative z-20 place-items-start text-3xl my-auto text-gray-50 tracking-tighter font-semibold">
          <Link href="/">
            <a className="nav-title transition duration-300 ease-in-out hover:text-[#5FD3C6]">
              Vasu Gupta.
            </a>
          </Link>
        </div>

        <div
          className="flex flex-col md:hidden justify-between my-auto"
          ref={navRef}
        >
          <div
            className="space-y-2 mx-6 z-20"
            onClick={() => setNavOpen(!navOpen)}
          >
            <div className="block h-1 w-8 rounded bg-gray-100" />
            <div className="block h-1 w-8 rounded bg-gray-100" />
            <div className="block h-1 w-8 rounded bg-gray-100" />
          </div>

          <div
            className={`${"transition ease transform duration-300 fixed flex flex-col flex-wrap rounded-lg text-sm tracking-wider font-semibold divide-y w-full shadow-lg right-0 justify-between items-center px-4 bg-[#00303D] text-gray-100 pb-3"} ${
              navOpen ? "block translate-y-12" : "-translate-y-full opacity-0"
            }`}
          >
            <Link href="">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                About Me
              </a>
            </Link>
            <Link href="#projects-section">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                Projects
              </a>
            </Link>
            <Link href="">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                Contact
              </a>
            </Link>
            <Link href="/PunarVasuGupta-Resume2022.pdf">
              <a
                target="_blank"
                rel="noreferrer"
                className="py-4 text-[#A4DF90] transition duration-300 ease-in-out hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>

        <div className="text-sm font-normal text-gray-100 justify-between my-auto hidden md:block tracking-widest">
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#5FD3C6]">
              About Me
            </a>
          </Link>
          <Link href="#projects-section">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#5FD3C6]">
              Projects
            </a>
          </Link>
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#5FD3C6]">
              Contact
            </a>
          </Link>
          <Link href="/PunarVasuGupta-Resume2022.pdf">
            <a
              target="_blank"
              rel="noreferrer"
              className="mx-6 nav-link text-[#A4DF90] transition duration-300 ease-in-out hover:text-[#5FD3C6]"
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
