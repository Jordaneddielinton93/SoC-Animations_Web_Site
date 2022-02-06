import { ChrisChar } from "../Images/ChrisCharacter"
import { LizChar } from "../Images/LizCharacter"
import HubLandingPage from "../pages/02-HubPage/pages/00-HubLandingPage/HubLandingPage"
import Card1 from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/cards/Card1/Card1"
import Card2 from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/cards/Card2/Card2"
import Card3 from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/cards/Card3/Card3"
import Flower1 from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/flowers/Flower1/Flower1"
import Flower2 from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/flowers/Flower2/Flower2"
import Flower3 from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/flowers/Flower3/Flower3"

import Jinx from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/Characters/Jinx/Jinx"
import ClassDiscription from "../pages/02-HubPage/pages/02-HtmlPage/htmlDiscriptions/ClassDiscription"
import { DiscriptionStyle } from "../pages/02-HubPage/pages/02-HtmlPage/htmlDiscriptions/DiscriptStyle.style"
import DoctypeDiscription from "../pages/02-HubPage/pages/02-HtmlPage/htmlDiscriptions/DoctypeDiscription"
import HeadDiscription from "../pages/02-HubPage/pages/02-HtmlPage/htmlDiscriptions/HeadDiscription"
import HtmlDiscription from "../pages/02-HubPage/pages/02-HtmlPage/htmlDiscriptions/HtmlDiscription"

import RightSideCharacter from "../pages/02-HubPage/pages/00-HubLandingPage/components/03-SelectionAndCharacter/RightSideCharacter/RightSideCharacter"

import TextAnimation from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/Text/WaveAnimation/TextAnimation"
import Jasmine from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/Characters/Jasmine/Jasmine"
import Instructions from "../pages/02-HubPage/pages/01-HubAnimationPage/components/02-Lists/Instructions/Intructions"




export let ACTIONS={
  PAGE_SHOWN:"HTML_PAGE",
  HTML_PAGE_TAG_SHOWN:"HTML_PAGE_TAG_SHOWN",
  ANIMATION_SHOWN:"ANIMATION_SHOWN",
}



export let initState={
  pageShown:<HubLandingPage/>,//<<<component
  htmlPageTagShown:"none",
  htmlPageTagDiscription:"",//<<<component
  AnimationList:[<Instructions/>],//<<<component list
}


export function reducer(state,action){
  switch (action.type) {
    case ACTIONS.PAGE_SHOWN:
      return {
        ...state,
        pageShown:action.payload
      }
    case ACTIONS.HTML_PAGE_TAG_SHOWN:
      let component
      action.payload==="doctype"&&(component=<DoctypeDiscription/>);
      action.payload==="html"&&(component=<HtmlDiscription/>);
      action.payload==="head"&&(component=<HeadDiscription/>);
      action.payload==="meta"&&(component=<DiscriptionStyle/>);
      action.payload==="link"&&(component=<DiscriptionStyle/>);
      action.payload==="title"&&(component=<DiscriptionStyle/>);
      action.payload==="body"&&(component=<DiscriptionStyle/>);
      action.payload==="header"&&(component=<DiscriptionStyle/>);
      action.payload==="nav"&&(component=<DiscriptionStyle/>);
      action.payload==="h1"&&(component=<DiscriptionStyle/>);
      action.payload==="main"&&(component=<DiscriptionStyle/>);
      action.payload==="section"&&(component=<DiscriptionStyle/>);
      action.payload==="ul"&&(component=<DiscriptionStyle/>);
      action.payload==="li"&&(component=<DiscriptionStyle/>);
      action.payload==="class"&&(component=<ClassDiscription/>);

      
      return {
        ...state,
        htmlPageTagShown:action.payload,
        htmlPageTagDiscription:component
      }

    case ACTIONS.ANIMATION_SHOWN:
      let componentList
      action.payload==="Flowers"&&(
        componentList=[
        <Flower1/>,
        <Flower2/>,
        <Flower3/>
      ]);

      action.payload==="Cards"&&(
        componentList=[
        <Card1/>,
        <Card2/>,
        <Card3/>
      ]);

  
      action.payload==="Characters"&&(
        componentList=[
          <RightSideCharacter Character={ChrisChar}/>,
          <RightSideCharacter Character={LizChar}/>,
          <Jinx/>,
          <Jasmine/>
        ]);

      action.payload==="Text"&&(
        componentList=[
        <TextAnimation Text="Try Me" fontSize="5em"/>
      ]);

      
      return {
        ...state,
        AnimationList:componentList
      }
     
  
    default:
      break;
  }
}