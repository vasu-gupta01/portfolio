import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500 transition-all"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900 transition-all"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const handleShow = () => {
    const currentScrollY = window.scrollY;

    setShow(prevScrollY > currentScrollY || currentScrollY < 10);

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
      className={`${"fixed mb-8 shadow-md w-full bg-gray-100/30 backdrop-blur-md dark:bg-[#00303D]/30 z-20 transition-all ease-in-out duration-150"} ${
        show ? "" : "-translate-y-20 opacity-0"
      }`}
    >
      <nav className="flex justify-between py-5 flex-wrap nav-text max-w-screen-2xl m-auto px-4 font-bold">
        <div className="relative z-20 place-items-start text-3xl my-auto dark:text-gray-50 tracking-tighter font-semibold">
          <Link href="/">
            <a className="nav-title transition duration-150 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]">
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
            <div className="block h-1 w-8 rounded dark:bg-gray-100" />
            <div className="block h-1 w-8 rounded dark:bg-gray-100" />
            <div className="block h-1 w-8 rounded dark:bg-gray-100" />
          </div>

          <div
            className={`${"transition ease transform duration-300 fixed flex flex-col flex-wrap rounded-lg text-md tracking-wider font-medium divide-y w-full shadow-lg right-0 justify-between items-center px-4 dark:bg-[#00303D] dark:text-gray-100 pb-3"} ${
              navOpen ? "block translate-y-12" : "-translate-y-full opacity-0"
            }`}
          >
            <Link href="">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                About Me
              </a>
            </Link>
            <Link href="#projects-section">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                Projects
              </a>
            </Link>
            <Link href="/PunarVasuGupta-Resume2022.pdf">
              <a
                target="_blank"
                rel="noreferrer"
                className="py-4 text-[#A4DF90] transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>

        <div className="text-md md:flex flex-row font-medium items-center dark:text-gray-100 justify-between my-auto hidden tracking-widest">
          <div>
            <Link href="">
              <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]">
                About Me
              </a>
            </Link>
          </div>
          <div>
            <Link href="#projects-section">
              <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]">
                Projects
              </a>
            </Link>
          </div>
          <div>
            <Link href="/PunarVasuGupta-Resume2022.pdf">
              <a
                target="_blank"
                rel="noreferrer"
                className="mx-6 nav-link dark:text-[#A4DF90] transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
              >
                Resume
              </a>
            </Link>
          </div>
          <div className="mx-6">
            {currentTheme === "dark" ? (
              <SunIcon
                className="w-8 h-8 text-yellow-500 transition-all hover:text-yellow-300"
                role="button"
                onClick={() => setTheme("light")}
              />
            ) : (
              <MoonIcon
                className="w-8 h-8 text-gray-900 transition-all hover:text-gray-500"
                role="button"
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
