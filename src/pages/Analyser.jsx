import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { BiSad } from "react-icons/bi";

export function Analyser() {
  const [jobs, setJobs] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        const api = "https://resume-builder.sauravkumar007.repl.co/analyser";
        const response = await axios.get(api);
        setJobs(response.data.matchedJobs);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {loader ? (
        <div className="mt-20">
          <Spinner />
        </div>
      ) : jobs?.length === 0 ? (
        <div>
          <p className="text-3xl font-bold text-black pt-10">
            Currently No Jobs Available
          </p>
          <div className="w-max text-7xl m-auto py-2">
            <BiSad />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl my-4 font-medium">Jobs Available</h2>
          <div className="flex flex-col items-center">
            {jobs?.map((job) => {
              return (
                <div
                  key={job._id}
                  className="m-2 p-5 border-2 border-current flex items-start justify-between w-11/12 max-w-2xl border-2 border-current rounded-md"
                >
                  <div className="text-left w-9/12">
                    <div className="my-2">
                      <p className="text-grey">Name</p>
                      <p>{job.company}</p>
                    </div>
                    <div className="my-2">
                      <p className="text-grey">Skills Required</p>
                      <p>{job.requirements.join(", ").toUpperCase()}</p>
                    </div>
                    <div className="my-2">
                      <p className="text-grey">Description</p>
                      <p>
                        {job.description} Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magnam, laboriosam.
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${job.email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary text-white text-sm font-bold my-2 py-2 px-4 hover:bg-btn_hover rounded"
                  >
                    Apply
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
