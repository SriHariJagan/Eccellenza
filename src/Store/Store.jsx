import React from "react";
import { ThemeProvider } from "./Context/ThemeProvider";
import MailsProvider from "./Context/MailsProvider";

const Store = ({ children }) => {
  return (
    <ThemeProvider>
      <MailsProvider>{children}</MailsProvider>
    </ThemeProvider>
  );
};

export default Store;
