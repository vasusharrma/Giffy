import { useState, useEffect } from "react";
import API_Key from "../utils/API_key.js";
import axios from "axios";
import {RiseLoader} from "react-spinners";

const Img_Section = ({ toggleBtn, gifValue }) => {
  const [gitUrl, setGitUrl] = useState(null);


  const fetchedData = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
    const gotUrl = await axios.get(url);
    console.log(gotUrl);
    setGitUrl(gotUrl?.data?.data?.images?.downsized?.url);
  };
  const fetchedDataInput = async () =>{
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}&q=${gifValue}`;
    const gotUrl = await axios.get(url);
    setGitUrl(gotUrl?.data?.data?.images?.downsized?.url);
  }

  useEffect(() => {
    fetchedData();
    console.log(toggleBtn);
  }, [toggleBtn]);

  useEffect(()=>{
    fetchedDataInput();
  },[gifValue])

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
