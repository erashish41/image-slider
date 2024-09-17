<!-- I M A G E     S L I D E R  -->

- index.html
- main.jsx
- App.jsx

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