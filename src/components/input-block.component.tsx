import Typography from "@mui/material/Typography";

import React from "react";

import Form from "./form";

export const InputBlock: React.FC = () => {
  return (
    <div className="py-4">
      <Typography className="py-4" variant="h4">
        Add names of two persons to match
      </Typography>
      <Form />
    </div>
  );
};
