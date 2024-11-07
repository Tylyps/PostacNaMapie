import Character from "../Character/Character";
import useGameMap from "./useGameMap";
import "./GameMap.css";

const GameMap = () => {
  const { position, gameMapRef } = useGameMap();

  return (
    <div className="gameMap" ref={gameMapRef}>
      <Character position={position} />
    </div>
  );
};

export default GameMap;
