import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { useDetails } from "../context/DetailsProvider";

export function Navbar(){
    const { detailState:{ step } } = useDetails();

    const scrollToTopRef = useRef(null);
    useEffect(() => {
        scrollToTopRef.current.scrollIntoView();
    }, [step])

    return(
        <nav ref={scrollToTopRef} className="text-white bg-primary p-4 sticky flex items-center justify-between"> 
            <Link to="/" className="text-2xl font-bold">Resume Builder</Link>
            <button className="text-xl">{ <FaUser/> }</button>
        </nav>
    )
}