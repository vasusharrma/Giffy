
const Buttons = ({toggleBtn , setToggleBtn}) => {
  return (
    <div className="buttonSection">
      <button className={"buttonSection_inside"} onClick={() => {
          (toggleBtn == true)?setToggleBtn(false):setToggleBtn(true);
          console.log(toggleBtn);
      }}>Randomize</button>
      <input
        className={"buttonSection_inside"}
        type="text"
        placeholder={"Search for...."}
      />
    </div>
  );
};

export default Buttons;
