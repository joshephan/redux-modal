import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../reducer";

const OpenModalButton = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  return <button onClick={openModal}>모달 열기</button>;
};

export default OpenModalButton;