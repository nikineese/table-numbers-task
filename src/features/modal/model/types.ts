import React from "react";

export type ModalParams = {
  modalContent: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSubmit: () => void;
};
