import { Zelda1, Zelda2 } from "simple-react-animations-v2";
import { CardStyled } from "./Card.style";

export default function Card(){
  return (
    <CardStyled>
      <div className="bigCard">
        <Zelda2 size="100%" border=""/>
      </div>

      <div className="smallCard1 tinycards">
        <Zelda1 size="100%" border=""/>
       
      </div>

   

      <div className="smallCard3 tinycards">
      <div className="animation_spaceman"></div>

       
      </div>
    </CardStyled>
  )
}