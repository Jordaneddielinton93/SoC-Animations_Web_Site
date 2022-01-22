import NavItem from "./components/NavItem";
import { SideNavStyled } from "./SideNav.style";
import { AiOutlineHome } from 'react-icons/ai';
import { MdAnimation } from 'react-icons/md';
import { BsTags,BsChevronDown } from 'react-icons/bs';
import { FaChalkboardTeacher} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import InputWithAnimationList from "./components/List-Animation";
import InputWithHtmlList from "./components/List-Html";
import InputWithWorkShopList from "./components/List-WorkShops";
import { pageContext } from "../../../App";
import { ACTIONS } from "../../../00-Hooks/useReducer";
import HtmlCode from "../02-HtmlCode/HtmlCode";
export default function SideNav(){
  let navigate = useNavigate();


  let [isAnimationDropDown,setAnimationDropDown]=useState(false)
  let [isHtmlDropDown,setHtmlDropDown]=useState(false)
  let [isWorkShopDropDown,setWorkShopDropDown]=useState(false)

  let {dispatch}=useContext(pageContext)

  

  return (
    <SideNavStyled>

      <NavItem 
        icon={<AiOutlineHome/>} 
        title={"Home"} 
        onClick={()=>navigate('/')}/>
      
      <NavItem 
        icon={<MdAnimation/>} 
        title={"Animations"} 
        onClick={()=>setAnimationDropDown(!isAnimationDropDown)}
        icon2={<BsChevronDown/>}
        isHtmlDropDown={isAnimationDropDown}
        childElements={<InputWithAnimationList/>}

        
        />

      <NavItem 
        icon={<BsTags/>} 
        title={"HTML"} 
        onClick={()=>{
          setHtmlDropDown(!isHtmlDropDown)
          dispatch({type:ACTIONS.PAGE_SHOWN,payload:<HtmlCode/>})
          }}
        icon2={<BsChevronDown/>}
        isHtmlDropDown={isHtmlDropDown}
        childElements={<InputWithHtmlList/>}
        />

        <NavItem 
        icon={<FaChalkboardTeacher/>} 
        title={"Work-Shops"} 
        onClick={()=>setWorkShopDropDown(!isWorkShopDropDown)}
        icon2={<BsChevronDown/>}
        isHtmlDropDown={isWorkShopDropDown}
        childElements={<InputWithWorkShopList/>}
        />
      


    </SideNavStyled>
  )
}