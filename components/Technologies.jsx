import Image from "next/image";
import azureLogo from "../public/azure-logo.png";
import dockerLogo from "../public/docker-logo.png";
import awsLogo from "../public/aws-logo.png";
import phpLogo from "../public/php-logo.png";
import nextJsLogo from "../public/next.svg";
import jsLogo from "../public/js-logo.png";

function Technologies() {
  return (
    <>
      <div className="w-full bg-[#F6F9FF]">
        <div className="w-full max-w-[1024px] mx-auto py-14 flex justify-center relative">
          <div className="w-full flex justify-around flex-wrap gap-5 items-center">
            <div className="min-w-[65px] min-h-[65px] relative overflow-hidden">
              <Image
                src={dockerLogo}
                alt="docker logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="min-w-[65px] min-h-[65px] relative overflow-hidden">
              <Image
                src={jsLogo}
                alt="JS logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="min-w-[65px] min-h-[65px] relative overflow-hidden">
              <Image
                src={azureLogo}
                alt="azure logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="min-w-[65px] min-h-[65px] relative overflow-hidden">
              <Image
                src={awsLogo}
                alt="aws logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="min-w-[65px] min-h-[65px] relative overflow-hidden">
              <Image
                src={phpLogo}
                alt="php logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="min-w-[65px] min-h-[65px] relative overflow-hidden">
              <Image
                src={nextJsLogo}
                alt="nextjs logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
