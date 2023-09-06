import { useEffect, MouseEvent, FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { isHtmlElement } from "../../utils/constants";

interface IModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const modalRoot = document.getElementById("react-modals") as Element;

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  function handleModalOverlayClick(evt: MouseEvent<HTMLDivElement>): void {
    if (isHtmlElement(evt.target)) {
      evt.target.classList.forEach((className: string) => {
        if (className.includes("opened")) {
          onClose();
        }
      });
    }
  }

  function handleEscClick(evt: KeyboardEvent) {
    if (evt.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscClick);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'visible';

    return () => {
      document.removeEventListener("keydown", handleEscClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return createPortal(
    <ModalOverlay isOpen={isOpen} onOverlayClick={handleModalOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.close_button} type="button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
