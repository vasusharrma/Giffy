import { useState, useEffect } from "react";
import API_Key from "../utils/API_key.js";
import {RiseLoader} from "react-spinners";

const Img_Section = ({ toggleBtn }) => {
  const [gitUrl, setGitUrl] = useState(null);

  const fetchedData = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
    const getUrl = await fetch(url);
    const gotUrl = await getUrl.json();
    console.log(gotUrl);
    setGitUrl(gotUrl?.data?.data?.images?.downsized?.url);
  };

  useEffect(() => {
    fetchedData();
    console.log(toggleBtn);
  }, [toggleBtn]);

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
