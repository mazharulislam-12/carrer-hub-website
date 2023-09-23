import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utliti/LocalStorage";

const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJob]= useState([]);

    const handleJobsFilter = filter =>{
        if (filter === 'all') {
            setDisplayJob(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJob(remoteJobs);
        }
        else if (filter === 'onsite') {
            const  onsideJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJob(onsideJobs);
        }

    }


    const jobs = useLoaderData();
    useEffect( ()=>{
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes (job.id))

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);
            setDisplayJob(jobsApplied);
            // console.log(jobsApplied)
        }
    },[jobs])

    return (
        <div>
            <h2 className="text-2xl">Job I Applied : {appliedJobs.length} </h2>

                <details className="dropdown mb-32">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All Job</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onside</a></li>
                    </ul>
                </details>

            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span> {job.job_title}  {job.company_name} : {job.remote_or_onsite} </span>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;