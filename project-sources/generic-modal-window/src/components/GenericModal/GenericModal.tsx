import styles from "./GenericModal.module.scss";
import { PropsWithChildren } from "react";

interface IGenericModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  disableClickAwayClose?: boolean;
}

export default function GenericModal({
  isOpen,
  onClose,
  disableClickAwayClose,
  children,
}: IGenericModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles["modal-backdrop"]}
      onClick={disableClickAwayClose ? undefined : onClose}
    >
      <div
        className={styles["modal-content"]}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
