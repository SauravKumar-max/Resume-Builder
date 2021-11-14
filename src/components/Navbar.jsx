// import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
// import { useRef } from "react";
// import { useEffect } from "react/cjs/react.development";
// import { useDetails } from "../context/DetailsProvider";

export function Navbar(){
    // const { detailState:{ step } } = useDetails();

    // const scrollToTopRef = useRef(null);
    // useEffect(() => {
    //     scrollToTopRef.current.scrollIntoView();
    // }, [step])

    return(
        <nav> 
            <p>Resume Builder</p>
            <button>{ <FaUser/> }</button>
        </nav>
    )
}