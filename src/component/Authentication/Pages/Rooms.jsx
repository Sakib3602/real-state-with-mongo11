import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const [sort, setSort] = useState("");
 

  const getData = async () => {
    try {
      setLoad(true);
      const data1 = await axios.get(
        `https://assingment11-two.vercel.app/homeCard?PricePerNight=${sort}`
      );

      setData(data1.data);
      console.log(data1.data);
      setLoad(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  console.log("sssssssssssssssssssss", sort);

  useEffect(() => {
    getData();
  }, [sort]);


// console.log(data.RoomDescription,"rorrorororo")

// 
  return (
    <div>
      <div className="px-4 py-16 mt-10 rounded-xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-100 dark:text-gray-800">
        <h2 className="mb-8 text-4xl font-bold leading-none text-center">
          What do we have to offer?
        </h2>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-violet-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Ea et neque distinctio</span>
          </li>
          <Helmet>
          
          <title>COZI- All Rooms</title>
        </Helmet>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-violet-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Quaerat obcaecati voluptatem </span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-violet-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Quas eius repudianda</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-violet-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Free and MIT licensed</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-violet-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Praesentium ea et neque distinctio</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-violet-600"
            >
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
        <button
          onClick={() => setSort("des")}
          className="btn btn-sm lg:ml-[200px] mb-5"
        >
          FILTER BY PRICE
        </button>
      </div>

      {/* {load && <h1 className="text-[100px] text-black">LOading</h1>} */}
      {load && <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" className="pencil">
	<defs>
		<clipPath id="pencil-eraser">
			<rect height="30" width="30" ry="5" rx="5"></rect>
		</clipPath>
	</defs>
	<circle transform="rotate(-113,100,100)" stroke-linecap="round" stroke-dashoffset="439.82" stroke-dasharray="439.82 439.82" stroke-width="2" stroke="currentColor" fill="none" r="70" className="pencil__stroke"></circle>
	<g transform="translate(100,100)" className="pencil__rotate">
		<g fill="none">
			<circle transform="rotate(-90)" stroke-dashoffset="402" stroke-dasharray="402.12 402.12" stroke-width="30" stroke="hsl(223,90%,50%)" r="64" className="pencil__body1"></circle>
			<circle transform="rotate(-90)" stroke-dashoffset="465" stroke-dasharray="464.96 464.96" stroke-width="10" stroke="hsl(223,90%,60%)" r="74" className="pencil__body2"></circle>
			<circle transform="rotate(-90)" stroke-dashoffset="339" stroke-dasharray="339.29 339.29" stroke-width="10" stroke="hsl(223,90%,40%)" r="54" className="pencil__body3"></circle>
		</g>
		<g transform="rotate(-90) translate(49,0)" className="pencil__eraser">
			<g className="pencil__eraser-skew">
				<rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
				<rect clip-path="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
				<rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
				<rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
				<rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
				<rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
				<rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
			</g>
		</g>
		<g transform="rotate(-90) translate(49,-30)" className="pencil__point">
			<polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
			<polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
			<polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
		</g>
	</g>
</svg>}
      <div className="bg-[#293624] grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 lg:grid-cols-2 md:px-[100px] lg:px-[200px]">
        {data.map((e) => (
          <div
            key={e._id}
            className="card lg:card-side bg-black hover:bg-white text-white hover:text-black shadow-xl"
          >
            <figure>
              <img className="lg:h-[500px]" src={e?.RoomImages} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">{e?.RoomDescription}</h2>
			  <p>Price : ${e?.PricePerNight}</p>
              
              <Link to={`/detail/${e._id}`}>
                <button className="btn btn-sm btn-wide">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;

{
  /* <Link to={`/detail/${e._id}`}>
<button className="btn btn-success">Know More</button>
</Link> */
}
