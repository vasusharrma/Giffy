import Img_Section from "./Img_Section.jsx";
import Buttons from "./Buttons.jsx";
import { useState } from "react";

const Wrapper = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  return (
    <>
      <Img_Section toggleBtn={toggleBtn} />
      <Buttons setToggleBtn={setToggleBtn} toggleBtn={toggleBtn} />
    </>
  );
};

export default Wrapper;
