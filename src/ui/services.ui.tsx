import { services } from "@/constants/services.contant";
import { Box } from "@mui/material";
import { ServiceCard } from "./service-card.ui";

export const Services = () => {
  return (
    <Box className="px-20  flex flex-col gap-3 items-center">
      <h4 className="text-mist-dark">Featured Products</h4>
      <h1 className="text-misty text-xl">THE BEST SERVICES</h1>
      <p className="text-mist-dark text-sm">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-3">
        {services.map(({ img, subtitle, title }, id) => (
          <ServiceCard
            key={id}
            imgSrc={img}
            subtitle={subtitle}
            title={title}
          />
        ))}
      </div>
    </Box>
  );
};
