import React from "react"
import Modal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import { closeSearchIndex } from "../../store/modal"
import SearchIndexForm from "./SearchIndexForm"

Modal.setAppElement(document.getElementById("root"))

const SearchIndexModal = () => {
    const dispatch = useDispatch()
    const searchIndexState = useSelector((state) => state.modal.searchIndexShow)

    const closeModal = () => dispatch(closeSearchIndex())

    return(
        <>
            <Modal
                isOpen={searchIndexState}
                closeTimeoutMs={200}
                onRequestClose={closeModal}
                contentLabel="Search Index Modal"
                overlayClassName="OuterModal"
                className="InnerModal"
                >
                    <SearchIndexForm/>
                </Modal>
        </>
    )
}


export default SearchIndexModal