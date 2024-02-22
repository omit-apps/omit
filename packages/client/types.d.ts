declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

declare type APIOption = {
  openModal: (title: string, url: string) => void;
};

declare const electronAPI: APIOption;
