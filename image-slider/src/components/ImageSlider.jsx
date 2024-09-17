import { useEffect, useState } from "react";

export const ImageSlider = ({url, limit}) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if(url !== "") fetchImage();
    },[])

    return (
        <div className= "container">
            
        </div>
    )
}