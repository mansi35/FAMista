import '../../css/Modal.css';
import ShareProductWithFriends from './ShareProductWithFriends';

const ShareProductModal = ({ handleClose, show, image }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <ShareProductWithFriends itemImage={image} />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default ShareProductModal;