import styled from "styled-components";
export const WhiteBorderBackgroundStyled = styled.div`
  width: 99%;
  height:90%;
  margin:auto;
  border-radius:10px;
  border:thin solid grey;
  display: flex;
  justify-content:space-between;
  & .HTML_LeftContainer{
    display:flex;
    width: 50%;
    height: 100%;
    justify-content:start;

    & .classRectangle,.LiRectangle,.ulRectangle,.sectionRectangle,.mainRectangle,.h1Rectangle,.navRectangle,.headerRectangle,.bodyRectangle,.titleRectangle,.LinkRectangle,.MetaRectangle,.HeadRectangle,.HTMLRectangle,.DocTypeRectangle{
      fill-opacity:0;
      margin:20px;
      stroke-width:2px;
      &:hover{
      stroke-width:2px;
      stroke:red;
      cursor:pointer;
      }
    }
    & .classRectangle{
      stroke:${(props)=>props.tagSVG==="class"?"red":"none"};
    }
/*  */
    & .LiRectangle{
      stroke:${(props)=>props.tagSVG==="li"?"red":"none"};
    }
/*  */
    & .ulRectangle{
      stroke:${(props)=>props.tagSVG==="ul"?"red":"none"};
     
    }
/*  */
    & .sectionRectangle{
      stroke:${(props)=>props.tagSVG==="section"?"red":"none"};
      
    }
  }
/*  */
    & .mainRectangle{
      stroke:${(props)=>props.tagSVG==="main"?"red":"none"};
     
    }
/*  */
    & .h1Rectangle{
      stroke:${(props)=>props.tagSVG==="h1"?"red":"none"};
     
    }

    & .navRectangle{
      stroke:${(props)=>props.tagSVG==="nav"?"red":"none"};
     
    }
/*  */
    & .headerRectangle{
      stroke:${(props)=>props.tagSVG==="header"?"red":"none"};
     
    }
/*  */
    & .bodyRectangle{
      stroke:${(props)=>props.tagSVG==="body"?"red":"none"};
     
    }

    & .titleRectangle{
      stroke:${(props)=>props.tagSVG==="title"?"red":"none"};
     
    }

    & .LinkRectangle{
      stroke:${(props)=>props.tagSVG==="link"?"red":"none"};
     
    }

    & .MetaRectangle{
      stroke:${(props)=>props.tagSVG==="meta"?"red":"none"};
     
    }

    & .HeadRectangle{
      stroke:${(props)=>props.tagSVG==="head"?"red":"none"};
     
    }

    & .HTMLRectangle{
      stroke:${(props)=>props.tagSVG==="html"?"red":"none"};
     
    }

    & .DocTypeRectangle{
      stroke:${(props)=>props.tagSVG==="doctype"?"red":"none"};
     
    }



    & .listClass{
      fill:red; 
      cursor:pointer;

    }
    & #class:hover{
      fill:orange;
    }
  }
  
`