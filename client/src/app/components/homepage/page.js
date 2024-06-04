"use client";
import React, { useState } from "react";
import "./banner1.css";

const options = [
  "Kafsar",
  "Table",
  "Bed",
  "Sofa",
  "Wardrobe",
  "Modular Kitchen",
  "Piling",
  "Wooden Door",
  "Flush Door",
  "Chair",
  "Mandir",
  "Window",
  "Door",
  "Counter",
  "Deewan",
  "Podium",
  "Dressing Table",
  "Shoe Rack",
  "Stool",
  "Takhta",
  'Temple'
];

const Banner1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    console.log("Navigating to", option);
    // Here, you can navigate to the respective page using Next.js routing
    switch (option) {
      case "Bed":
        window.location.href = "/pages/beddisplay";
        break;
      case "Sofa":
        window.location.href = "/pages/sofadisplay";
        break;
      case "Table":
        window.location.href = "/pages/tabledisplay";
        break;
      case "Chair":
        window.location.href = "/pages/chairdisplay";
        break;
      case "Kafsar":
        window.location.href = "/pages/kafsardisplay";
        break;
      case "Wardrobe":
        window.location.href = "/pages/wardrobedisplay";
        break;
      case "Modular Kitchen":
        window.location.href = "/pages/kitchendisplay";
        break;
      case "Piling":
        window.location.href = "/pages/pilingdisplay";
        break;
      case "Wooden Door":
        window.location.href = "/pages/doordisplay";
        break;
      case "Flush Door":
        window.location.href = "/pages/doordisplay";
        break;
      case "Mandir":
        window.location.href = "/pages/mandirdisplay";
        break;
      case "Window":
        window.location.href = "/pages/windowdisplay";
        break;
      case "Door":
        window.location.href = "/pages/doordisplay";
        break;

      case "Counter":
        window.location.href = "/pages/counterdisplay";
        break;
      case "Deewan":
        window.location.href = "/pages/deewandisplay";
        break;
      case "Podium":
        window.location.href = "/pages/podiumdisplay";
        break;
      case "Dressing Table":
        window.location.href = "/pages/dressingtabledisplay";
        break;

      case "Shoe Rack":
        window.location.href = "/pages/shoerackdisplay";
        break;
      case "Pilling":
        window.location.href = "/pages/pillingdisplay";
        break;
      case "Stool":
        window.location.href = "/pages/stooldisplay";
        break;
      case "Takhta":
        window.location.href = "/pages/takhtadisplay";
        break;

        case "Temple":
          window.location.href = "/pages/mandirdisplay";
          break;
          
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="h-screen bg-white bg-cover bg-bottom md:pl-[150px] rounded-b-[30px] flex flex-col items-start justify-center items-left smallhero_section"
        style={{
          backgroundImage: "url(/images/background.jpg)",
        }}
      >
        <div className="max-w-[668px] space-y-[54px] flex flex-col p-4 md:p-0 text-center md:text-left">
          <h1 className="font-[700] text-[36px] md:text-[64px] leading-[52px] md:leading-[85.31px] font-Playfair text-[#07484A] mt-[10rem] md:mt-0">
            Exclusive Deals of Furniture Collection
          </h1>

          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
            {searchTerm && (
              <ul>
                {filteredOptions.map((option) => (
                  <li
                    key={option}
                    style={{  backgroundColor: "#fff" }}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="font-[400] text-[18px] md:text-[24px] leading-[23px] md:leading-[32.68px] font-OpenSans text-[#fff]">
            Explore different categories. Find the best deals.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner1;
