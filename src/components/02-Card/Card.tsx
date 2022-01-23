import { CardStyled } from "./Card.style";

export default function Card(){
  return (
    <CardStyled>
      <div className="bigCard">
        <div className="animation_spaceman"></div>
        <div className="stars"></div>
      </div>

      <div className="smallCard1 tinycards">
        <h1>Lorem</h1>
        <h1>Ipsum</h1>
        <button className="fancyButton">reap</button>
      </div>

      <div className="smallCard2 tinycards">
        <h1>Lorem</h1>
        <h1>Ipsum</h1>
        <button className="fancyButton">reap</button>
      </div>

      <div className="smallCard3 tinycards">
        <h1>Lorem</h1>
        <h1>Ipsum</h1>
        <button className="fancyButton">reap</button>
      </div>
    </CardStyled>
  )
}