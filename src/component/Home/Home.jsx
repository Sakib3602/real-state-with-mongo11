import HomeMap from "../Authentication/Pages/HomeMap";
import HomeCard from "./HomeCard";
import HomeComp1 from "./HomeComp1";
import HomeComp2 from "./HomeComp2";


const Home = () => {
    return (
        <div>
            {/*  */}
            <HomeComp1></HomeComp1>

            <HomeComp2></HomeComp2>

            <HomeCard></HomeCard>

            <HomeMap></HomeMap>
            
        </div>
    );
};

export default Home;