import React from "react";
import ReactDOM from "react-dom";
import { ModalParams } from "../model";
import "./styles.css";
import { Button } from "shared/lib/ui";

export const Modal: React.FC<ModalParams> = ({
  modalContent,
  isOpen,
  setIsOpen,
  onSubmit,
}) => {
  const modalsDomNode = document.querySelector("#modals");

  if (!modalsDomNode || !isOpen) return <></>;
  return ReactDOM.createPortal(
    <>
      <div className="modal">
        {modalContent}
        <div className="modal__actions">
          <Button name="Save" onClick={() => onSubmit()} />
          <Button name="Close" onClick={() => setIsOpen(false)} />
        </div>
      </div>
      <div className="backdrop" onClick={() => setIsOpen(false)} />
    </>,
    modalsDomNode
  );
};
