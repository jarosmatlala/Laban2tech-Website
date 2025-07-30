import Image, { StaticImageData } from "next/image";
import React from "react";

type Cart = {
  title: string;
  paragraph: string;
  image: StaticImageData;
  width?: string;
  height?: string;
  onClick?: () => void;
  textColor?: string;
};
export default function Index({ title, paragraph, image, onClick, textColor = "gray-600" }: Cart) {
  return (
    <div className="rounded-md overflow-hidden relative cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
      >

      <div className="w-full relative">
        <Image alt="" src={image} className={`w-full h-64 object-cover rounded-md`} />
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
      <div className="p-4">
        <h5 className={`text-4xl mb-2 text-${textColor}`}>{title}</h5>
        <p className={`text-${textColor}`}>{paragraph}</p>
      </div>
    </div>
  );
}
