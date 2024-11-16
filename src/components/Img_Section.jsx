import {RiseLoader} from "react-spinners";
import useRandomGif from "../customHooks/useRandomGif.jsx";

const Img_Section = ({ toggleBtn, gifValue , setGifValue }) => {

  const gitUrl = useRandomGif(toggleBtn , setGifValue, gifValue);



  if (gitUrl == null) {
    return (
        <div className={'imgContainer'}>
          <RiseLoader/>
        </div>
    )
  } else {
    return (
        <div className="imgContainer">
        <img src={gitUrl} alt="gif_img" className="imgContainer_img" />
      </div>
    );
  }
};

export default Img_Section;
