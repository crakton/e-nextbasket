"use client";
import * as React from "react";
import { Container } from "@mui/material";

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
    <Container className="py-10 h-full">
      <div className="h-fit grid grid-cols-5 gap-3">
        <div className="col-span-full md:col-span-2">
          <div className="w-full h-[50vh] md:h-full bg-[url(/_images/product_0.jpeg)] bg-bottom bg-cover p-3">
            <h4 className="text-future capitalize font-semibold">5 items</h4>
            <h1 className="uppercase text-misty text-2xl font-bold">
              Furniture
            </h1>
            <button className="text-misty text-sm font-bold">Learn More</button>
          </div>
        </div>
        <div className="col-span-full h-fit md:col-span-3">
          <div className="w-full h-[50vh] mb-3 bg-[url(/_images/product_1.jpeg)] bg-[100%_50%] bg-cover p-3">
            <h4 className="text-future capitalize font-semibold">5 items</h4>
            <h1 className="uppercase text-misty text-2xl font-bold">
              Furniture
            </h1>
            <button className="text-misty text-sm font-bold">Learn More</button>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full h-[50vh] lg:h-[45vh]">
            <div className="col-span-full md:col-span-1">
              <div className="w-full h-full  bg-[url(/_images/product_2.jpeg)] bg-bottom bg-cover p-3">
                <h4 className="text-future capitalize font-semibold">
                  5 items
                </h4>
                <h1 className="uppercase text-misty text-2xl font-bold">
                  Furniture
                </h1>
                <button className="text-misty text-sm font-bold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-span-full md:col-span-1">
              <div className="w-full h-full  bg-[url(/_images/product_3.jpeg)] bg-bottom bg-cover p-3">
                <h4 className="text-future capitalize font-semibold">
                  5 items
                </h4>
                <h1 className="uppercase text-misty text-2xl font-bold">
                  Furniture
                </h1>
                <button className="text-misty text-sm font-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
