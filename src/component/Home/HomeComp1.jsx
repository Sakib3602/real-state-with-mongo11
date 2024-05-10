import homeVid from "../../assets/6474964-uhd_4096_2160_25fps.mp4"

const HomeComp1 = () => {
    return (
        <div>
            <video src={homeVid} autoPlay loop muted></video>
        </div>
    );
};

export default HomeComp1;