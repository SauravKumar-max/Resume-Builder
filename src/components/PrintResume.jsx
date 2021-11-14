import ReactToPrint from "react-to-print";
import { ResumeTemplate } from "./ResumeTemplate";
import { useRef } from "react";

export function PrintResume(){
    const componentRef = useRef();
    return (
        <div className="w-11/12  mx-auto my-10 p-5 border-2 border-coolGray rounded shadow-xl">
                    <div className="w-full m-auto transform scale-100 md:scale-50 border border-grey">
                        <ResumeTemplate refrence={componentRef}/>
                    </div>
                    <div className="flex align-center justify-center mt-5">
                        <ReactToPrint
                            trigger={() => (
                                <button className="bg-primary text-white text-lg font-bold px-4 py-2 hover:bg-btn_hover rounded">
                                    Print Resume
                                </button>
                            )}
                            content={() => componentRef.current}
                        />
                    </div>
                </div>
    )
}