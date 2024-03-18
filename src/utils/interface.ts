import { ReactElement } from "react";

export interface ThemeInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinkBtn {
  to: string;
  text: string;
  styled: boolean;
}

export interface AuthInterface {
  header: {
    title: string;
    subtitle?: string;
  };
  googleAction: string;
  newUser: boolean;
  footer?: string | ReactElement;
}
