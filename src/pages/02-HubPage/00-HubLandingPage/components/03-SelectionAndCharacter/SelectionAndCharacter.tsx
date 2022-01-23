
import { SelectionAndCharacterStyled } from "./SelectionAndCharacter.style";

export default function SelectionAndCharacter(props:any){

  return (
    <SelectionAndCharacterStyled>
      {props.children}
    </SelectionAndCharacterStyled>
  )
}