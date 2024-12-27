import { Cover } from "@/components/ui/cover";
import { Skills } from "@/components/Skills";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  const words = [
    {
      text: "Web & App",
      className:
        "bg-clip-text text-transparent text-start bg-gradient-to-b from-gray-500 via-gray-700 to-gray-900 dark:from-gray-600 dark:via-gray-400 dark:to-gray-200 text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold opacity-75",
    },
  ];

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[0.9fr_0.5fr_0.5fr] gap-6 ">
      {/* Logo Image */}
      <div className="max-w-[700px] w-[90%] mx-auto py-[30px]">
        <a href="/">
          <Image
            src="/images/Logo.png"
            width={120}
            height={80}
            className="max-h-[80px] h-full object-contain object-center "
            alt="logo"
          />
        </a>

        {/* Profile */}
        <div className="flex flex-col justify-center h-[80%] mt-[40px]">
          <span className="text-[#a9a9a9] text-[18px] font-[800] font-mono">
            Its Me{" "}
          </span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Rezki Anwar, <br />
            <TypewriterEffectSmooth words={words} />
            <Cover> Developer</Cover>.
          </h2>
          <a
            href="#"
            className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] hover:text-blue-700 transition-all ease-in-out mr-auto py-[10px] font-[800]"
          >
            Hire Me &rarr;
          </a>
          <div className="flex felx-row mt-[60px]">
            <AnimatedTooltip items={people} />
          </div>
          <p className="max-w-xl text-[1rem] text-start mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400 font-bold">
            Our Team Members
          </p>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-full h-full flex items-center hover:animate-custom-pulse  ">
        <Image
          src="/images/me.png"
          width={800}
          height={1200}
          className=" w-full max-h-[90vh] object-contain object-bottom"
          alt="me"
        />
      </div>

      {/* About Me */}
      <div className="w-[90%] mx-auto py-[50px]  flex flex-col items-center z-2 ">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-[20px]"
        >
          <a href="#contact">Hire Me</a>
        </HoverBorderGradient>
        <h2 className="bg-clip-text mt-[60px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          About Me
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start font-sans">
          A passionate Web & App Developer with a strong foundation in frontend
          technologies and a keen eye for design.{" "}
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[10px] font-sans ">
          Specializing in creating user-friendly and visually appealing web and
          mobile applications.Lets build something amazing together!
        </p>

        <Skills />
      </div>
      <BackgroundBeams />
    </div>
  );
}
