import { useState } from "react";
import styles from "./App.module.scss";
import GenericModal from "./components/GenericModal/GenericModal.tsx";
import ModalDialogBox from "./components/ModalBox/ModalDialogBox.tsx";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDialogModalOpen, setDialogModalOpen] = useState(false);

  return (
    <div className={styles["app-container"]}>
      <div className={styles["button-container"]}>
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
        <button onClick={() => setDialogModalOpen(true)}>
          Open Dialog Modal
        </button>
      </div>
      <GenericModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <p>This is a modal!</p>
      </GenericModal>
      <ModalDialogBox
        isOpen={isDialogModalOpen}
        onClose={() => setDialogModalOpen(false)}
        title={"This is dialog modal"}
        content={
          "This modal utilizes GenericModal component and has custom styles applied."
        }
      />
    </div>
  );
}

export default App;
