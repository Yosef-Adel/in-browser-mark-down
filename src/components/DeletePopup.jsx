import Modal from "./ModelPopUp/Modal";
import "./style/deletepopup.css";

const DeletePopup = ({ docName, onCloseModal, deleteHandeler }) => {
  return (
    <Modal onCloseModal={onCloseModal}>
      <div className="delete">
        <div className="delete__content">
          <h2>حذف هذا المستند؟</h2>
          <p>
            هل أنت متأكد أنك تريد حذف المستند '{docName}' ومحتوياته؟ لا يمكن
            التراجع عن هذا الإجراء.
          </p>
          <div className="delete__opt">
            <button className="btn btn--save " onClick={deleteHandeler}>
              تأكيد وحذف
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeletePopup;
