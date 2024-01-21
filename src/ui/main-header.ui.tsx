"use client";
import { useCallback, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "@/constants/nav-link.contant";
import { BiPhone } from "react-icons/bi";
import { TbMenuDeep } from "react-icons/tb";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { ArrowDropDown } from "@mui/icons-material";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CartPopover } from "./cart-popover.ui";
import { WishlistPopover } from "./wishlist-popover.ui";
import { SearchPopover } from "./search-popover.ui";

export const MainHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenuState((prev) => !prev);
  }, []);
  return (
    <>
      <Box
        sx={{ display: { xs: "none", lg: "flex" } }}
        className="bg-future w-full items-center justify-between py-1 px-10"
      >
        <div className="flex justify-between items-center">
          <IconButton className="gap-1">
            <BiPhone className="text-white" />
            <Typography className="text-white text-sm font-bold">
              (255-555-0118)
            </Typography>
          </IconButton>
          <IconButton className="gap-1">
            <IoMailOutline className="text-white" />
            <Typography className="text-white text-sm font-bold">
              michelle.rivera@example.com
            </Typography>
          </IconButton>
        </div>
        <h4 className="text-sm font-bold">
          Follow Us and get the chance to win 80% off.
        </h4>
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-bold">Follow Us : </h4>
          <IconButton className="gap-1">
            <FaInstagram className="text-white" />
          </IconButton>
          <IconButton className="gap-1">
            <FaYoutube className="text-white" />
          </IconButton>
          <IconButton className="gap-1">
            <FaFacebook className="text-white" />
          </IconButton>
          <IconButton className="gap-1">
            <FaTwitter className="text-white" />
          </IconButton>
        </div>
      </Box>
      <Box
        className={"bg-white mx-10"}
        sx={{
          display: { xs: "none", lg: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link className="my-3 mr-20" href="/">
          <Image
            src={"/_images/logo.png"}
            alt="LOGO_IMG"
            height={0}
            width={170}
            priority
          />
        </Link>
        <nav className="flex justify-between mr-auto items-center gap-1">
          {navlinks.map((link, idx) => {
            if (link.sublinks && link.sublinks?.length > 0) {
              return (
                <Accordion sx={{ boxShadow: "none" }} key={idx}>
                  <AccordionSummary expandIcon={<ArrowDropDown />}>
                    <Typography className={"text-mist-dark"}>
                      {link.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {link.sublinks.map((sublink, id) => (
                      <Link key={id} href={sublink?.href as string}>
                        <Typography>{sublink?.name as string}</Typography>
                      </Link>
                    ))}
                  </AccordionDetails>
                </Accordion>
              );
            }
            return (
              <Link key={idx} href={link.href}>
                <Typography className="text-mist-dark">{link.name}</Typography>
              </Link>
            );
          })}
        </nav>
        <Box className={"flex justify-center gap-1 items-center mr-24"}>
          <IoPersonOutline className="text-sky" />
          <Link href="/" className="flex p-1 items-center justify-between">
            <Typography className="text-sky">Login</Typography>
          </Link>
          <Typography className="text-sky">/</Typography>
          <Link href={"/"} className="flex p-1 justify-between items-center">
            <Typography className="text-sky">Register</Typography>
          </Link>
          <SearchPopover />
          <CartPopover />
          <WishlistPopover />
        </Box>
      </Box>

      <AppBar
        enableColorOnDark
        variant="elevation"
        color="default"
        position="sticky"
      >
        {/* smaller screen navview */}
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link className="p-1" href="/">
            <Image
              src={"/_images/logo.png"}
              alt="LOGO_IMG"
              height={0}
              width={170}
              priority
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              width: 150,
              justifyContent: "space-around",
              alignItems: "center",
              marginRight: 5,
            }}
          >
            <SearchPopover />
            <CartPopover />
            <WishlistPopover />
            <IconButton onClick={toggleMenu}>
              <TbMenuDeep className="text-sky" size={26} />
            </IconButton>
          </Box>
          <SwipeableDrawer
            open={menuState}
            onClose={() => setMenuState(false)}
            onOpen={toggleMenu}
            anchor="right"
          >
            <List sx={{ width: "90vw", justifyContent: "center" }}>
              {navlinks.map((link, idx) => {
                if (link.sublinks && link.sublinks?.length > 0) {
                  return (
                    <Accordion is="button" key={idx}>
                      <AccordionSummary expandIcon={<ArrowDropDown />}>
                        <Typography>{link.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {link.sublinks.map((sublink, id) => (
                          <Link key={id} href={sublink?.href as string}>
                            <Typography>{sublink?.name as string}</Typography>
                          </Link>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  );
                }
                return (
                  <ListItem key={idx}>
                    <Link href={link.href}>
                      <Typography>{link.name}</Typography>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <Box className={"flex justify-center gap-1 items-center"}>
              <IoPersonOutline className="text-sky" />
              <Link href="/" className="flex p-1 items-center justify-between">
                <Typography className="text-sky">Login</Typography>
              </Link>
              <Typography className="text-sky">/</Typography>
              <Link
                href={"/"}
                className="flex p-1 justify-between items-center"
              >
                <Typography className="text-sky">Register</Typography>
              </Link>
            </Box>
            <Stack className="justify-center" direction={"row"} spacing={3}>
              <SearchPopover />
              <CartPopover />
              <WishlistPopover />
            </Stack>
          </SwipeableDrawer>
        </Box>
      </AppBar>
    </>
  );
};
