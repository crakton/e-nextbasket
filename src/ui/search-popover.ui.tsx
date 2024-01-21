"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import { IconButton } from "@mui/material";
import { TbSearch } from "react-icons/tb";

export function SearchPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <TbSearch className="text-sky" />
      </IconButton>
      <Popover
        className="p-3"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <input
          className="border border-mist rounded-lg p-3 w-full"
          type="text"
          placeholder="Search Products"
        />
      </Popover>
    </div>
  );
}
