import HubLandingPage from "../pages/02-HubPage/00-HubLandingPage/HubLandingPage"
import ClassDiscription from "../pages/02-HubPage/02-HtmlCode/htmlDiscriptions/ClassDiscription"
import { DiscriptionStyle } from "../pages/02-HubPage/02-HtmlCode/htmlDiscriptions/DiscriptStyle.style"
import DoctypeDiscription from "../pages/02-HubPage/02-HtmlCode/htmlDiscriptions/DoctypeDiscription"
import HtmlDiscription from "../pages/02-HubPage/02-HtmlCode/htmlDiscriptions/HtmlDiscription"

export let ACTIONS={
  PAGE_SHOWN:"HTML_PAGE",
  HTML_PAGE_TAG_SHOWN:"HTML_PAGE_TAG_SHOWN",
}



export let initState={
  pageShown:<HubLandingPage/>,//<<<component
  htmlPageTagShown:"none",
  htmlPageTagDiscription:"",//<<<component
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
      action.payload==="head"&&(component=<DiscriptionStyle/>);
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
     
  
    default:
      break;
  }
}