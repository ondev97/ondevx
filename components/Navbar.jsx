import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className="absolute w-full z-20">
        <div className="flex justify-between items-center max-w-[1024px] mx-auto px-4 h-24 text-white">
          <Image src="/L2.png" alt="ondevx logo" width={128} height={47} />

          <ul className="flex gap-7 text-base items-center">
            <li className="">Home</li>
            <li className="">Services</li>
            <li className="">Clients</li>
            <li className="">About</li>

            <li className="bg-gradient-to-r from-[#2DABE1] to-[#2D4AE1] px-5 py-2 rounded-br-lg rounded-tl-lg rounded">
              <button>Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
