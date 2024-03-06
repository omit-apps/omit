export type OpenModalOptions = {
  width?: number;
  height?: number;
};

type ModalTitle = string | React.ReactElement;

export type ChangeModalContentCallback = (
  title: ModalTitle,
  children: React.ReactElement,
  options: OpenModalOptions
) => void;

export type ModalInitialStateType = {
  show: boolean;
  title: ModalTitle;
  activeModal: React.ReactElement | null;
  options: OpenModalOptions;
};

export type NotifyModalPayloadType = Pick<
  ModalInitialStateType,
  "activeModal" | "title" | "options"
>;
