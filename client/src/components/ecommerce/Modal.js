import '../../css/Modal.css';
import ShareWithFriends from './ShareWithFriends';

const Modal = ({ handleClose, show, image }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <ShareWithFriends itemImage={image} />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;