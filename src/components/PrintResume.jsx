import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { TemplateOne } from "./ResumeTemplates/TemplateOne";
import { TemplateTwo } from "./ResumeTemplates/TemplateTwo";
import { useDetails } from "../context/DetailsProvider";

export function PrintResume() {
  const componentRef = useRef();
  const { detailState, dispatchDetail } = useDetails();
  const { template } = detailState;
  return (
    <div className="w-full  mx-auto my-2 p-2 border-2 border-coolGray rounded shadow-xl">
      <div className="flex flex-col md:flex-row w-full m-auto scale-50 md:scale-75 transform overflow-hidden">
        <div
          className={`border-2 ${
            template === "one" ? "border-red-500" : "border-grey"
          } m-2 cursor-pointer	`}
          onClick={() =>
            dispatchDetail({ type: "CHOOSE_TEMPLATE", payload: "one" })
          }
        >
          <TemplateOne refrence={template === "one" ? componentRef : null} />
        </div>
        <div
          className={`border-2 ${
            template === "two" ? "border-red-500" : "border-grey"
          } m-2 cursor-pointer	`}
          onClick={() =>
            dispatchDetail({ type: "CHOOSE_TEMPLATE", payload: "two" })
          }
        >
          <TemplateTwo refrence={template === "two" ? componentRef : null} />
        </div>
      </div>
      <div className="flex align-center justify-center mt-3">
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
  );
}
