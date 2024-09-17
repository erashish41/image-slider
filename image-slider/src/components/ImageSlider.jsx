import { useEffect, useState } from "react";

export const ImageSlider = ({url, page=1, limit=5}) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImage(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            console.log(data);

            if(data) {
                setImages(data);
                setLoading(false);
            }

        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
        
    }

    useEffect(() => {
        if(url !== "") fetchImage(url);
    },[url]);

    if(loading) {
        return <div>Loading data! Please wait</div>
    }

    if(errorMsg){
       return <div>Error occured! {errorMsg}</div>
    }

    return (
        <div className= "container">
            
        </div>
    )
}