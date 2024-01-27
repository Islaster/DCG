import ChooseClass from "../../components/chooseClass/chooseClass";

export default function GamePage() {
  const player = localStorage.getItem("player");
  return <>{player ? <div>Game</div> : <ChooseClass />}</>;
}
