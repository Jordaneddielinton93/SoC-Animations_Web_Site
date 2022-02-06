import "./Flower2.css"
const Flower2 = ({size,border}) => {
  let heightStyle={
    "height":size?size:"400px",
    "width":size?size:"400px",
    "border":border,
    "position":"relative",
    "display":"flex",
    "justifyContent":"center",
  }

  const FlowerImg2=<svg width="100%"  viewBox="0 0 160 164" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Flower2">
  <g id="Vector 55" filter="url(#filter0_d_127_196)">
  <path d="M54.0003 57.4997L67.5003 74.9997L62.0003 52.4997L67.5003 45.9997C77.6834 45.8098 91.5003 45.9997 93.5003 47.9997C95.5003 49.9997 97.5069 51.8049 97.0003 55.4997L91.5003 74.9997L106 57.4997C109.905 55.6079 112.096 56.0564 116 57.4997C124.538 66.7071 127.974 71.3614 129.5 77.9997C129.257 81.337 128.338 83.2394 125 86.4997L107.5 94.4997C119.403 93.7956 124.888 93.6692 129.5 94.4997C134.522 96.0025 134.596 97.6469 135 100.5C133.613 112.755 132.81 119.597 127 127C124.406 128.674 122.819 128.957 119.5 127L100.5 117.5L116 135.5C116.482 140.263 115.921 142.115 114 144.5L91.5003 154.5C88.8327 154.248 87.275 153.964 83.0003 150L79.0003 129C77.8659 136.673 75.0003 150 75.0003 150C75.0003 150 74.2639 152.728 67.5003 154.5C57.4122 151.352 51.4435 150.105 44.0003 142.5C42.2784 138.796 41.9127 136.703 44.0003 133L56.0003 119L40.5003 127C36.0363 128.292 33.675 128.016 30.0003 124C30.0003 124 22.5003 104 25.5003 100.5C28.5003 96.9997 27.0003 94.4997 31.5003 94.4997C36.0003 94.4997 40.5908 92.9198 52.5003 94.4997C45.8588 91.9579 44.8495 92.9984 30.0003 82.9997C28.9603 80.2099 28.7458 78.5195 30.0003 74.9997C36.097 66.6541 39.5108 62.0701 45.5003 57.4997C48.0847 55.8725 49.9836 55.9083 54.0003 57.4997Z" fill="#FFA500"/>
  <path d="M54.0003 57.4997L67.5003 74.9997L62.0003 52.4997L67.5003 45.9997C77.6834 45.8098 91.5003 45.9997 93.5003 47.9997C95.5003 49.9997 97.5069 51.8049 97.0003 55.4997L91.5003 74.9997L106 57.4997C109.905 55.6079 112.096 56.0564 116 57.4997C124.538 66.7071 127.974 71.3614 129.5 77.9997C129.257 81.337 128.338 83.2394 125 86.4997L107.5 94.4997C119.403 93.7956 124.888 93.6692 129.5 94.4997C134.522 96.0025 134.596 97.6469 135 100.5C133.613 112.755 132.81 119.597 127 127C124.406 128.674 122.819 128.957 119.5 127L100.5 117.5L116 135.5C116.482 140.263 115.921 142.115 114 144.5L91.5003 154.5C88.8327 154.248 87.275 153.964 83.0003 150L79.0003 129C77.8659 136.673 75.0003 150 75.0003 150C75.0003 150 74.2639 152.728 67.5003 154.5C57.4122 151.352 51.4435 150.105 44.0003 142.5C42.2784 138.796 41.9127 136.703 44.0003 133L56.0003 119L40.5003 127C36.0363 128.292 33.675 128.016 30.0003 124C30.0003 124 22.5003 104 25.5003 100.5C28.5003 96.9997 27.0003 94.4997 31.5003 94.4997C36.0003 94.4997 40.5908 92.9198 52.5003 94.4997C45.8588 91.9579 44.8495 92.9984 30.0003 82.9997C28.9603 80.2099 28.7458 78.5195 30.0003 74.9997C36.097 66.6541 39.5108 62.0701 45.5003 57.4997C48.0847 55.8725 49.9836 55.9083 54.0003 57.4997Z" stroke="#9C4B00"/>
  </g>
  <circle id="Ellipse 11" cx="80.5" cy="101.5" r="14.5" fill="#9C4B00"/>
  <g id="Flower2bee">
  <g id="Flower2BeeBody">
  <g id="Flower2BeeRightWing" filter="url(#filter1_d_127_196)">
  <path d="M104.432 57.7323C95.7946 56.4001 85.57 58.1855 84.4306 63.7259C81.9156 67.1795 85.8899 75.9376 100.843 80.4559C115.443 83.0579 125.816 78.3719 124.877 72.4039C123.939 66.4358 116.474 61.25 104.432 57.7323Z" fill="white"/>
  <path d="M104.432 57.7323C95.7946 56.4001 85.57 58.1855 84.4306 63.7259C81.9156 67.1795 85.8899 75.9376 100.843 80.4559C115.443 83.0579 125.816 78.3719 124.877 72.4039C123.939 66.4358 116.474 61.25 104.432 57.7323Z" stroke="black" stroke-width="0.5"/>
  </g>
  <g id="Flower2BeeLeftWing" filter="url(#filter2_d_127_196)">
  <path d="M57.5026 58.0127C66.176 56.9362 76.3435 59.0227 77.3188 64.5943C79.7307 68.1206 75.4996 76.7576 60.4199 80.8324C45.7492 83.0022 35.5189 78.012 36.6334 72.0743C37.7479 66.1366 45.3626 61.1734 57.5026 58.0127Z" fill="white"/>
  <path d="M57.5026 58.0127C66.176 56.9362 76.3435 59.0227 77.3188 64.5943C79.7307 68.1206 75.4996 76.7576 60.4199 80.8324C45.7492 83.0022 35.5189 78.012 36.6334 72.0743C37.7479 66.1366 45.3626 61.1734 57.5026 58.0127Z" stroke="black" stroke-width="0.5"/>
  </g>
  <path id="cirrclee" d="M97.5 68.5C97.5 74.8891 95.5158 80.655 92.331 84.813C89.1465 88.9705 84.7824 91.5 80 91.5C75.2176 91.5 70.8535 88.9705 67.669 84.813C64.4842 80.655 62.5 74.8891 62.5 68.5C62.5 62.1109 64.4842 56.345 67.669 52.187C70.8535 48.0295 75.2176 45.5 80 45.5C84.7824 45.5 89.1465 48.0295 92.331 52.187C95.5158 56.345 97.5 62.1109 97.5 68.5Z" fill="#FFFF00" stroke="black"/>
  <g id="Vector 54">
  <path d="M95.0004 58H64.5004C63.5407 59.745 63.2125 60.9495 63.0004 63.5H96.5004C96.3347 61.1796 96.2532 60.3039 95.0004 58Z" fill="black"/>
  <path d="M96.0004 76.5C96.9198 74.3505 97.175 73.0567 97.0004 70.5H62.5004C62.3538 72.8587 62.5313 74.106 63.5004 76.5H96.0004Z" fill="black"/>
  <path d="M87.5004 89C90.6809 87.1888 91.9576 85.8335 93.5004 83H66.5004C67.9029 85.6875 68.9478 87.003 71.5004 89H87.5004Z" fill="black"/>
  <path d="M74.5 51.5C78.9035 54.8796 81.3163 54.707 85.5 51.5M70 39.5C75.4349 38.664 77.8597 39.9901 81 45C83.6981 39.7224 86.4349 38.9025 92.5 39.5M64.5004 58H95.0004C96.2532 60.3039 96.3347 61.1796 96.5004 63.5H63.0004C63.2125 60.9495 63.5407 59.745 64.5004 58ZM97.0004 70.5C97.175 73.0567 96.9198 74.3505 96.0004 76.5H63.5004C62.5313 74.106 62.3538 72.8587 62.5004 70.5H97.0004ZM93.5004 83C91.9576 85.8335 90.6809 87.1888 87.5004 89H71.5004C68.9478 87.003 67.9029 85.6875 66.5004 83H93.5004Z" stroke="black"/>
  </g>
  <g id="Ellipse 9">
  <circle cx="68.5" cy="39.5" r="1.25" fill="black"/>
  <circle cx="68.5" cy="39.5" r="1.25" fill="black"/>
  <circle cx="68.5" cy="39.5" r="1.25" fill="black"/>
  <circle cx="68.5" cy="39.5" r="1.25" stroke="white" stroke-width="0.5"/>
  </g>
  <g id="Ellipse 10">
  <circle cx="93.5" cy="40.5" r="1.25" fill="black"/>
  <circle cx="93.5" cy="40.5" r="1.25" fill="black"/>
  <circle cx="93.5" cy="40.5" r="1.25" fill="black"/>
  <circle cx="93.5" cy="40.5" r="1.25" stroke="white" stroke-width="0.5"/>
  </g>
  </g>
  </g>
  </g>
  <defs>
  <filter id="filter0_d_127_196" x="20.292" y="45.4424" width="119.212" height="117.577" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_127_196"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_127_196" result="shape"/>
  </filter>
  <filter id="filter1_d_127_196" x="79.4785" y="57.0615" width="49.708" height="32.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_127_196"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_127_196" result="shape"/>
  </filter>
  <filter id="filter2_d_127_196" x="32.2998" y="57.4893" width="49.9033" height="32.1104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_127_196"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_127_196" result="shape"/>
  </filter>
  </defs>
  </svg>

  return ( 
    <div style={heightStyle} class="Flower2">
      {FlowerImg2}
    </div>
    
   );
}
 
export default Flower2;