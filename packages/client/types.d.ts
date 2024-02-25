declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

declare type APIOption = {
  window: {
    openModal: (options: CreateWindowOptions) => void;
    createWindow: (options: CreateWindowOptions) => void;
  };
};

declare const electronAPI: APIOption;
