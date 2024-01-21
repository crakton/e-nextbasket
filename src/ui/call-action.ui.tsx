"use client";
import { Typography } from "@mui/material";

export const CallToAction = () => {
  return (
    <div className="overflow-hidden bg-cover bg-[url(../../public/_images/image.jpeg)] bg-right flex flex-col justify-center items-center gap-3 p-3 w-full h-[75vh] lg:h-[95vh]">
      <h4 className="text-sky font-semibold text-sm">
        Designing Better Experience
      </h4>
      <h1 className="text-misty text-xl">
        Problems trying to resolve the conflict between
      </h1>
      <p className="text-mist-dark text-sm">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </p>
      <Typography className="text-future">$16.48</Typography>
      <button className="rounded-md p-3 bg-sky">ADD YOUR CALL TO ACTION</button>
    </div>
  );
};
