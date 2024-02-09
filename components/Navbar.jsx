import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="absolute w-full z-20">
        <div className="flex justify-center md:justify-between items-center max-w-[1024px] mx-auto px-4 h-24 text-white">
          <Image src="/L2.png" alt="ondevx logo" width={128} height={47} />

          <ul className="hidden md:flex gap-7 text-base items-center">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="#services">Our Services</Link>
            </li>
            <li className="">
              <Link href="#projects">Our Projects</Link>
            </li>
            <li className="">
              <Link href="#whyChoose">About</Link>
            </li>

            <li className="bg-gradient-to-r from-[#2DABE1] to-[#2D4AE1] px-5 py-2 rounded-br-lg rounded-tl-lg rounded">
              <Link href="#contact-us">
                <button>Contact Us</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
