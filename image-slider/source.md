<!-- I M A G E     S L I D E R  -->

- index.html
- main.jsx
- App.jsx
- index.css

- components
    - ImageSlider.jsx



1.ImageSlider.jsx
- make a component called ImageSlider 
- then useState is used for inital values as
    -useState([]); 
    -useState(0);

- then useEffect is used to perform side effects in functional components
    -useEffect(() => {
        if(url !== "") fetchImage();
    },[])
- When the dependency array is empty [], the useEffect behaves like componentDidMount. 
- useEffect(() => {}, []) = componentDidMount: Runs only once when the component mounts.
- useEffect(() => {}, [url]) = Runs on mount and whenever url changes: Executes both when 
    the component mounts and whenever the value of url changes.

- Error and Loading is added for better convenience, to handle error and loading messages.

- the main logic is this : 
        const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    
    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

- also added 2 icon from react-icon
    BsArrowLeftCircleFill, 
    BsArrowRightCircleFill

- we also use map function to render the data.