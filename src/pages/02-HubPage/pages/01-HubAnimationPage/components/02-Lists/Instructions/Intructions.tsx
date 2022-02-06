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
    </InstructionsStyled>
   );
}
 
export default Instructions;