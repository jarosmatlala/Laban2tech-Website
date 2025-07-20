import Image, { StaticImageData } from "next/image";
import React from "react";

type Cart = {
  title: string;
  paragraph: string;
  image: StaticImageData;
  width?: string;
  height?: string;
  onClick?: () => void;
};
export default function Index({ title, paragraph, image, onClick }: Cart) {
  return (
    <div className="rounded-md overflow-hidden"
      onClick={onClick}>

      <div className="w-full  ">
        <Image alt="" src={image} className={`bg-black rounded-md`} />
      </div>
      <div>
        <h5 className="text-4xl mb-2">{title}</h5>
        <p className="text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
}
