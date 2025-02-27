import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";
import Image from "next/image";

export function Resume() {
  const data = [
    {
      title: "Education",
      content: (
        <div data-aos="fade-down-right" className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
              <Cover>Bachelor of Science in Information Technology</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">2020 - 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Study at University Pancasila, Jakarta, Indonesia.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Achievements",
      content: (
        <div data-aos="fade-up-right" className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
              <Cover>CERTFICATE OF COMPETENCE - BNSP</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">June 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              WEB DEVELOPER
            </p>
            <div className="flex gap-[10px] w-full">
              <Image
                src="/images/bnsp.jpeg"
                alt="bns"
                height="200"
                width="200"
              />
              <Image
                src="/images/bnsp2.jpeg"
                alt="bns"
                height="200"
                width="200"
              />
            </div>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
              <Cover>CERTFICATE MSIB OF GRADUATION - MSIB</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">June 2023</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              2023 Complate Front-End Engineer Career With React JS
            </p>
            <div className="flex gap-[10px] w-full">
              <Image
                src="/images/mbkm.jpg"
                alt="bns"
                height="200"
                width="200"
              />
              <Image
                src="/images/mbkm2.jpg"
                alt="bns"
                height="200"
                width="200"
              />
            </div>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
              <Cover>CERTFICATE OF COMPLETION - DIGIMIND</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">December 2022</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              DIGITAL MARKETING
            </p>
            <div className="flex gap-[10px] w-full">
              <Image
                src="/images/digi.jpg"
                alt="bns"
                height="200"
                width="200"
              />
              <Image
                src="/images/digi2.jpg"
                alt="bns"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Experience",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="w-full" id="resume">
      <Timeline data={data} />
    </div>
  );
}
