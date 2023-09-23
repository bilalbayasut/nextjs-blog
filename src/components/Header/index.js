import Link from "next/link";
import Logo from "./Logo";
import {
  XIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SunIcon,
} from "./Icons";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between>">
      <Logo className="hover:scale-105 transition-all ease duration-200" />
      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      {/* <div>
        <a
          href="https://linkedin.com/bilalbayasut"
          className="inline-block w-6 h-6 mr-4"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://x.com/bilal-bayasut"
          className="inline-block w-6 h-6 mr-4"
          target="_blank"
        >
          <XIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://github.com/bilal-bayasut"
          className="inline-block w-6 h-6 mr-4"
          target="_blank"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://instagram.com/bilal-bayasut"
          className="inline-block w-6 h-6 mr-4"
          target="_blank"
        >
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div> */}
    </header>
  );
};

export default Header;
