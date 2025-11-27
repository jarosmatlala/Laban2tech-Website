import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

type Cart = {
  title: string;
  paragraph: string;
  image: StaticImageData;
  width?: string;
  height?: string;
  onClick?: () => void;
  textColor?: string;
  buttonText?: string;
  buttonAction?: () => void;
};

export default function Index({
  title,
  paragraph,
  image,
  onClick,
  textColor = "gray-600",
  buttonText = "Learn More",
  buttonAction,
}: Cart) {

 // If onClick is provided (like for video), use that, otherwise use buttonAction
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click from firing
    if (buttonAction) {
      buttonAction();
    } else if (onClick) {
      onClick();
    }
  };


  return (
    // ✨ Added "group" so we can target hover states inside this component
    <div
      className="rounded-md overflow-hidden relative cursor-pointer hover:shadow-lg transition group"
      onClick={onClick}
    >
      {/* Image Wrapper */}
      {/* ✨ Added overflow-hidden so the zoomed image doesn’t spill outside the card */}
      <div className="w-full relative overflow-hidden">
        <Image
          alt={title}
          src={image}
          // ✨ Added transform, transition, and scale effect on hover
          className="w-full h-64 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-110"
        />
        {onClick && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5L19.5 12 5.25 5.25z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h5 className={`text-4xl mb-2 text-${textColor}`}>{title}</h5>
        <p className={`text-${textColor}`}>{paragraph}</p>

 {/* Button */}
        <Button 
          onClick={handleButtonClick}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white"
        >
          {buttonText}
        </Button>


      </div>
    </div>
  );
}
