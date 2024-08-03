"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import DiscordIcon from "../../../public/discord.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [discord, setDiscord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      discord: e.target.discord.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    window.alert("Your message has been sent! Thank you for contacting us.");
    window.location.reload();
    if (response.status === 200) {
      console.log("Message sent.");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
          <br></br>
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/jesperrichert">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://discord.com/users/850470027026759690">
            <Image
              src={DiscordIcon}
              alt="Discord Icon"
              className="h-10 w-10 mt-1"
            />
          </Link>
        </div>
      </div>
      <div>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
        <br></br>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name <p className="inline text-red-700">*</p>
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#121212] px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              name="Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="discord"
            >
              Discord
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#121212] px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="discord"
              type="text"
              name="Discord"
              onChange={(e) => {
                setDiscord(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email <p className="inline text-red-700">*</p>
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#121212] px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              name="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              Message <p className="inline text-red-700">*</p>
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border bg-[#121212] px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="message"
              name="Message"
              rows={5}
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-6">
            <div className="form-check">
              <div className="mb-4 flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  required
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  form="default-checkbox"
                  className="ms-2 text-sm font-medium bg-[#121212] dark:text-gray-300"
                >
                  I agree to the{" "}
                  <Link
                    className="inline text-cyan-300"
                    href={"/privacy#contact"}
                  >
                    terms and conditions
                  </Link>{" "}
                  to collect my Email and Name.{" "}
                  <p className="inline text-red-700">*</p>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
