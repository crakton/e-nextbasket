"use client";
import { IProduct } from "@/interfaces";
import { calculateRandomDiscount } from "@/utils/get-rand-discount-util";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

export const ProductCard: FC<IProduct> = (props) => {
  const { push } = useRouter();

  return (
    <div
      onClick={() => push(`/products/${props.id}`)}
      className="flex hover:bg-mist/20 p-2 hover:cursor-pointer rounded-md flex-col gap-3 justify-center items-center"
    >
      <Image
        src={props.images[0]}
        alt="product"
        width={100}
        height={200}
        className="h-32"
      />
      <div className="gap-3">
        <h4 className="text-misty text-center text-sm">{props.title}</h4>
        <p className="text-center text-xs">{props.category}</p>
        <div className="flex text-sm justify-between items-center">
          <span className="text-mist">${props.price}</span>
          <span className="text-future">
            ${calculateRandomDiscount(props.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
