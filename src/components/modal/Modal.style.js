import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .body {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    background-color: #fff;
    border-radius: 10px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #efefef;
      border-radius: 10px 10px 0 0;
    }
    h2.title {
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }
    .content {
      padding: 1rem;
      margin-top: 1rem;
      font-size: 1rem;
    }
    button.close {
      padding: 1rem;
      font-size: 2rem;
      font-weight: 600;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;
