import { NavItemStyled } from "./NavItem.style"

export default function NavItem({childElements,icon,icon2,title,onClick,isHtmlDropDown}:any){
  return(
    <NavItemStyled >
      <div className="heading" onClick={onClick}>
        <h1 className="heading-icon1">{icon}</h1>
        <h3 className="heading-title">{title}</h3>
        <h5 className="heading-icon2" >{icon2}</h5>
      </div>
      <div style={
        {
          "display":isHtmlDropDown?"block":"none",
          "minHeight":"100%"
        }}>
        {childElements}
      </div>
    </NavItemStyled>
  )
}


