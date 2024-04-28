import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/FFT.png";
import git from "../../../public/git.svg";
import "../../app/globals.css";
import { CiLinkedin } from "react-icons/ci";

export default function header() {
  return (
    <div className="container">
      <nav className="h-[170px] border-b  border-gray-700 flex items-center text-white">
        <span className="flex items-center ml-[20px] gap-2 text-[32px]">
          <Image className="w-[70px]  h-[40px]" src={logo} alt="Not found" />
          <h1>Sherzod</h1>
        </span>
        <ul className="flex items-center mx-auto">
          <li className="ml-[300px]  text-[24px]">
            <Link className="focus:text-[#12F7D6]" href="/">
              Home
            </Link>
          </li>
          <li className="ml-[32px]  text-[24px]">
            <Link className="focus:text-[#12F7D6]" href="/contact">
              Contact
            </Link>
          </li>
          <input
            className="ml-[64px] text-black px-4 h-[32px] w-[190px] rounded-[24px] outline-none  "
            type="search"
            placeholder="Search"
          />
          <div className="flex items-center gap-8 ml-16">
            <a href="https://www.linkedin.com/in/sherzod-sultonov-a189a4293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <li className="flex items-center gap-2">
                <CiLinkedin className="text-[#12F7D6] text-[22px]" />
                Linkedin
              </li>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}
