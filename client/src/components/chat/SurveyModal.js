import '../../css/Modal.css';
import Survey from './Survey';

const SurveyModal = ({ handleClose, show, image, itemId, itemName }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Survey handleClose={handleClose} productImage={image} productId={itemId} productName={itemName} />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default SurveyModal;