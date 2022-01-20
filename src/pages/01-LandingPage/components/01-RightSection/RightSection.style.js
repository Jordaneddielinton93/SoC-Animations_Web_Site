import styled from "styled-components";

export const RightSectionStyled = styled.section`
display: flex;
width: 50%;
height:85%;
flex-direction:column;
justify-content:center;
.heading-Art_Code{
  display: flex;
  justify-content:center;
  align-items:center;
  color:white;
  width: 400px;
  z-index:10;
  font-weight:300;
  margin:10px 10px;
  padding:10px 0;
  align-self:end;
  border-radius:10px;
  cursor:pointer;
  &:hover{
    background:white;
    color:black;
    font-weight:500;

  }
}
.floats{
  display: flex;
  width: 100%;
  justify-content:right;
  align-items:center;
}
.parallelogram {
	width: 135px;
	height: 320px;
	transform: skew(-12deg)
  margin-right:10px;
  z-index:10;
}
.floating1 {  
  animation-name: floating1;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out ;
  margin-left: 30px;
  margin-top: 5px;
  background: url("https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"), linear-gradient(233deg, #e56420, #c22525, #3d9c31, #37bbde);
  background-size: cover;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 54px 55px, rgba(0, 0, 0, 0.52) 0px -12px 30px, rgba(0, 0, 0, 0.52) 0px 4px 6px, rgba(0, 0, 0, 0.57) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  



}
.floating2 {  
  animation-name: floating2;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out ;
  animation-delay: 1s;
  margin-left: 30px;
  margin-top: 5px;
  background: url("https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"), linear-gradient(233deg, #e56420, #c22525, #3d9c31, #37bbde);
  background-size: cover;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 54px 55px, rgba(0, 0, 0, 0.52) 0px -12px 30px, rgba(0, 0, 0, 0.52) 0px 4px 6px, rgba(0, 0, 0, 0.57) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}
.floating3 {  
  animation-name: floating3;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out ;
  animation-delay: 2s;
  margin-left: 30px;
  margin-top: 5px;
  background: url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"), linear-gradient(233deg, #e56420, #c22525, #3d9c31, #37bbde);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 54px 55px, rgba(0, 0, 0, 0.52) 0px -12px 30px, rgba(0, 0, 0, 0.52) 0px 4px 6px, rgba(0, 0, 0, 0.57) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}

@keyframes floating1 {
  from { transform: translate(0,  0px) skew(-12deg) ; }
  65%  { transform: translate(0, -45px)  skew(-12deg); }
  to   { transform: translate(0, -0px) skew(-12deg); }    
}
@keyframes floating2 {
  from { transform: translate(0,  0px) skew(-12deg) ; }
  65%  { transform: translate(0, -45px)  skew(-12deg); }
  to   { transform: translate(0, -0px) skew(-12deg); }    
}
@keyframes floating3 {
  from { transform: translate(0,  0px) skew(-12deg) ; }
  65%  { transform: translate(0, -45px)  skew(-12deg); }
  to   { transform: translate(0, -0px) skew(-12deg); }    
}


`