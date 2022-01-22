import styled from "styled-components"
export const MainSectionStyled=styled.main`
display: flex;
width: 95%;
height:95%;
margin-right:10px;
flex-flow:wrap;
border-radius:15px;
background: rgba(0, 0, 0, 0.6);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);


::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid orange;  /* creates padding around scroll thumb */
  }
`


