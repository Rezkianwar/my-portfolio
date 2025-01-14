"use client";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 " id="projects">
      <h2
        data-aos="fade-down-right"
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans"
      >
        Recent Projects
      </h2>
      <div>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <h1 className="font-bold text-neutral-700 dark:text-neutral-200">
                Abaout Website
              </h1>
              A hospital website is a platform that provides information about
              the health center and various management features. Features
              include online registration, employee/staff data management,
              patient data management, drug data management, patient history
              management, and patient referral letter management.
              <h1 className="font-bold text-neutral-700 dark:text-neutral-200 mt-2">
                Tools
              </h1>
              <li className="flex flex-row gap-2">
                HTML
                <Image
                  src="/images/html.svg"
                  alt="htlm logo"
                  height="30"
                  width="30"
                />
              </li>
              <li className="flex flex-row gap-2">
                CSS
                <Image
                  src="/images/css-3.svg"
                  alt="htlm logo"
                  height="30"
                  width="30"
                />
              </li>
              <li className="flex flex-row gap-2">
                Next Js
                <Image
                  src="/images/nextjs.svg"
                  alt="htlm logo"
                  height="30"
                  width="30"
                />
              </li>
              <li className="flex flex-row gap-2">
                mongoDB
                <Image
                  src="/images/mongodb.svg"
                  alt="htlm logo"
                  height="30"
                  width="30"
                />
              </li>
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />

            <Link href="https://puskesmas-silago.netlify.app">
              <button class="group relative min-h-[50px] w-40 overflow-hidden border border-blue-800 bg-white text-blue-800 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-blue-800 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-blue-800 after:duration-500 hover:text-balack hover:before:h-full hover:after:h-full rounded">
                <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-blue-800 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-blue-800 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                  View More
                </span>
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};
const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <h1 className="font-bold text-neutral-700 dark:text-neutral-200">
                Abaout Website
              </h1>
              This project is a website for a barbershop designed with a focus
              on aesthetics and responsiveness. The website allows customers to
              book online, with an attractive appearance and intuitive
              interface. Users can easily select services, view available
              schedules, and make reservations.
              <h1 className="font-bold text-neutral-700 dark:text-neutral-200 mt-2">
                Tools
              </h1>
              <li className="flex flex-row gap-2">
                HTML
                <Image
                  src="/images/html.svg"
                  alt="htlm logo"
                  height="30"
                  width="30"
                />
              </li>
              <li className="flex flex-row gap-2">
                CSS
                <Image
                  src="/images/css-3.svg"
                  alt="htlm logo"
                  height="30"
                  width="30"
                />
              </li>
              <li className="flex flex-row gap-2">
                React Js
                <Image
                  src="/images/react.svg"
                  alt="htlm logo"
                  height="30"
                  width="30"
                />
              </li>
              <li className="flex flex-row gap-2">GraphQL</li>
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />

            <Link href="https://men-barbershop.netlify.app/">
              <button class="group relative min-h-[50px] w-40 overflow-hidden border border-blue-800 bg-white text-blue-800 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-blue-800 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-blue-800 after:duration-500 hover:text-balack hover:before:h-full hover:after:h-full rounded">
                <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-blue-800 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-blue-800 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                  View More
                </span>
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};
const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Second rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />

            <Link href="">
              <button class="group relative min-h-[50px] w-40 overflow-hidden border border-blue-800 bg-white text-blue-800 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-blue-800 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-blue-800 after:duration-500 hover:text-balack hover:before:h-full hover:after:h-full rounded">
                <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-blue-800 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-blue-800 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                  View More
                </span>
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Website",
    title: "Hospital Website.",
    src: "/images/puskesmas.png",
    content: <DummyContent1 />,
  },
  {
    category: "Website",
    title: "Barbershop Website",
    src: "/images/Barbershop.png",
    content: <DummyContent2 />,
  },
  {
    category: "Website",
    title: "Launching the *******",
    src: "/images/ComingSoon.png",
    content: <DummyContent3 />,
  },
];
