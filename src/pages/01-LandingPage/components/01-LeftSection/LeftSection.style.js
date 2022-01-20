import styled from "styled-components"
export const LeftSectionStyled=styled.section`
  width:50%;
  display: flex;
  color:white;
  font-size:2.1rem;
  justify-content:center;

  & .main{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    width: 450px;
    &-title{
      margin:20px 0px;
      text-align:left;
      color:lightgrey;
    }
    &-discription{
      text-align:left;
      font-size:0.8rem;
      margin:20px 0;
      color:lightgrey;
    }
    &-Buttons{
      display:flex;
      a{
        color:white;
        background-color:transparent;
      }
      &-btn:nth-child(2){
          background: transparent;
        }
      &-btn{
        height:34px;
        width: 130px;
        margin-right:20px;
        background-color:blue;
        border-radius:5px;
        border:solid thin green;
        color:white;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        &:hover{
          border:thick inset white;
        }
      }
    }
  }
 

  /* text wave */
  .logo.is-animetion {
  margin-top: 0.6em;
}

.logo.is-animetion span {
  display: inline-block;
  animation: wave-text 1s ease-in-out infinite;
}

.logo.is-animetion {
  span:nth-of-type(1){ animation-delay: 0.0s; }
  span:nth-of-type(2){ animation-delay: 0.1s; }
  span:nth-of-type(3){ animation-delay: 0.2s; }
  span:nth-of-type(4){ animation-delay: 0.3s; }
  span:nth-of-type(5){ animation-delay: 0.4s; }
  span:nth-of-type(6){ animation-delay: 0.6s; }
  span:nth-of-type(7){ animation-delay: 0.7s; }
  span:nth-of-type(8){ animation-delay: 0.8s; }
  span:nth-of-type(9){ animation-delay: 0.9s; }
  span:nth-of-type(10){ animation-delay: 1s; }
}

@keyframes wave-text{
  00%{
    transform: translateY(0em) ;
  }
  60%{
    transform: translateY(-0.1em); color:green;
  }
  100%{
    transform: translateY(0em);
  }
}

/* TYPEWRITTTERRR */
.typewriter{
  width: 230px;
}
.typewriter-text  {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    blink-caret .75s step-end infinite;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent;color:lightblue }
  50% { border-color: orange; }
}
`