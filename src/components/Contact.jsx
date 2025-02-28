"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Cover } from "./ui/cover";
import { Vortex } from "./ui/vortex";
import { toast } from "react-toastify";
import { LoadingSpinner } from "./ui/loading-spinner";

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
          success: false,
        });
        toast.error("Please fill all the fields!", {
          position: "top-right",
        });
        return;
      }
      setLoadingMessage({
        loading: true,
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
        toast.success("Always at the bottom.", {
          position: "top-center",
        });
      } else {
        setLoadingMessage({
          loading: false,
          success: false,
        });
        toast.error("Failed to send message!", {
          position: "top-center",
        });
      }
    } catch (error) {
      setLoadingMessage({
        loading: false,
        success: false,
      });
      toast.error("Failed to send message!");
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
        <h2
          data-aos="flip-up"
          className="font-bold text-4xl text-neutral-800 dark:text-neutral-200"
        >
          Do You Have A Project. <Cover>Lets Discus</Cover>
        </h2>
        <form data-aos="zoom-in-down" className="my-8" onSubmit={handleSubmit}>
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
            className="relative p-2  w-full overflow-hidden border border-blue-800 bg-blue-600 text-white shadow-2xl rounded transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-blue-800 hover:before:w-2/4 hover:before:bg-blue-800 hover:after:w-2/4 hover:after:bg-blue-800"
            type="submit"
            disabled={loadingMessage.loading}
          >
            <span className="relative z-10">
              {loadingMessage.loading ? <LoadingSpinner /> : "Send Message"}
              <BottomGradient />
            </span>
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
