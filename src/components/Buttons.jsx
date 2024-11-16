
const Buttons = (props) => {

   const {toggleBtn , setToggleBtn , gifValue , setGifValue} = props;

  return (
    <div className="buttonSection">
      <button className={"buttonSection_inside"} onClick={() => {
          (toggleBtn == true)?setToggleBtn(false):setToggleBtn(true);
          console.log(toggleBtn);
      }}>Randomize</button>
      <input
        className={"buttonSection_inside"}
        type="text"
        value={gifValue}
        placeholder={"Search for...."}
        onChange = {(e)=>{
           setGifValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Buttons;
