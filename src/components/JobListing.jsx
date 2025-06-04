import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job, index }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div
      className="bg-white rounded-xl shadow-md relative"
      key={index}
      id={`${job.id}`}
    >
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">
          {description}{" "}
          <button
            className="showfull-desc text-indigo-500 hover:text-indigo-700 hover:underline"
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            type="button"
          >
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        </div>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 flex gap-1 items-center">
            <FaMapMarker className="inline text-lg" />
            <div>{job.location}</div>
          </div>
          <a
            href={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
