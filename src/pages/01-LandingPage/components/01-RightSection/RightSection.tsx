import { RightSectionStyled } from "./RightSection.style";
import { BsArrowDownRightSquareFill } from 'react-icons/bs';
export default function RightSection(){
  return (
    <RightSectionStyled>

      <div className="floats">
        <div className="floating1 parallelogram"></div>
        <div className="floating2 parallelogram"></div>
        <div className="floating3 parallelogram"></div>
      </div>
      <h2 className="heading-Art_Code">
        Find your Animations 
        <BsArrowDownRightSquareFill style={{
          padding:"0 10px"
          }}/>
      </h2>
      
      
    </RightSectionStyled>

  )
}