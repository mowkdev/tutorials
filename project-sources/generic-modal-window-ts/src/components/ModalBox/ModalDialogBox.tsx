import GenericModal from "../GenericModal/GenericModal.tsx";
import styles from "./ModalDialogBox.module.scss";

interface IModalDialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function ModalDialogBox({
  content,
  title,
  onClose,
  isOpen,
}: IModalDialogBoxProps) {
  const onConfirm = () => {
    console.log("Confirm");
    onClose();
  };

  const onCancel = () => {
    console.log("Cancel");
    onClose();
  };

  return (
    <GenericModal
      isOpen={isOpen}
      onClose={onClose}
      disableCloseOnClickOutside={true}
      backdropClassName={styles["backdrop"]}
    >
      <div className={styles["dialog-box"]}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className={styles["content"]}>{content}</div>
        <div className={styles["footer"]}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </GenericModal>
  );
}
