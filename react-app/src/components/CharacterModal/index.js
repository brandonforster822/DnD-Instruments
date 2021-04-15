import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeCharacter } from "../../store/modal.js";
import Character from "./Character";

Modal.setAppElement(document.getElementById("root"));

const CharacterModal = () => {
  const dispatch = useDispatch();
  const characterState = useSelector((state) => state.modal.characterShow);

  const closeModal = () => dispatch(closeCharacter());

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
        <Character />
      </Modal>
    </>
  );
};

export default CharacterModal;