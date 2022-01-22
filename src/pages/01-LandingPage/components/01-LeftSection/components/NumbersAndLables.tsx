const NumbersAndLables = ({MargTop}:any) => {
let container={"width":"300px","marginTop":MargTop}

  return ( 
    <div style={{"display":"flex","width":"80%","justifyContent":"center"}}>
        <div style={container}>
          <h5>45k+</h5>
          <h6 style={label}>Copies</h6>
        </div>
        <div style={container}>
          <h5>30+</h5>
          <h6 style={label}>Animations</h6>
        </div>
        <div style={container}>
          <h5>10k+</h5>
          <h6 style={label}>Users</h6>
        </div>
      </div>
   );
}
 
export default NumbersAndLables;

let label={"fontSize":"0.9rem","marginTop":"10px","color":"gray"}