import useCharacterForm from "./useCharacterForm";
import "./CharacterForm.css";

const CharacterForm = () => {
  const {
    characterColor,
    characterName,
    handleColorChange,
    handleNameChange,
    handleSubmit,
    colorName,
    colorNameError,
    colorNameLoading,
  } = useCharacterForm();

  let infoText = "Select your character color.";

  if (colorNameLoading) {
    infoText = "Loading ...";
  } else if (colorNameError) {
    infoText = colorNameError;
  } else if (colorName) {
    infoText = `Color name: ${colorName}`;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="characterForm">
        <div className="inputContainer">
          <label>Character name:</label>
          <input
            type="text"
            onChange={handleNameChange}
            value={characterName}
            placeholder="Player1"
            maxLength={20}
          />
        </div>
        <div className="inputContainer">
          <label>Color: </label>
          <input
            type="color"
            onChange={handleColorChange}
            value={characterColor}
          />
        </div>
        <p>{infoText}</p>
      </form>
    </>
  );
};

export default CharacterForm;
