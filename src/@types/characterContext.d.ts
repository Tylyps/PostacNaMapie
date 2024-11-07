export interface CharacterContextType {
  characterName: string;
  characterColor: string;
  colorName?: string;
  colorNameError?: string;
  colorNameLoading?: boolean;
  setCharacterName: (name: string) => void;
  setCharacterColor: (color: string) => void;
}
