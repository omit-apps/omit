declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

declare type CreateWindowOptions = {
  title: string;
  url: string;
  width: number;
  height: number;
};

declare type APIOption = {
  window: {
    openModal: (options: Partial<CreateWindowOptions>) => void;
    createWindow: (options: CreateWindowOptions) => void;
  };
};

declare const electronAPI: APIOption;
