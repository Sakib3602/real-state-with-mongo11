import HomeMap from "../Authentication/Pages/HomeMap";
import HomeCard from "./HomeCard";
import HomeComp1 from "./HomeComp1";
import HomeComp2 from "./HomeComp2";
import HomeNews from "./HomeNews";


const Home = () => {
    return (
        <div>
            {/*  */}
            <HomeComp1></HomeComp1>

            

            <HomeComp2></HomeComp2>

            <HomeCard></HomeCard>

            <HomeMap></HomeMap>
            
            <HomeNews></HomeNews>
            
        </div>
    );
};

export default Home;