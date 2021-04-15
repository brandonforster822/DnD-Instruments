import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeCheat } from "../../store/modal.js";
import Cheat from "./Cheat";

Modal.setAppElement(document.getElementById("root"));

const CheatModal = () => {
  const dispatch = useDispatch();
  const cheatState = useSelector((state) => state.modal.cheatShow);

  const closeModal = () => dispatch(closeCheat());

  return (
    <>
      <Modal
        isOpen={characterState}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
        contentLabel="Signup Modal"
        overlayClassName="OuterModal"
        // style={customStyles}
        className="InnerModal"
      >
        <Cheat />
      </Modal>
    </>
  );
};

export default CheatModal;