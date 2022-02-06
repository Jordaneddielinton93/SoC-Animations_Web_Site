import "./Flower1.css"
const Flower1 = ({size,border}) => {
  let heightStyle={
    "height":size?size:"400px",
    "width":size?size:"400px",
    "border":border,
    "position":"relative",
    "display":"flex",
    "justifyContent":"center",
  }

  const FlowerImg=<svg width="100%" id="Flower1Rect" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Flower1">
  <path id="Flower1RightLeaf" d="M83.5 153C115.609 145.454 129.658 136.878 134.5 100C96.1326 107.187 86.3798 120.102 82 153C97.0819 136.455 107 124 125 110C112 123.5 97.9282 139.609 83.5 153Z" fill="#46B666" stroke="#4ECB71"/>
  <path id="Flower1LeftLeaf" d="M78.5 153.5C46.3912 145.954 32.342 136.378 27.5 99.5C65.8674 106.687 75.1202 119.602 79.5 152.5C60.5 136.928 51 124.5 37 109.5C46 125 64.0718 140.109 78.5 153.5Z" fill="#4ECB71" stroke="#46B666"/>
  <path id="Flower1Stem" d="M78.5 153C78.5 154.381 79.6193 155.5 81 155.5C82.3807 155.5 83.5 154.381 83.5 153L78.5 153ZM83.5 153L83.5 82L78.5 82L78.5 153L83.5 153Z" fill="#46B666"/>
  <g id="Flower1UpperLeaf">
  <path id="Vector 53" d="M54 88.5V60C71.7672 61.9546 76.7548 68.0146 81.5 83C85.6736 68.3609 90.4737 62.4807 107.5 60V92C107.5 97.5 97 112 79 113.5C65 112 54 99 54 88.5Z" fill="#4ECB71" stroke="#46B666"/>
  <circle id="Ellipse 8" cx="81.5" cy="55.5" r="9" fill="#46B666" stroke="#4ECB71"/>
  </g>
  </g>
  </svg>

  return ( 
    <div style={heightStyle}>
      {FlowerImg}
    </div>
    
   );
}
 
export default Flower1;