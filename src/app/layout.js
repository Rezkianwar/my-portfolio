"use client";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Durasi animasi 1 detik
      easing: "ease-in-out", // Animasi dengan easing yang mulus
      offset: 200, // Elemen mulai teranimasi setelah 200px di bawah jendela tampilan
      delay: 0, // Animasi dimulai tanpa penundaan
      once: true, // Animasi hanya dipicu sekali
      mirror: false, // Animasi hanya sekali saat elemen pertama kali masuk
      anchorPlacement: "top-bottom", // Animasi dipicu ketika bagian atas elemen mencapai bagian bawah viewport
    });
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
