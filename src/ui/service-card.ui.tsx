import React, { FC } from "react";
import Image from "next/image";

interface IService {
  imgSrc: string;
  title: string;
  subtitle: string;
}
export const ServiceCard: FC<IService> = ({ imgSrc, subtitle, title }) => {
  return (
    <div className="col-span-full md:col-span-1 flex flex-col gap-3 p-3 items-center">
      <Image
        height={100}
        width={100}
        className="icon-cool-icon h-16"
        alt="Icon cool icon"
        src={imgSrc}
      />
      <h4 className="text-misty text-lg font-semibold">{title}</h4>
      <p className="text-sm text-mist-dark">{subtitle}</p>
    </div>
  );
};
