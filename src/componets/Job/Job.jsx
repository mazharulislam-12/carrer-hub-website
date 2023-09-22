import { MdLocationOn } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

  return (
    <div className='card card-compact  bg-base-100 shadow-xl p-8'>
      <figure>
        <img
          src={logo}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{job_title}</h2>
        <p>{company_name}</p>

        <div className="mt-2">
            <button className=" text-[#7E90FE] px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4"> {remote_or_onsite} </button>
            <button  className=" text-[#7E90FE] px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4"> {job_type} </button>
          </div>

        <div className="mt-2 mb-2 flex items-center gap-4">
          <h2 className="flex mr-2"><MdLocationOn className="text-2xl">  </MdLocationOn>{location}</h2>
          <h2 className="flex"><AiFillDollarCircle className="text-2xl "></AiFillDollarCircle> {salary} </h2>
        </div>

        <div className='card-actions'>
          <Link to={`/job/${id}`}>
              <button className='btn btn-primary'>View Details</button>
          </Link>         
        </div>
      </div>
    </div>
  );
};

export default Job;
