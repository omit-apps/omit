declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

declare type CreateWindowOptions = Electron.BrowserWindowConstructorOptions & {
  url: string;
};

declare type DefinePropTypes<T> = {
  [Key in keyof T]: T[Key];
} & {
  className?: string;
  children?: React.ReactElement | string;
};

declare type APIOption = {
  window: {
    openModal: (options: Partial<CreateWindowOptions>) => void;
    createWindow: (options: CreateWindowOptions) => void;
  };
};

declare const electronAPI: APIOption;
