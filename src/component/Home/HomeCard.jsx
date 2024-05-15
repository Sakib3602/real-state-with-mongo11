import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomeCard = () => {
    const [data, setData] = useState([]);
    const [load,setLoad] = useState(false);

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try {
            setLoad(true)
            const data1 = await axios.get('https://assingment11-two.vercel.app/homeCard');
            // https://assingment11-two.vercel.app
            
            setData(data1.data)
            setLoad(false)
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
                

                {
                        load && <h1 className="text-[100px] text-black">LOading</h1>
                        // bg-[#293624]
                    }

            <div className="bg-[#293624] p-3 md:p-6 lg:p-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                
                {/* card start */}
                

                {
                    data.slice(0,6).map(e => <div key={e._id} className="card lg:card-side bg-black hover:bg-white text-white hover:text-black shadow-xl">
                    <figure><img className="lg:h-[500px]" src={e.RoomImages} alt="Album"/></figure>
                    <div className="card-body">
                      <h2 className="card-title ">{e.RoomDescription}</h2>
                      <p>Room Size : {e.RoomSize}</p>
                      <Link to={`/detail/${e._id}`}>
                <button className="btn btn-sm btn-wide">Book Now</button>
              </Link>
                      <button className="btn btn-sm hover:bg-black hover:text-white">Add To Dream List</button>
                    </div>
                  </div>)
                }
               
                






                {/* card end */}

            </div>
            
        </div>
    );
};

export default HomeCard;