import { FC, ReactNode, useEffect, useState } from "react";
import CharacterContext from "./CharacterContext";

const CharacterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [characterName, setCharacterName] = useState("");
  const [characterColor, setCharacterColor] = useState("");
  const [colorName, setColorName] = useState("");
  const [colorNameError, setColorNameError] = useState<string | undefined>();
  const [colorNameLoading, setColorNameLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (characterColor) {
      const colorHash = characterColor.slice(1);
      setColorNameError(undefined);
      setColorNameLoading(true);
      fetch(`https://www.thecolorapi.com/id?hex=${colorHash}&format=json`, {
        method: "GET",
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.name) {
            setColorName(res.name.value);
          }
          setColorNameLoading(false);
        })
        .catch((e) => {
          setColorNameError(
            "Something went wrong while trying to get color name. Please pick color again."
          );
          console.log(e);
          setColorNameLoading(false);
        });
    }
    return () => {
      try {
        controller.abort("Canceled.!");
      } catch (e) {}
    };
  }, [characterColor]);

  const handleNameChange = (newValue: string) => {
    let name = newValue.slice(0, 20); //Max name length 20 chars
    setCharacterName(name);
  };

  return (
    <CharacterContext.Provider
      value={{
        characterName,
        characterColor,
        setCharacterColor,
        setCharacterName: handleNameChange,
        colorName,
        colorNameError,
        colorNameLoading,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
