import styles from "./App.module.scss";
import GenericModal from "./components/GenericModal/GenericModal.tsx";
import { useState } from "react";

function App() {
  const [genericModalOpen, setGenericModalOpen] = useState(false);
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);

  const onGenericModalOpen = () => {
    setGenericModalOpen(true);
  };

  const onGenericModalClose = () => {
    setGenericModalOpen(false);
  };

  const onDialogBoxClose = () => {
    setDialogBoxOpen(false);
  };

  const onDialogBoxOpen = () => {
    setDialogBoxOpen(true);
  };

  const onDialogBoxConfirm = () => {
    console.log("DialogBox confirmed");
    onDialogBoxClose();
  };

  const onDialogBoxCancel = () => {
    console.log("DialogBox cancelled");
    onDialogBoxClose();
  };

  return (
    <div className={styles["app-container"]}>
      <h1>Generic modal component with React, TypeScript and SCSS modules!</h1>
      <div>
        <button onClick={onGenericModalOpen}>Open Generic Modal</button>
        <button onClick={onDialogBoxOpen}>Open Dialog Box</button>
      </div>
      <div>
        <GenericModal isOpen={genericModalOpen} onClose={onGenericModalClose}>
          Generic modal content
        </GenericModal>
      </div>
      <div>
        <GenericModal
          isOpen={dialogBoxOpen}
          onClose={onDialogBoxClose}
          disableClickAwayClose={true}
        >
          <div className={styles["dialog-box"]}>
            <h4>Dialog box title</h4>
            <div className={styles["dialog-box-content"]}>
              Dialog box content
            </div>
            <div className={styles["dialog-box-footer"]}>
              <button onClick={onDialogBoxConfirm}>Confirm</button>
              <button onClick={onDialogBoxCancel}>Cancel</button>
            </div>
          </div>
        </GenericModal>
      </div>
    </div>
  );
}

export default App;
