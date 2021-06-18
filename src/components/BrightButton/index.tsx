// Extend button for additional variant
import Button from "@material-ui/core/Button";
import React from "react";

const sizes = ["small", "medium", "large"] as const;

type Props = {
  size?: typeof sizes[number];
  children: React.ReactNode;
};

const BrightButton = ({ children, size }: Props) => {
  return (
    <Button style={{ backgroundColor: "rgba(245, 245, 245, 1)" }} size={size}>
      {children}
    </Button>
  );
};

export default BrightButton;
