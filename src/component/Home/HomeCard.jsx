import axios from "axios";
import { useEffect, useState } from "react";


const HomeCard = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try {
            const data1 = await axios.get('http://localhost:4000/homeCard');
            
            setData(data1.data)
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    // console.log(data)

    return (
        <div className="text-center mt-10 h-full">
            <h1 className="text-[28px] lg:text-[56px] md:text-[56px] font-[700]">SELECT OUR BEST ROOMS!</h1>
            <div className="w-[95%] lg:[60%] md:w-[60%] m-auto">
           <p className="text-[18px] font-[400]">
           Discover the epitome of luxury and comfort with our selection of premium rooms. Immerse yourself in sophistication and elegance as you choose from our finest accommodations, meticulously crafted to exceed your expectations. Book now for an unforgettable stay!
           </p>
            </div>
                <h1>data length : {data.length}</h1>

            <div className="bg-[#293624]  lg:min-h-[1620px] p-2 md:p-[40px] lg:p-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
                
                {/* card start */}
                {
                    data.slice(0,6).map(e => <div key={e._id} className="h-[300px] w-[400px]">
                    <img src={e.RoomImages} alt="" />
                    <h1 className="mt-3 text-[25px]">{e.RoomDescription}</h1>
                    <h1>Room Size : {e.RoomSize}</h1>
                    <h1 className="text-[20px]">Price Per Night : {'$'+e.PricePerNight}</h1>
                    <button className="btn">BOOK NOW</button>

                </div>)
                }
                {/* card end */}

            </div>
            
        </div>
    );
};

export default HomeCard;