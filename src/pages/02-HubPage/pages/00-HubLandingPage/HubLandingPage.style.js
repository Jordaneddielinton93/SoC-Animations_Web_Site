import styled from "styled-components"

export const HubLandingStyled = styled.main`
display: flex;
flex-direction:column;
  width:100%;
  height:92%;
  padding-top:10px;
  overflow-x:scroll;
  

  
  ::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid orange;  /* creates padding around scroll thumb */
  }



  & .DiscoverCollectUse,.CreatiingTheBest,.ForEveryScreen{
    font-family: Montserrat, sans-serif;
    letter-spacing:10px;
    color:white;
    width: 100%;
    margin:20px 0px;
    text-shadow: 4px 4px #ff0000;
  }
  & .DiscoverCollectUse{
    font-size:3rem;
  }

  & .CreatiingTheBest{
    font-size:2.3rem;
  }
  & .ForEveryScreen{
    font-size:2rem;

  }

  .animation{
    width: 200px;
    height:200px;
    border :solid thin grey;
    cursor:pointer;
  }

  .animation_spaceman{
    width:200px;
    height:200px;
    background:url('https://i.ibb.co/V3nYgWW/spaceman-cutout.png');
    background-size:80%;
    background-repeat:no-repeat;
    background-position:center;
    animation:spin 6s infinite ease-in-out alternate;;
  }
  @keyframes spin { 
        from { transform: scale(0.2) rotate(0deg) }
        to { transform: scale(1.2) rotate(770deg) }
  }
  /* @keyframes pulse {
  from { transform: scale(0.8); }
  to { transform: scale(1.2); }
} */
`