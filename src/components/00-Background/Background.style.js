import styled from "styled-components";
export const BackgroundStyled = styled.div`
  
  display: flex;
  justify-content:center;
  align-items:center;
  background: url("https://images.unsplash.com/photo-1607499457689-3fd1ac3ffcdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"), linear-gradient(233deg, #e56420, #c22525, #3d9c31, #37bbde);
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-blend-mode: hard-light;
  -webkit-animation: hue-rotate 10s linear infinite;
          animation:  hue-rotate 10s linear infinite;


  @-webkit-keyframes hue-rotate {
  from {
    -webkit-backdrop-filter: hue-rotate(0);
    -moz-backdrop-filter: hue-rotate(0);
    -ms-backdrop-filter: hue-rotate(0);
    backdrop-filter: hue-rotate(0);
  }
  to {
    -webkit-backdrop-filter: hue-rotate(360deg);
    -moz-backdrop-filter: hue-rotate(360deg);
    -ms-backdrop-filter: hue-rotate(360deg);
    backdrop-filter: hue-rotate(360deg);
  }
}

@keyframes hue-rotate {
  from {
    -webkit-filter: hue-rotate(0);
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
`