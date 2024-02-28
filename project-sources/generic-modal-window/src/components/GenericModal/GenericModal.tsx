import styles from "./GenericModal.module.scss";
import classNames from "classnames";

interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
  backdropClassName?: string;
  contentClassName?: string;
  disableCloseOnClickOutside?: boolean;
}

export default function GenericModal({
  isOpen,
  onClose,
  children,
  backdropClassName,
  contentClassName,
  disableCloseOnClickOutside,
}: GenericModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={classNames(styles["modal-backdrop"], backdropClassName)}
      onClick={disableCloseOnClickOutside ? undefined : onClose}
    >
      <div
        className={classNames(styles["modal-content"], contentClassName)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
