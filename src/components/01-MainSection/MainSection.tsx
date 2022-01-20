import { MainSectionStyled } from "./MainSection.style";

export default function MainSection(props:any){
  return (
    <MainSectionStyled>
      {props.children}
    </MainSectionStyled>
  )
}