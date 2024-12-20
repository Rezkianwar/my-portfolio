"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(({ className }) => {
  const paths = [
    "M-380 -189 C-380 -189 -312 216 152 343 ",
    "M-373 -197 C-373 -197 -305 208 159 335 ",
    "M-366 -205 C-366 -205 -298 200 166 327 ",
    "M-359 -213 C-359 -213 -291 192 173 319 ",
    "M-352 -221 C-352 -221 -284 184 180 311 ",
    "M-345 -229 C-345 -229 -277 176 187 303 ",
    "M-338 -237 C-338 -237 -270 168 194 295",
    "M-331 -245 C-331 -245 -263 160 201 287",
    "M-324 -253 C-324 -253 -256 152 208 279 ",
    "M-317 -261 C-317 -261 -249 144 215 271 ",
    "M-310 -269 C-310 -269 -242 136 222 263 ",
    "M-303 -277 C-303 -277 -235 128 229 255 ",
    "M-296 -285 C-296 -285 -228 120 236 247 ",
    "M-289 -293 C-289 -293 -221 112 243 239 ",
    "M-282 -301 C-282 -301 -214 104 250 231 ",
    "M-275 -309 C-275 -309 -207 96 257 223 ",
    "M-268 -317 C-268 -317 -200 88 264 215 ",
    "M-261 -325 C-261 -325 -193 80 271 207 ",
    "M-254 -333 C-254 -333 -186 72 278 199 ",
    "M-247 -341 C-247 -341 -179 64 285 191 ",
    "M-240 -349 C-240 -349 -172 56 292 183 ",
    "M-233 -357 C-233 -357 -165 48 299 175 ",
    "M-226 -365 C-226 -365 -158 40 306 167 ",
    "M-219 -373 C-219 -373 -151 32 313 159 ",
    "M-212 -381 C-212 -381 -144 24 320 151 ",
    "M-205 -389 C-205 -389 -137 16 327 143 ",
    "M-198 -397 C-198 -397 -130 8 334 135 ",
    "M-191 -405 C-191 -405 -123 0 341 127 ",
    "M-184 -413 C-184 -413 -116 -8 348 119 ",
    "M-177 -421 C-177 -421 -109 -16 355 111 ",
    "M-170 -429 C-170 -429 -102 -24 362 103 ",
    "M-163 -437 C-163 -437 -95 -32 369 95 ",
    "M-156 -445 C-156 -445 -88 -40 376 87 ",
    "M-149 -453 C-149 -453 -81 -48 383 79 ",
    "M-142 -461 C-142 -461 -74 -56 390 71 ",
    "M-135 -469 C-135 -469 -67 -64 397 63 ",
    "M-128 -477 C-128 -477 -60 -72 404 55 ",
    "M-121 -485 C-121 -485 -53 -80 411 47 ",
    "M-114 -493 C-114 -493 -46 -88 418 39 ",
    "M-107 -501 C-107 -501 -39 -96 425 31 ",
    "M-100 -509 C-100 -509 -32 -104 432 23 ",
    "M-93 -517 C-93 -517 -25 -112 439 15 ",
    "M-86 -525 C-86 -525 -18 -120 446 7 ",
    "M-79 -533 C-79 -533 -11 -128 453 -1 ",
    "M-72 -541 C-72 -541 -4 -136 460 -9 ",
    "M-65 -549 C-65 -549 3 -144 467 -17 ",
    "M-58 -557 C-58 -557 10 -152 474 -25 ",
    "M-51 -565 C-51 -565 17 -160 481 -33 ",
    "M-44 -573 C-44 -573 24 -168 488 -41 ",
    "M-37 -581 C-37 -581 31 -176 495 -49 ",
  ];

  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center ",
        className
      )}
    >
      <svg
        className="z-0 h-full w-full pointer-events-none absolute"
        width="100%"
        height="100%"
        viewBox="0 0 10 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="url(#paint0_radial_242_278)"
          strokeOpacity="0.05"
          strokeWidth="2"
        ></path>

        {paths.map((path, index) => (
          <motion.path
            key={`path-` + index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          ></motion.path>
        ))}
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}

          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
