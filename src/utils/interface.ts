export interface ThemeInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinkBtn {
  to: string;
  text: string;
  styled: boolean;
}
