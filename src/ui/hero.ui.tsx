import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

function srcset(image: string, size: number, rows = 2, cols = 2) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function Hero() {
  return (
    <>
      <Image
        alt="Con"
        src={"/_images/container.png"}
        height={1200}
        width={1200}
        className={"w-full hidden lg:block"}
      />
      <Image
        alt="Con"
        src={"/_images/container.png"}
        height={1200}
        width={1200}
        className={"w-full lg:hidden"}
      />
    </>
  );
}

const itemData = [
  {
    img: "/_images/product_0.jpeg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/_images/product_0.jpeg",
    title: "Burger",
  },
  {
    img: "/_images/product_0.jpeg",
    title: "Camera",
  },
];
