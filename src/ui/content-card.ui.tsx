import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { IoIosArrowForward, IoMdAlarm } from "react-icons/io";
import { FaChartArea } from "react-icons/fa";

interface IContentCard {
  postImg: string;
  flag: string;
  body: string;
  title: string;
  date: string;
  comment: number;
  tags: string[];
}
export const ContentCard: FC<IContentCard> = ({
  comment,
  body,
  date,
  flag,
  postImg,
  title,
  tags,
}) => {
  return (
    <div className="text-mist-dark col-span-full lg:col-span-1 p-3 cursor-pointer">
      <div className="relative">
        <Image
          className="h-44 w-full"
          src={postImg}
          alt="post_image"
          width={200}
          height={200}
        />
        <span className="absolute top-3 rounded-md left-3 uppercase bg-red-500 text-white text-xs p-1 font-bold">
          {flag}
        </span>
      </div>
      <Stack className="p-3 text-xs" direction={"row"} spacing={3}>
        {tags.map((tag, id) => (
          <p key={tag + id} className={`${id === 0 && "text-sky"} capitalize`}>
            {tag}
          </p>
        ))}
      </Stack>
      <Stack spacing={2} className="p-3">
        <h1 className="text-xl text-misty font-medium">{title}</h1>
        <Typography>
          {body.length > 100 ? body.slice(0, 100).concat("...") : body}
        </Typography>
        <div className="flex flex-col md:flex-row w-full justify-between gap-3 items-center">
          <div className="flex gap-1 items-center">
            <IoMdAlarm className="text-sky" />{" "}
            <span className="text-mist">{date}</span>
          </div>
          <div className="flex gap-1 items-center">
            <FaChartArea className="text-future" />{" "}
            <span className="text-mist">
              {comment && `${comment} comments`}
            </span>
          </div>
        </div>
      </Stack>
      <Stack
        className="p-3 items-center"
        alignContent={"center"}
        direction={"row"}
        spacing={3}
      >
        <h4>Learn More</h4>
        <IoIosArrowForward className="text-sky" />
      </Stack>
    </div>
  );
};
