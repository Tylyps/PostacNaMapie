import { createContext } from "react";
import { CharacterContextType } from "../../@types/characterContext";

const CharacterContext = createContext<CharacterContextType>({
  characterColor: "",
  characterName: "",
  setCharacterColor: (_color) => {},
  setCharacterName: (_name) => {},
});

export default CharacterContext;
