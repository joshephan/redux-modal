import Modal from "./components/modal/Modal";
import OpenModalButton from "./components/OpenModalButton";

function App() {
  return (
    <div className="app">
      <OpenModalButton />
      <Modal title={"제목"} content={"본문"} />
    </div>
  );
}

export default App;
