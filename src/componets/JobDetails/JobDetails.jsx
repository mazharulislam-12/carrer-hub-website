import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utliti/LocalStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)

    const handApplyJob = () =>{
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }

    return (
        <div>
        <h2>Job Details of: {job.job_title} </h2>                  
        <div className="grid gap-4 md:grid-cols-4">
            <div className="border md:col-span-3">
                <h2>Details coming here {job.company_name} </h2>
                <h2>{job.job_title}</h2>
                <h2>{job.job_description}</h2>
                <h2>Job Responsibilit : <br /> {job.job_responsibility} </h2>
                <h2>Educational Requirements : <br /> {job.educational_requirements} </h2>
                <h2>Experiences: <br /> {job.experiences} </h2>
            </div>
            <div className="border">
                <h2 className="text-2xl">Job Details</h2>
                <p>Salary: {job.salary} </p>
                <p>Job Title : {job.job_title}</p>
                <p>Contact Information</p>
                <p>Phone: {job.contact_information.phone} </p>
                <p>Phone: {job.contact_information.address} </p>
                <p>Phone: {job.contact_information.email} </p>
                <button onClick={handApplyJob} className="btn btn-primary">Apply Now</button>
            </div>
            <ToastContainer />
        </div>
        </div>
    );
};

export default JobDetails;