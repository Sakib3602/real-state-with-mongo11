import { useEffect, useState } from "react";
import HomeMap from "../Authentication/Pages/HomeMap";
import HomeCard from "./HomeCard";
import HomeComp1 from "./HomeComp1";
import HomeComp2 from "./HomeComp2";
import HomeNews from "./HomeNews";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

const Home = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch(`https://assingment11-two.vercel.app/reviewSpecific`)
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  useEffect(()=>{
    document.getElementById('my_modal_1').showModal()
  },[])
  console.log(reviewData, "from home");
  return (
    <div>
      {/*  */}
      <HomeComp1></HomeComp1>

      <HomeComp2></HomeComp2>

      <HomeCard></HomeCard>

      <HomeMap></HomeMap>

      <HomeNews></HomeNews>
     
      <Helmet>
          
          <title>COZI- Home</title>
        </Helmet>
      <Marquee>
      <div className=" flex m-5">

        {
            reviewData.map((e) => <div key={e._id} className="container p-4  flex flex-col w-full max-w-lg  mx-auto divide-y rounded-md dark:divide-gray-300 bg-gray-300 dark:text-gray-800">
            <div className="flex justify-between p-4 ">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={e.photo}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{e.email}</h4>
                  <span className="text-xs dark:text-gray-600">Time : {e.time}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">{e.hereRating}</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
              <p>
                {e.words}
              </p>
              
            </div>
          </div> )
        }
        
       
      </div>

      </Marquee>


      {/*  */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-red-950 text-white">
    <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <p className="py-4 text-[34px]">60% Discount</p>
    <p className=" text-[24px]">Explore Our Offers!</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm">Close</button>
      </form>
    </div>
  </div>
</dialog>
      {/*  */}

      
    </div>
  );
};

export default Home;
