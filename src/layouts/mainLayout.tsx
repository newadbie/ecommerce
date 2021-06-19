import Container from "@material-ui/core/Container";
import React from "react";

import Header from "../components/Layout/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default MainLayout;
