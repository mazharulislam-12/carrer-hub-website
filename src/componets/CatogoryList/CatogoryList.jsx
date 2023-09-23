
const CatogoryList = () => {
    return (
        <div>
            <div className="text-center">
            <h2 className="text-5xl my-5">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6 mb-10">
                <div className="bg-[#7E90FE0D] p-8 rounded-md shadow-md">
                <img src="assets/logo/airbnb.png" alt=""></img>
                <h3 className="text-xl font-medium my-3">Account & Finance</h3>
                <p><small>300 Jobs Available</small></p>
                </div>

                <div className="bg-[#7E90FE0D] p-8 rounded-md shadow-md">
                <img src="assets/logo/tesla.png" alt=""></img>
                <h3 className="text-xl font-medium my-3">Account & Finance</h3>
                <p><small>100+ Jobs Available</small></p>
                </div>

                <div className="bg-[#7E90FE0D] p-8 rounded-md shadow-md">
                <img src="assets/logo/google.png" alt=""></img>
                <h3 className="text-xl font-medium my-3">Account & Finance</h3>
                <p><small>150 Jobs Available</small></p>
                </div>

                <div className="bg-[#7E90FE0D] p-8 rounded-md shadow-md">
                <img src="assets/logo/netflix.png" alt=""></img>
                <h3 className="text-xl font-medium my-3">Account & Finance</h3>
                <p><small>224 Jobs Available</small></p>
                </div>
            </div>
            
        </div>

            

    );
};

export default CatogoryList;