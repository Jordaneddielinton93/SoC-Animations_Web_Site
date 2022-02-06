import styled from "styled-components"

export const AnimationPageStyled = styled.div`
  width: 99%;
  height:90%;
  margin:auto;
  border-radius:10px;
  border:thin solid grey;
  display: flex;

  background: rgba(0, 0, 0, 0.6);
  position:relative;
  flex-direction:column;

  .AnimeUl{
    width: 100%;
    height: 100%;
    border: solid thin white;
    border-radius:10px;
    display: flex;
    flex-flow:wrap;
    align-items:center;
    justify-content:center;
    overflow-Y:scroll;
    &-Li{

      display: flex;
      align-items:center;
      justify-content:center;
      width: 100%;
      cursor:pointer;
      border:thin solid grey;

    }
  }

  .LillieBackground{
    position: absolute;
    max-height:100%;
    z-index:-1;
  }

  #LetterN{
    animation: mymove 5s infinite;
  }
  #letterI{
    animation-delay:0.5s;
    animation: mymove2 8s infinite;
  }
  
  
  #LetterB{
    animation-delay:0.5s;
    animation: mymove 8s infinite;
  }
  #LetterO{
    animation-delay:3s;
    animation: mymove2 8s 1s infinite;
  }
  #LetterC{
    animation-delay:0.5s;
    animation: spinning 10s alternate infinite;
    /* transform: rotate(90deg) translate(-450px,-860px) */
  }
  @keyframes spinning {
    transform: rotate(90deg) translate(-450px,-860px)
    0% {
      transform: rotate(0deg) translate(0px,0px);
    }
    50% {
      transform: rotate(90deg) translate(-450px,-860px)
    }


    /* 50% {transform: rotate(10deg) translate(0px,0px);} */
  }

  @keyframes mymove {
  50% {transform: rotate(10deg) ;}
  }
  @keyframes mymove2 {
  20% {transform: rotate(5deg);stroke:red;
      stroke-width:8px;}
  50% {transform:   rotate(2deg);stroke:red;
      stroke-width:8px;}
  75% {transform: translate(8px,0px)  rotate(8deg);}
  }


  .Flower2:hover #Flower2BeeRightWing{
  animation: BeerightWing 2s infinite;
  /* transform: translate(-10px,30px) rotate(-15deg) */
}


@keyframes BeerightWing {
  0% { transform: translate(-5px,110px) rotate(-60deg)}
  10% { transform: translate(-10px,30px) rotate(-15deg)}
  15% { transform: translate(-5px,110px) rotate(-60deg)}
  20% { transform: translate(-10px,30px) rotate(-15deg)}
  100% { transform: translate(-10px,30px) rotate(-15deg)}
}


#Flower2bee{
  animation: Flower2Bee 15s infinite;
  /* transform: translate(60px,-40px) rotate(20deg) */
}

@keyframes Flower2Bee {
   0% { transform: translate(0px,0px) rotate(0deg)}
  20% { transform: translate(-50px,0px) rotate(-20deg)}
  35% { transform: translate(60px,-40px) rotate(20deg)}
  45% { transform: translate(60px,-20px) rotate(20deg)}
  60% { transform: translate(0px,0px) rotate(0deg)}
  80% { transform: translate(60px,-20px) rotate(20deg)} 
  100% { transform: translate(0px,0px) rotate(0deg)} 
}
`