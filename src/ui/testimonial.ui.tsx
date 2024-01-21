"use client";
import { image_list } from "@/constants/image-list.contant";
import { ITestimony } from "@/interfaces";
import {
  Avatar,
  Box,
  ImageList,
  ImageListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { IoIosStar } from "react-icons/io";
import { IoStar } from "react-icons/io5";

export const Testimonials = () => {
  return (
    <Box className={"grid grid-cols-2 gap-1 h-fit  py-10 px-10 lg:px-24"}>
      <div className="col-span-full md:col-span-1 justify-center flex flex-col items-center gap-5">
        <h4 className="text-misty text-xl  font-semibold">
          What they say about us
        </h4>
        <Testimony
          comment="Slate helps you see how many more days you need to work to reach your financial goal."
          imgSrc="/_images/user.png"
          name="Regina Miles"
          rating={4}
          role="Designer"
        />
      </div>
      <ImageList cols={3} className="col-span-full md:col-span-1">
        {image_list.map((img) => (
          <ImageListItem key={img}>
            <Image
              src={img}
              width={100}
              height={100}
              alt="Images_"
              className="w-56"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export const Testimony: FC<ITestimony> = ({
  comment,
  imgSrc,
  name,
  role,
  rating,
}) => {
  return (
    <Stack spacing={3} className="justify-center items-center">
      <Avatar sx={{ width: 70, height: 70 }} src={imgSrc} alt={"User_Avatar"} />
      <Rating name="simple-controlled" value={rating} />
      <p className="text-mist-dark text-xs">{comment}</p>
      <Stack>
        <p className="text-future text-md">{name}</p>
        <p className="text-misty">{role}</p>
      </Stack>
    </Stack>
  );
};
