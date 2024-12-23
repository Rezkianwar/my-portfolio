"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Cover } from "./ui/cover";
import { Vortex } from "./ui/vortex";

export function Contact() {
  const [loadingMessage, setLoadingMessage] = useState({
    loading: false,
    message: "",
    success: false,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.message
      ) {
        setLoadingMessage({
          loading: false,
          message: "Please fill all the fields!",
          success: false,
        });
        return;
      }
      setLoadingMessage({
        loading: true,
        message: "Sending...",
        success: false,
      });

      const formatData = {
        name: `${formData?.firstName} ${formData?.lastName}`,
        email: formData?.email,
        message: formData?.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const res = await response.json();

      if (res?.message) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });

        setLoadingMessage({
          loading: false,
          message: res?.message,
          success: true,
        });
      } else {
        setLoadingMessage({
          loading: false,
          message: "Failed to send message!",
          success: false,
        });
      }
    } catch (error) {
      setLoadingMessage({
        loading: false,
        message: "Failed to send message!",
        success: false,
      });

      console.log("Contact form error:", error);
    }
  };

  return (
    <div
      id="contact"
      className="max-w-[800px] backdrop-blur-[18px] bg-[#11121617] z-[20] w-full mx-auto rounded-none md:rounded-2xl p-4 my-[50px] md:p-8 shadow-input text-white bg-white dark:bg-black"
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex  flex-col justify-center w-full h-full"
      >
        <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
          Do You Have A Project. <Cover>Lets Discus</Cover>
        </h2>
        {loadingMessage?.message && (
          <p
            className={`mt-[20px] text-[0.9rem] ${
              loadingMessage?.success ? "text-green-500" : "text-red-500"
            } `}
          >
            *{loadingMessage?.message}
          </p>
        )}
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstName"
                value={formData?.firstName}
                onChange={handleChange}
                placeholder="your first name"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastName"
                value={formData?.lastName}
                onChange={handleChange}
                placeholder="your last name"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              id="message"
              name="message"
              value={formData?.message}
              onChange={handleChange}
              placeholder="Write a Message..."
              className="p-[10px] rounded-[4px] outline-none resize-none h-[140px] bg-zinc-800 text-white"
            />
          </LabelInputContainer>

          <button
            className="bg-blue-900 hover:bg-blue-700 relative group/btn w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {!loadingMessage?.loading ? "Submit" : "....."}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </Vortex>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
