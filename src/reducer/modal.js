export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

const initialState = {
  isShow: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isShow: !state.isShow,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isShow: false,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isShow: true,
      };
    default:
      return state;
  }
};

export default modalReducer;