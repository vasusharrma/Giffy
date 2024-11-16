import {useEffect, useState} from "react";
import API_Key from "../utils/API_key.js";
import axios from "axios";

const useRandomGif = (toggleBtn ,setGifValue , gifValue) => {

    const[gitUrl , setGitUrl] = useState(null);

    useEffect(() => {
        setGifValue("");
        fetchedData();
        console.log(toggleBtn);
    }, [toggleBtn]);


    const fetchedDataInput = async () =>{
        setGitUrl(null);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}&q=${gifValue}`;
        const gotUrl = await axios.get(url);
        setGitUrl(gotUrl?.data?.data?.images?.downsized?.url);
    }

    useEffect(()=>{
        fetchedDataInput();
    },[gifValue])

    const fetchedData = async () => {
        setGitUrl(null);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
        const gotUrl = await axios.get(url);
        console.log(gotUrl);
        setGitUrl(gotUrl?.data?.data?.images?.downsized?.url);
    };

    return gitUrl;

}


export default useRandomGif;