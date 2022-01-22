import styled from "styled-components"

export const HubLandingStyled = styled.main`
  width:100%;
  height:92%;
  
  overflow-y:scroll;
  ::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid orange;  /* creates padding around scroll thumb */
  }



  & .testpart{
    width: 100%;
    height:100%;
    
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