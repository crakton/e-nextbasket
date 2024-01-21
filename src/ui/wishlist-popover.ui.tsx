"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import {
  Badge,
  Card,
  CardContent,
  IconButton,
  Paper,
  Snackbar,
} from "@mui/material";
import { GrCart } from "react-icons/gr";
import { TbHeart } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import Image from "next/image";
import { IoTrash } from "react-icons/io5";
import { removeFromWishlist } from "@/redux/features/wishlist.slice";

export function WishlistPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [openWishsnackbar, setOpenWishsnackbar] = React.useState(false);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );
  const dispatch = useDispatch();
  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const { items } = useSelector((state: RootState) => state.wishlist);
  const open = Boolean(anchorEl);
  const id = open ? "wishlist-popover" : undefined;

  return (
    <div>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={openWishsnackbar}
        autoHideDuration={3000}
        onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === "clickaway") {
            handleClose();
            return;
          }
          handleClose();
          setOpenWishsnackbar(false);
          handleClose();
        }}
        message="Removed successfuly"
      />
      <IconButton onClick={handleClick}>
        <Badge badgeContent={items.length}>
          <TbHeart className="text-sky" />
        </Badge>
      </IconButton>
      <Popover
        className="p-3 max-h-[90vh] overflow-y-auto"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {items.length > 0
          ? items.map((list) => (
              <div
                className="flex w-full gap-3 items-center p-3 bg-mist"
                key={list.id}
              >
                <Image
                  src={list.thumbnail}
                  alt="thumb"
                  width={100}
                  height={100}
                />
                <div>
                  <h1>{list.title}</h1>
                  <p className="text-xs">{list.category}</p>
                  <p>
                    Price:{" "}
                    <span className="text-future">
                      {list.price.toLocaleString()}
                    </span>
                  </p>
                </div>
                <IconButton
                className="justify-self-end"
                  onClick={() => {
                    dispatch(removeFromWishlist(list.id));
                    handleClose();
                  }}
                >
                  <IoTrash size={18} />
                </IconButton>
              </div>
            ))
          : null}
      </Popover>
    </div>
  );
}
