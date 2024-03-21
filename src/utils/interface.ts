import {
  Dispatch,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { IconType } from "react-icons";

export interface ThemeInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinkBtn {
  to: string;
  text: string;
  styled: boolean;
  className?: string;
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

// Main Data
export interface UserProps {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
}

// Component Props
export interface MainProps {
  title: string;
  body: ReactNode | ReactElement;
  footer?: ReactNode | ReactElement;
}

export interface MenuState {
  collapsed?: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  Icon?: ReactElement;
}
