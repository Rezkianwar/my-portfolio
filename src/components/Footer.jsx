import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="max-w-[100%] w-[100%] text-white mx-auto py-[10px] px-[20px] flex flex-wrap gap[10px] justify-between items-center border-t border-gray-800 ">
      <a href="/">
        <Image
          src="/images/Logo.png"
          width={120}
          height={80}
          className="max-h-[80px] h-full object-contain object-center"
          alt="logo"
        />
      </a>

      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/your-profile" // Ganti dengan link LinkedIn Anda
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/linkedin.svg" // Ganti dengan lokasi gambar LinkedIn Anda
            width={30}
            height={30}
            alt="LinkedIn"
          />
        </a>

        <a
          href="https://github.com/your-profile" // Ganti dengan link GitHub Anda
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/github.svg" // Ganti dengan lokasi gambar GitHub Anda
            width={30}
            height={30}
            alt="GitHub"
          />
        </a>

        <a
          href="https://www.instagram.com/your-profile" // Ganti dengan link Instagram Anda
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/instagram.svg" // Ganti dengan lokasi gambar Instagram Anda
            width={30}
            height={30}
            alt="Instagram"
          />
        </a>
      </div>

      <span>Going To Internet - Copyright © 2024</span>
    </div>
  );
}
