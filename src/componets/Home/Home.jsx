import Bannner from "../Banner/Bannner";
import CatogoryList from "../CatogoryList/CatogoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Bannner></Bannner>
            <CatogoryList></CatogoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;