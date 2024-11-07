import { useContext } from "react";
import "./Character.css";
import CharacterContext from "../../contexts/CharacterContext/CharacterContext";
import { CharacterPosition } from "../../@types/characterPosition";

const DEFAULT_COLOR = "#000";

type CharacterProps = {
  position: CharacterPosition;
};

export const CHARACTER_WIDTH = 40;
export const CHARACTER_HEIGHT = 100;

const Character = ({ position }: CharacterProps) => {
  const { characterName, characterColor } = useContext(CharacterContext);

  const style = {
    "--color": characterColor || DEFAULT_COLOR,
    top: `${position.y}px`,
    left: `${position.x}px`,
  } as React.CSSProperties;

  return (
    <div className="character" style={style}>
      <p className="characterLabel">{characterName}</p>
      <div className="characterHead"></div>
      <div className="characterBody"></div>
      <div className="leftArm"></div>
      <div className="rightArm"></div>
      <div className="leftLeg"></div>
      <div className="rightLeg"></div>
    </div>
  );
};

export default Character;
