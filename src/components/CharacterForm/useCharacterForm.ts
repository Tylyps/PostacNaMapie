import { ChangeEvent, FormEvent, useContext } from "react";
import CharacterContext from "../../contexts/CharacterContext/CharacterContext";

const useCharacterForm = () => {
  const {
    characterName,
    characterColor,
    setCharacterColor,
    setCharacterName,
    colorName,
    colorNameError,
    colorNameLoading,
  } = useContext(CharacterContext);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterColor(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return {
    characterName,
    characterColor,
    handleColorChange,
    handleNameChange,
    handleSubmit,
    colorName,
    colorNameError,
    colorNameLoading,
  };
};

export default useCharacterForm;
