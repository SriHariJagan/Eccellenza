import { createContext, useContext } from "react";

export const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
}

export const MailContext = createContext();
export const useContactMail = () => {
  return useContext(MailContext);
}