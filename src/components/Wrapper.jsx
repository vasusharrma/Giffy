import Img_Section from "./Img_Section.jsx";
import Buttons from "./Buttons.jsx";
import { useState } from "react";

const Wrapper = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const [gifValue , setGifValue] = useState("");

  return (
    <>
      <Img_Section toggleBtn={toggleBtn} gifValue={gifValue} setGifValue={setGifValue}/>
      <Buttons setToggleBtn={setToggleBtn} toggleBtn={toggleBtn} gifValue={gifValue} setGifValue={setGifValue} />
    </>
  );
};

export default Wrapper;
