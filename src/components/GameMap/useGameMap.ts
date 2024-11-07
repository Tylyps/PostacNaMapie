import { useEffect, useRef, useState } from "react";
import { CHARACTER_HEIGHT, CHARACTER_WIDTH } from "../Character/Character";

const useGameMap = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const gameMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePositionChange = (ev: KeyboardEvent) => {
      //If user is focusing input, character should not move so exit function
      const element = ev.target as HTMLElement;
      if (element.tagName === "INPUT") return;

      const characterDir = {
        x: 0,
        y: 0,
      };
      if (ev.key === "ArrowLeft") {
        characterDir.x -= 2;
      }

      if (ev.key === "ArrowRight") {
        characterDir.x += 2;
      }

      if (ev.key === "ArrowUp") {
        characterDir.y -= 2;
      }

      if (ev.key === "ArrowDown") {
        characterDir.y += 2;
      }

      let maxXPosition = CHARACTER_WIDTH;
      let maxYPosition = CHARACTER_HEIGHT;
      if (gameMapRef.current) {
        maxXPosition = gameMapRef.current.clientWidth - CHARACTER_WIDTH;
        maxYPosition = gameMapRef.current.clientHeight - CHARACTER_HEIGHT;
      }

      if (characterDir.x !== 0 || characterDir.y !== 0) {
        setPosition((oldPosition) => ({
          x: Math.min(
            Math.max(oldPosition.x + characterDir.x, 0),
            maxXPosition
          ),
          y: Math.min(
            Math.max(oldPosition.y + characterDir.y, 0),
            maxYPosition
          ),
        }));
      }
    };

    window.addEventListener("keydown", handlePositionChange);

    return () => {
      window.removeEventListener("keydown", handlePositionChange);
    };
  }, [gameMapRef]);

  return {
    gameMapRef,
    position,
  };
};

export default useGameMap;
