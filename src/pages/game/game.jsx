import ChooseClass from "../../components/chooseClass/chooseClass";

export default function GamePage() {
  const player = localStorage.getItem("player");
  console.log(player);
  return <>{player ? <div>Game</div> : <ChooseClass />}</>;
}
