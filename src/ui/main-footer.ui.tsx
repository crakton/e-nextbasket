"use client";
import { useCallback, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Backdrop,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "@/constants/nav-link.contant";
import { BiPhone } from "react-icons/bi";
import { TbMenuDeep, TbSearch } from "react-icons/tb";
import { GrCart } from "react-icons/gr";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { ArrowDropDown } from "@mui/icons-material";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const MainFooter = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* first row */}
      <div className="w-full px-5 lg:px-20 justify-start grid grid-cols-2 bg-[#FAFAFA]">
        <Link
          className="my-3 ml-3 lg:ml-10 mr-20 col-span-full lg:col-span-1"
          href="/"
        >
          <Image
            src={"/_images/logo.png"}
            alt="LOGO_IMG"
            height={0}
            width={170}
            priority
          />
        </Link>
        <div className="md:flex md:w-fit md:justify-self-end col-span-full lg:col-span-1 justify-between items-center">
          <IconButton className="gap-1">
            <FaFacebook className="text-[#23A6F0]" />
          </IconButton>
          <IconButton className="gap-1">
            <FaInstagram className="text-[#23A6F0]" />
          </IconButton>
          <IconButton className="gap-1">
            <FaTwitter className="text-[#23A6F0]" />
          </IconButton>
        </div>
      </div>

      <Container>
        {/* second row */}
        <div className="grid md:grid-cols-6 gap-1 py-10">
          <Box className="sm:col-span-full md:col-span-auto lg:col-span-1">
            <h1 className="text-misty ml-[14px]">Company Info</h1>
            <List>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">About Us</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">Carrier</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">
                    We are hiring
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">Blog</Typography>
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box className="sm:col-span-full md:col-span-auto lg:col-span-1">
            <h1 className="text-misty ml-[14px]">Legal</h1>
            <List>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">Legal</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">Carrier</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">
                    We are hiring
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">Blog</Typography>
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box className="sm:col-span-full md:col-span-auto lg:col-span-1">
            <h1 className="text-misty ml-[14px]">Features</h1>
            <List>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">
                    Business Marketing
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">
                    User Analytic
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">Live Chat</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">
                    Unlimited Support
                  </Typography>
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box className="sm:col-span-full md:col-span-auto lg:col-span-1">
            <h1 className="text-misty ml-[14px]">Resources</h1>
            <List>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">
                    IOS & Android
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">
                    Watch a Demo
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">Customers</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Typography className="text-mist-dark">API</Typography>
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box className="sm:col-span-full md:col-span-auto lg:col-span-1">
            <h1 className="text-misty ml-[14px]">Get In Touch</h1>
            <Stack className="mt-5 ml-[14px]">
              <Stack direction={"row"}>
                <input
                  type="email"
                  className="outline-none p-3 border border-gray-300 rounded-l-md"
                  placeholder="Your Email"
                />
                <button className="p-3 rounded-r-md bg-sky">Subscribe</button>
              </Stack>
              <p className="text-mist text-xs mt-2">
                Get latest notification update from our newsletters.
              </p>
            </Stack>
          </Box>
        </div>

        <h1 className="text-misty text-wrap text-center md:text-left md:ml-3  capitalize text-sm">
          Made with love by finland all right reserved
        </h1>
      </Container>
    </div>
  );
};
