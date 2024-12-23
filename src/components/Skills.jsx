"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Skills() {
  return (
    <div className="flex flex-col mt-[50px] justify-start items-center">
      <h3 className="text-xl mb-[100px] md:mb-[-70px] font-bold text-neutral-200">
        Skills
      </h3>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </div>
  );
}

const Skeleton = () => {
  const scale = 1.5;

  useEffect(() => {
    const transform = [
      "translateY(0px)",
      "translateY(-4px)",
      "translateY(0px)",
    ];
    const sequence = [
      [
        ".circle-1",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-2",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-3",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-4",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-5",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
    ];

    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, [scale]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex flex-col items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="circle-1">
          <JavaScriptLogo className="h-8 w-8 " />
        </Container>
        <Container className="h-14 w-14 circle-2">
          <ReactLogo className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-10 w-10 circle-3">
          <NextLogo className="h-6 w-4 dark:text-white" />
        </Container>
        <Container className="h-8 w-8 circle-4">
          <LaravelLogo className="h-6 w-4 " />
        </Container>
        <Container className="h-6 w-6 circle-5">
          <FlutterLogo className="h-6 w-4 " />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>

      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2 p-2">
        <Container className="h-6 w-6 circle-1">
          <WordpressLogo className="h-6 w-4 " />
        </Container>
        <Container className="h-8 w-8 circle-2">
          <MongoDbLogo className="h-6 w-4 dark:text-white" />
        </Container>
        <Container className="h-10 w-10 circle-3">
          <FigmaLogo className="h-6 w-4 dark:text-white" />
        </Container>
        <Container className="h-14 w-14 circle-4">
          <CssLogo className="h-8 w-8 " />
        </Container>
        <Container className="circle-5">
          <HtmlLogo className="h-8 w-8 " />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const [styles, setStyles] = useState([]);
  useEffect(() => {
    const generateStyles = () => {
      return [...Array(12)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
        scale: [1, 1.2, 0],
      }));
    };
    setStyles(generateStyles());
  }, []);
  return (
    <div className="absolute inset-0">
      {" "}
      {styles.map((style, i) => (
        <motion.span
          key={`star-${i}`}
          animate={style}
          transition={{
            duration: Math.random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}{" "}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.09)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const NextLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/nextjs.svg"
        alt="Next.js Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};

export const LaravelLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/laravel.svg"
        alt="laravel Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};

export const JavaScriptLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/js.svg"
        alt="js Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};
export const FlutterLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/flutter.svg"
        alt="flutter Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};

export const ReactLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/react.svg"
        alt="react Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};

export const HtmlLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/html.svg"
        alt="html Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};
export const CssLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/css-3.svg"
        alt="css Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};
export const FigmaLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/Figma.svg"
        alt="Figma Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};
export const MongoDbLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/mongodb.svg"
        alt="MongoDb Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};
export const WordpressLogo = ({ className }) => {
  return (
    <div>
      <Image
        src="/images/wordpress.svg"
        alt="Wordpress Logo"
        width={128}
        height={28}
        className={className}
      />
    </div>
  );
};
