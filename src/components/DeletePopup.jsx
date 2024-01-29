import React from 'react';
import Modal from "./ModelPopUp/Modal";
import './style/deletepopup.css';

const DeletePopup = ({ docName, onCloseModal, deleteHandeler }) => {
    return (
        <Modal onCloseModal={onCloseModal} >
            <div className="delete">
                <div className="delete__content">
                    <h2> Delete this document?</h2>
                    <p>Are you sure you want to delete the ‘{docName}’ document and its contents? This action cannot be reversed.</p>
                    <div className="delete__opt">
                        <button className="btn btn--save " onClick={deleteHandeler} >Confirm & Delete</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DeletePopup;
