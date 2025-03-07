import React from "react";

function AboutPage() {
  return (
    <div
      id="about-page"
      className="about-page h-max mb-10 p-6 flex flex-col items-center"
    >
      <div className="about-heading">
        <h1 className="font-bold text-4xl">About Rapid Shortner</h1>
      </div>
      <div className="about-text">
        <p className="mt-8 text-gray-800 w-[50vw] text-xl">
          Welcome to Rapid Shortner, a fast, reliable, and open-source URL
          shortener built using the MERN stack (MongoDB, Express, React, and
          Node.js).
        </p>
        <p className="text-gray-800 w-[50vw] text-xl">
          <br /> Whether you need to share long links effortlessly or track your
          shortened URLs, this project provides a simple and efficient solution.
          <br /> This project is proudly open-source, meaning anyone can
          contribute, improve, or customize it. You can explore the source code,
          suggest enhancements, or even fork it for your own use on [GitHub
          Link].
        </p>
        <p className=" text-gray-800 w-[50vw] text-xl">
          <br /> Why Rapid Shortner?
          <br /> ✅ Easy-to-use interface <br />✅ Custom short links <br />✅
          Fast and secure redirection
          <br /> ✅ Open-source & community-driven Shorten your links today
          and experience a seamless way to manage URLs!
          🚀
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
