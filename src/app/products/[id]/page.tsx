"use client";
import { getProduct } from "@/actions/products.action";
import { brands } from "@/constants/image-list.contant";
import { IProduct } from "@/interfaces";
import { addToCart } from "@/redux/features/cart.slice";
import { toggleProduct } from "@/redux/features/wishlist.slice";
import { BestSeller } from "@/ui/best-seller.ui";
import { getRandomColor } from "@/utils/get_rand-color.util";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  IconButton,
  Rating,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { GrCart } from "react-icons/gr";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { TbEye, TbHeart } from "react-icons/tb";
import { useDispatch } from "react-redux";

export default function ProductInfo() {
  const pathname = document.URL;
  const [pendingProduct, fetchProduct] = useTransition();
  const [product, setProduct] = useState<IProduct>();
  const [imgIndex, setImgIndex] = useState(0);
  const product_id = pathname.split("/").pop();

  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct(async () => {
      const res = await getProduct(product_id as string);
      setProduct(res as IProduct);
    });
  }, [product_id]);

  const [openWishsnackbar, setOpenWishsnackbar] = React.useState(false);
  const [openCartsnackbar, setOpenCartsnackbar] = React.useState(false);
  //when fetching product details
  if (pendingProduct) {
    return <></>;
  }

  return (
    <>
      <Snackbar
        open={openWishsnackbar}
        autoHideDuration={3000}
        onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === "clickaway") {
            return;
          }

          setOpenWishsnackbar(false);
        }}
        message="Wishlist action successful"
      />
      <Snackbar
        open={openCartsnackbar}
        autoHideDuration={3000}
        onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === "clickaway") {
            return;
          }

          setOpenCartsnackbar(false);
        }}
        message="Cart action successful"
      />
      {rendProductDetails()}
      <Container>
        <div className="flex text-misty justify-around items-center">
          {["Description", "Additional Information", "Reviews"].map((tab) => (
            <p className="p-5 " key={tab}>
              {tab === "Reviews" ? tab.concat(" (10)") : tab}
            </p>
          ))}
        </div>
        <Divider />
        <div className="grid grid-cols-2 gap-3 py-10">
          <div className="col-span-full text-mist-dark lg:col-span-1">
            <h1 className="text-misty text-xl">the quick fox jumps over</h1>
            <div className="text-sm flex flex-col gap-5 my-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                amet incidunt excepturi doloremque, sapiente sint sit recusandae
                rem quia consectetur repudiandae quibusdam! Sed debitis deserunt
                culpa modi laborum minima odio?
              </p>
              <p className="border-l-2 pl-3 border-future">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                amet incidunt excepturi doloremque, sapiente sint sit recusandae
                rem quia consectetur repudiandae quibusdam! Sed debitis deserunt
                culpa modi laborum minima odio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                amet incidunt excepturi doloremque, sapiente sint sit recusandae
                rem quia consectetur repudiandae quibusdam! Sed debitis deserunt
                culpa modi laborum minima odio?
              </p>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1">
            <Image
              className="w-full h-72 rounded-xl"
              width={200}
              height={200}
              src={"/_images/product_3.jpeg"}
              alt="so"
            />
          </div>
        </div>
      </Container>
      <div className="bg-[#FAFAFA] py-10">
        <Container>
          <BestSeller />
          <div className="grid grid-cols-6 gap-3 py-3">
            {brands.map((brand) => (
              <Image
                key={brand}
                className="h-10 sm:col-span-2 md:col-3 lg:col-auto"
                src={brand}
                alt="brands"
                width={200}
                height={200}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );

  //render product
  function rendProductDetails() {
    return (
      <div className="bg-[#FAFAFA]">
        <Container>
          <Box className="py-5">
            <Breadcrumbs
              separator={<SlArrowRight className="text-mist" />}
              aria-label="breadcrumb"
            >
              <Link className="text-misty font-bold" href="/">
                Home
              </Link>
              <Link className="text-mist font-bold" href={pathname}>
                Products
              </Link>
              <Typography className="text-mist font-bold">
                {product_id}
              </Typography>
            </Breadcrumbs>
          </Box>
          {/* === product details */}
          <Box className="grid grid-cols-6 h-screen">
            <Box className="col-span-full md:col-span-3">
              <Box className="flex justify-between items-center w-fit py-3 gap-1 relative">
                <IconButton
                  onClick={() => setImgIndex((prev) => prev - 1)}
                  disabled={imgIndex === 0}
                >
                  <SlArrowLeft className="text-sky" size={32} />
                </IconButton>
                {pendingProduct ? (
                  <Skeleton width={150} height={150} animation="wave" />
                ) : (
                  <Image
                    width={200}
                    height={200}
                    className="w-72 h-72"
                    src={product?.images[imgIndex] as string}
                    alt={"active_img"}
                  />
                )}
                <IconButton
                  onClick={() => setImgIndex((prev) => prev + 1)}
                  disabled={product && imgIndex === product.images.length - 1}
                >
                  <SlArrowRight className="text-sky" size={32} />
                </IconButton>
              </Box>
              <Box className="w-full lg:w-fit grid gap-1 lg:gap-2 grid-cols-6">
                {pendingProduct ? (
                  <Stack spacing={3} direction={"row"}>
                    {new Array(6).fill("_").map((sk, idx) => (
                      <Skeleton
                        width={20}
                        height={20}
                        animation="wave"
                        key={sk + idx}
                      />
                    ))}
                  </Stack>
                ) : (
                  product &&
                  product.images.map((img, idx) => (
                    <button
                      onClick={() => setImgIndex(idx)}
                      className="hover:border p-1 col-span-1 rounded-md"
                      key={idx + img}
                    >
                      <Image
                        width={200}
                        height={200}
                        className="w-32 h-32 lg:w-24 lg:h-24"
                        src={img}
                        alt={img + idx}
                      />
                    </button>
                  ))
                )}
              </Box>
            </Box>
            <Box className="col-span-full text-mist md:col-span-3">
              <h4>{product?.title}</h4>
              <Stack className="flex gap-3 ">
                <Rating readOnly value={product?.rating} />
                <span className="text-mist-dark">{10} Reviews</span>
              </Stack>
              <p className="text-misty text-lg font-bold">
                ${product?.price.toLocaleString()}
              </p>
              <h4>
                Avaliabity:{" "}
                {product && product.stock > 0 ? (
                  <span className="text-sky">In stock</span>
                ) : (
                  <span className="text-mist">Out of stock</span>
                )}
              </h4>
              <Divider />
              <div className="space-x-1 my-3">
                {product &&
                  product?.stock &&
                  new Array(5).fill("_").map((_, idx) => (
                    <button
                      className="p-3 rounded-full"
                      style={{
                        background: getRandomColor(),
                      }}
                      key={idx}
                    />
                  ))}
              </div>
              <Stack className="my-3" spacing={1} direction={"row"}>
                <button className="text-xs bg-sky py-2 px-5 rounded-md text-white font-bold">
                  Select Options
                </button>
                <button
                  onClick={() => {
                    dispatch(toggleProduct(product as IProduct));
                    setOpenWishsnackbar(true);
                  }}
                  className="border hover:bg-mist/30 p-2 rounded-full"
                >
                  <TbHeart />
                </button>
                <button onClick={() => {
                    dispatch(addToCart(product as IProduct));
                    setOpenCartsnackbar(true);
                  }} className="border hover:bg-mist/30 p-2 rounded-full">
                  <GrCart />
                </button>
                <button className="border hover:bg-mist/30 p-2 rounded-full">
                  <TbEye />
                </button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </div>
    );
  }
}
