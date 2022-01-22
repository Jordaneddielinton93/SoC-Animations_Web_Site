import LeftSideSelection from "./LefSideCharacter/LeftSideSelection";
import RightSideCharacter from "./RightSideCharacter/RightSideCharacter";
import { SelectionAndCharacterStyled } from "./SelectionAndCharacter.style";

export default function SelectionAndCharacter(){

  return (
    <SelectionAndCharacterStyled>
      <LeftSideSelection/>
      <RightSideCharacter/>
      
    </SelectionAndCharacterStyled>
  )
}