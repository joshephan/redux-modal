import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../../reducer";
import { ModalWrapper } from "./Modal.style";

const Modal = ({ title, content }) => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.isShow);
  const onClose = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  if (!isShow) return null;

  return (
    <ModalWrapper onClick={onClose}>
      <div className="body"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header">
          <h2 className="title">{title}</h2>
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="content">{content}</div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
