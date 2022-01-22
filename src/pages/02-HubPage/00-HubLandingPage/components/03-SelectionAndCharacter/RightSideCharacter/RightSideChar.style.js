import styled from "styled-components"
export const RightSideCharStyled= styled.aside`
  width: 50%;
  height:400px;
  position:relative;

  #ChrisTopHalfBody{
    animation:Squat 2s infinite ease-in-out alternate;
  }
  #leftSweater{
    animation-delay:0.5s ;
    animation:leftSweater 2s infinite alternate;
  }

  #leftLeg{
    animation:leftLegBend 2s infinite alternate;
  }
  #rightLeg{
    animation:rightLegBend 2s infinite alternate;
  }
  #rightShoe{
    animation:rightLegBend 2s infinite alternate;
  }
  #leftshorts{
    animation-delay:0.5s ;
    animation:leftshortsBend 2s infinite alternate;
  }
  #rightshorts{
    animation-delay:0.5s ;
    animation:rightshortsBend 2s infinite alternate;
  }
  #leftShoe{
    animation:leftLegBend 2s infinite alternate;
  }
  .eyes{
    fill:black;
    animation:EyesBlinking 4s infinite alternate;
  }
  #RectangleCODE{
    animation:CodeSpeach 4s infinite alternate;
    width:90 ,height:90
  }
  #CODE{
    animation:speach 4s infinite alternate;
  }
  #mouth{
    animation:MouthMove 4s infinite alternate;
  }
  


  
  }

  @keyframes speach { 
        from { transform:translate(-5px,0px) }
        to { transform:translate(0px,20px) }
  }
  @keyframes Squat { 
        from { transform:translate(10,0px) }
        to { transform:translate(0,60px) }
  }
  @keyframes leftSweater { 
        from { transform:translate(-2px,0px) rotate(0deg) }
        to { transform:translate(0px,0) rotate(2deg) }
  }
  @keyframes leftshortsBend { 
        from { transform:translate(0px,5px) rotate(0deg) }
        to { transform:translate(2px,0) rotate(3deg) }
  }
  @keyframes leftLegBend { 
        from { transform:translate(3px,0px) rotateY(0deg) }
        to { transform:translate(2px,0) rotateY(-30deg) }
  }


  @keyframes rightshortsBend { 
        from { transform:translate(0px,15px) rotate(0deg) }
        to { transform:translate(-2px,5px) rotate(-3deg) }
  }

  @keyframes rightLegBend { 
    from { transform:translate(10px,10px) rotateY(20deg) }
        to { transform:translate(70px,0px) rotateY(30deg) }
  }

  @keyframes EyesBlinking {
  0%   { r:5  }
  25%  { r:5 }
  80%  { r:5 }
  90%  { r:5 }
  90%  { r:0 }
  100% { r:5 }
}
@keyframes MouthMove {
  0%   { stroke-width:14  }
  25%  { stroke-width:14 }
  25%  { stroke-width:0 }
  80%  { stroke-width:14 }
  90%  { stroke-width:14 }
  90%  { stroke-width:0 }
  100% { stroke-width:14 }
}

@keyframes CodeSpeach {
  0%   { width:10 ,height:10,font-size:2rem }
  25%  { width:10 ,height:30,font-size:2rem}
  80%  { width:10 ,height:30 ,font-size:2rem}
  90%  { width:10 ,height:30 ,font-size:2rem}
  100% { width:10 ,height:90 ,font-size:2rem}
}







`