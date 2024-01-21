"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Badge, Divider, IconButton, Snackbar } from "@mui/material";
import { GrCart } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { IoAdd, IoTrash } from "react-icons/io5";
import Image from "next/image";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/features/cart.slice";
import { BiMinus, BiPlus } from "react-icons/bi";

export function CartPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

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

  const { items } = useSelector((state: RootState) => state.cart);
  const open = Boolean(anchorEl);
  const [openCartsnackbar, setOpenCartsnackbar] = React.useState(false);

  const id = open ? "cart-popover" : undefined;
  const cartSum = React.useMemo(
    () =>
      items.reduce((acc: number, obj) => {
        const sum = acc + obj.quantity * obj.price;
        return sum;
      }, 0),
    [items]
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={openCartsnackbar}
        autoHideDuration={3000}
        onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === "clickaway") {
            handleClose();
            return;
          }
          handleClose();
          setOpenCartsnackbar(false);
          handleClose();
        }}
        message="Removed successfuly"
      />
      <IconButton onClick={handleClick}>
        <Badge badgeContent={items.length}>
          <GrCart className="text-sky" />
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
                className="flex w-full justify-between gap-3 items-center p-3 bg-mist"
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
                  <div className="p-1 flex w-[100px] gap-2 justify-between items-center ">
                    <IconButton
                      onClick={() => {
                        dispatch(decrementQuantity(list.id));
                      }}
                    >
                      <BiMinus className="text-red-300" />
                    </IconButton>
                    <span className="text-future font-bold">
                      {list.quantity}
                    </span>
                    <IconButton
                      onClick={() => {
                        dispatch(incrementQuantity(list.id));
                      }}
                    >
                      <BiPlus className="text-misty" />
                    </IconButton>
                  </div>
                </div>
                <IconButton
                  onClick={() => {
                    dispatch(removeFromCart(list.id));
                    handleClose();
                  }}
                >
                  <IoTrash size={18} />
                </IconButton>
              </div>
            ))
          : null}
        <Divider />
        {items && (
          <div className="py-10 px-3 flex gap-1 bg-mist justify-self-end">
            <h1 className="text-misty">Total Sum:</h1>
            <span className="text-future">${cartSum.toLocaleString()}</span>
          </div>
        )}
      </Popover>
    </div>
  );
}
