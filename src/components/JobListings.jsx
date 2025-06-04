import { Suspense, useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const fetchJobs = async (isHome) => {
  const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return response.json();
};

const JobListings = ({ isHome = false }) => {
  const [jobLists, setJobLists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs(isHome).then(setJobLists).catch(setError);
  }, [isHome]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <Suspense fallback={<Spinner loading={true} />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobLists.map((job, index) => (
              <JobListing job={job} key={index} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default JobListings;
