import React, { useState } from "react";
import paste from "../assets/paste.png";
import KUTE from "kute.js";
import { useEffect } from "react";
function HomePage() {
  const [link, setLink] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [finalLink, setFinalLink] = useState("");
  const handleClick = async () => {
    try {
      const response = await fetch(`${import.meta.env.FRONTEND_PORT}/url`, {
        method: "POST",
        body: JSON.stringify({ url: link }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        alert("❌ Please re-enter the URL");
        throw new Error(json.error || "Something went wrong");
      }

      setShortURL(`${import.meta.env.FRONTEND_PORT}/${json.id}`);
      setLink("");
    } catch (error) {
      console.error("❌ Fetch error:", error.message);
    }
  };

  useEffect(() => {
    if (shortURL) {
      navigator.clipboard
        .writeText(shortURL)
        .then(
          () => alert("Link is copied to clipboard"),
          setFinalLink(shortURL)
        )
        .catch((err) => console.error("❌ Clipboard copy failed:", err));
    }
  }, [shortURL]);

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#wave1",
      { path: "#wave1" },
      { path: "#wave2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div
      id="home-page"
      className="home-page max-md:mb-10 h-max max-sm:h-max max-sm:w-[98vw] mb-40 font-poppins flex flex-col items-center justify-start"
    >
      <div className="home-top p-6 bg-white flex w-full max-sm:w-[98vw] max-sm:justify-center items-center justify-between">
        <div className="heading w-max">
          <h1 className="font-bold  text-4xl max-sm:text-[3vh] cursor-pointer text-blue-600">
            Rapid Shortener
          </h1>
        </div>
        <div className="links max-sm:hidden">
          <ul className=" flex flex-row gap-5">
            <a className="hover:text-sky-600    " href="#home-page">
              <li>Home</li>
            </a>
            <a className="hover:text-sky-600" href="#about-page">
              <li>About</li>
            </a>
            <a
              className="hover:text-sky-600"
              href="https://github.com/KushagraSingh1100/Link-Shortner"
              target="_blank"
            >
              <li>Source Code</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="home-links relative max-sm:w-10/12 bg-blue-50 mt-20 pt-10 rounded-2xl w-9/12 h-120 flex flex-col gap-2 justify-start items-center">
        <div className="heading z-10 text-3xl max-sm:text-3xl max-sm:text-center max-md:text-center max-sm:font-normal font-bold text-gray-700">
          <h1>Enter your long and boring link</h1>
        </div>
        <div className="link-input-top w-[100%] max-md:flex max-md:items-center max-md:gap-5 z-10 flex justify-center gap-3 max-sm:flex-col max-sm:w-[80vw] max-sm:items-center max-sm:gap-10 max-md:flex-col max-md:w-[100%] bg-blue-50 p-10 max-sm:p-3 rounded-2xl">
          <button
            onClick={async () => {
              const text = await navigator.clipboard.readText();
              setLink(text);
            }}
            className="hover:cursor-pointer hover:opacity-60 max-sm:hidden max-md:hidden"
          >
            <img className="w-8" src={paste} alt="" />
          </button>
          <input
            placeholder="Shorten your link"
            className="text-center max-sm:w-[100%] max-md:w-[100%]  font-light border-1 border-gray-400 w-xl h-14 rounded-2xl"
            value={link}
            type="text"
            onChange={(e) => {
              setLink(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          />
          <button
            onClick={() => handleClick()}
            className="hover:cursor-pointer max-sm:w-[60%] max-md:w-[60%] max-md:h-12 max-sm:h-14 max-sm:text-[4vw] hover:opacity-60 text-white bg-blue-600 w-38 rounded-4xl"
          >
            Shorten
          </button>
        </div>
        <div className="link-input-bottom relative w-full flex flex-col items-center gap-5 justify-center ">
          <div className="z-10 copied-link flex flex-row gap-1">
            <h1>Shortened Link: </h1>
            <h3>{finalLink}</h3>
          </div>
          <button
            onClick={() => {
              if (finalLink) {
                window.open(finalLink, "_blank");
              } else {
                alert("❌ No link available!");
              }
            }}
            className="z-10 hover:cursor-pointer hover:opacity-60 bg-blue-500 text-white w-48 p-5 rounded-2xl"
          >
            Redirect
          </button>
        </div>
        <svg
          id="visual"
          width="100%"
          height="auto"
          viewBox="0 20 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="absolute hidden lg:flex max-sm:bottom-88 max-sm:left-8 bottom-[-20%] left-[-0.2%]"
        >
          <g>
            <path
              id="wave1"
              d="M0 883L53.3 852.3C106.7 821.7 213.3 760.3 320 733C426.7 705.7 533.3 712.3 640 747.8C746.7 783.3 853.3 847.7 960 872.2C1066.7 896.7 1173.3 881.3 1280 881.2C1386.7 881 1493.3 896 1600 868.3C1706.7 840.7 1813.3 770.3 1866.7 735.2L1920 700L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z"
              fill="#397eff"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </g>
          <g style={{ visibility: "hidden" }}>
            <path
              id="wave2"
              d="M0 921L53.3 923.5C106.7 926 213.3 931 320 912.8C426.7 894.7 533.3 853.3 640 815C746.7 776.7 853.3 741.3 960 729.3C1066.7 717.3 1173.3 728.7 1280 738.2C1386.7 747.7 1493.3 755.3 1600 761.3C1706.7 767.3 1813.3 771.7 1866.7 773.8L1920 776L1920 1081L1866.7 1081C1813.3 1081 1706.7 1081 1600 1081C1493.3 1081 1386.7 1081 1280 1081C1173.3 1081 1066.7 1081 960 1081C853.3 1081 746.7 1081 640 1081C533.3 1081 426.7 1081 320 1081C213.3 1081 106.7 1081 53.3 1081L0 1081Z"
              fill="#397eff"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HomePage;
