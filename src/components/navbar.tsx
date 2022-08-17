import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mb-8">
      <nav className="flex justify-end my-4 py-4 flex-wrap nav-text max-w-screen-2xl">
        <div className="text-xl font-medium">
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out text-[#457B9D] hover:text-[#A8DADC]">
              About Me
            </a>
          </Link>
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#A8DADC]">
              Projects
            </a>
          </Link>
          <Link href="">
            <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#A8DADC]">
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
