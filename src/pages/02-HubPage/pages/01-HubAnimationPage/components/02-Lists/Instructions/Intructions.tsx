import { InstructionsStyled } from "./Instructions.style";

const Instructions = () => {
  return ( 
    <InstructionsStyled>
    
      <h2>Installation (for stanadard apps)</h2>
      <br/>
      <div className="Installation">
        npm i simple-react-animations-v2
      </div>
      <br/>
      <div>
        import &#123; Card1, Flower3, Jasmine &#125; from "simple-react-animations-v2";
      </div>
      <br/>
      <div>
      import "simple-react-animations-v2/dist/simple-react-animations-v2.cjs.development.css";
      </div>
      <br />
      <br />
      <br />
      <div>
        <ul>
          <li>{"<Zelda1/>"}</li>
          <li>{"<Zelda2/>"}</li>
          ---------------------
          <li>{"<Card1/>"}</li>
          <li>{"<Card2/>"}</li>
          <li>{"<Card3/>"}</li>
          ---------------------
          <li>{"<Carousel1/>"}</li>
          ---------------------
          <li>{"<Jasmine/>"}</li>
          <li>{"<Jinx/>"}</li>
          <li>{"<SoCLiz/>"}</li>
          <li>{"<SoCChris/>"}</li>
          ---------------------
          <li>{"<Flower1/>"}</li>
          <li>{"<Flower2/>"}</li>
          <li>{"<Flower3/>"}</li>


        </ul>
      </div>
      
    </InstructionsStyled>
   );
}
 
export default Instructions;