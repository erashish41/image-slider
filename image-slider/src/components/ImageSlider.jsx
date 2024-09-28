import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


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

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    
    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if(url !== "") fetchImage(url);
    },[url]);
    // this means if url is not empty it will call fetchImage() method

    if(loading) {
        return <div>Loading data! Please wait</div>
    }

    if(errorMsg){
       return <div>Error occured! {errorMsg}</div>
    }

    return (
        <div className= "container">
            <BsArrowLeftCircleFill 
                onClick={handlePrevious}
                className="arrow arrow-left"/>
            {
                images && images.length > 0
                ? images.map((imageItem, index) => {
                   return <img 
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                })
                : null
            }

            <BsArrowRightCircleFill 
                onClick={handleNext}
                className="arrow arrow-right"/>
            <span className="circle-indicator">
                {
                    images && images.length > 0
                    ? images.map((_,index) => {
                        return <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                            onClick={() => setCurrentSlide(index)}></button>
                    })
                    : null
                }
            </span>
        </div>
    )
    
}