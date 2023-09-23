
const Bannner = () => {
    return (
        <div>
            <div className="flex  items-center bg-[#a7daef] rounded-md">
                <div className="flex-1 p-9">
                    <h2 className="text-6xl font-semibold">One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span> </h2>
                    <p className="my-3">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>

                <div className="flex-1">
                    <img src="assets/images/user.png" alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default Bannner;