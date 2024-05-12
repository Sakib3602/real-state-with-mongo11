import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const [sort,setSort] = useState('')
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoad(true);
      const data1 = await axios.get(`http://localhost:4000/homeCard?sort=${sort}`);

      setData(data1.data);
      console.log(data1.data)
      setLoad(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  console.log("sssssssssssssssssssss",sort)
  return (
    <div>
        <div className="px-4 py-16 mt-10 rounded-xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-100 dark:text-gray-800">
	<h2 className="mb-8 text-4xl font-bold leading-none text-center">What do we have to offer?</h2>
	<ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
				<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
				<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
			</svg>
			<span>Ea et neque distinctio</span>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
				<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
				<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
			</svg>
			<span>Quaerat obcaecati voluptatem </span>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
				<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
				<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
			</svg>
			<span>Quas eius repudianda</span>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
				<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
				<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
			</svg>
			<span>Free and MIT licensed</span>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
				<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
				<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
			</svg>
			<span>Praesentium ea et neque distinctio</span>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-violet-600">
				<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
				<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
			</svg>
			<span>Architecto beatae esse ab amet </span>
		</li>
	</ul>
</div>
{/*  */}

{/*  */}



<div className="bg-[#293624] mt-10 pt-10 text-white">
    
<h1 className="text-[28px] text-center lg:text-[56px] md:text-[56px] font-[700]">
        OUR ALL ROOMS!
      </h1>
      <div className="w-[95%] lg:[60%] md:w-[60%] m-auto">
        <p className="text-[18px] text-center font-[400] pb-8">
          Explore our diverse range of rooms designed to cater to your every
          need. From cozy and intimate spaces to luxurious suites, we offer
          comfort and style for every traveler. Discover your perfect retreat
          today!
        </p>
      </div>
	  <button onClick={()=> setSort('des')} className="btn btn-sm lg:ml-[200px] mb-5">FILTER BY PRICE</button>
</div>

      {load && <h1 className="text-[100px] text-black">LOading</h1>}
      <div className="bg-[#293624] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:px-[100px] lg:px-[200px]">
        {
            data.map(e => <div className=" space-y-2 text-white  h-[590px] w-full" key={e._id}>

<img className="w-full h-[450px] transition-transform duration-300 ease-in hover:scale-105 object-cover" src={e.RoomImages} alt="" />

                <h1>{e.RoomDescription}</h1>
                
                
                <h1>Price Per Night : ${e.PricePerNight}</h1>

                <Link to={`/detail/${e._id}`}><button className="btn btn-success">Know More</button></Link>

                




            </div>)

        }
      </div>











    </div>
  );
};

export default Rooms;
