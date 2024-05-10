import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => { 

    const [mainData,setMainData] = useState(null)

    const idParam = useParams()
    console.log(idParam.id)
    

   useEffect(()=>{
    const getdata = async()=>{
        try {
            const data1 = await axios.get(`http://localhost:4000/details/${idParam.id}`)
            setMainData(data1.data)
            console.log(data1.data)
    
            
        } catch (error) {
            // console.log(error.massage)
        }
       }
       getdata()
   },[])

    return (
        <div className="w-full md:w-[80%] lg:w-[75%] m-auto border flex flex-col lg:flex-row md:flex-row">

            <div>
            <img className="h-[580px]" src={mainData.RoomImages} alt="" />
            </div>
            <div>
                <h1 className="text-[55px]">{mainData.RoomDescription}.</h1>
                <h1 className="text-[35px]">Price Per NIght : ${mainData.PricePerNight}</h1>
                <h1 className="text-[32px]">Room Size : {mainData.RoomSize}</h1>
                <h1  className="text-[32px]">Available : {mainData.Availability ? "Yes" : "No"}</h1>
                <h1 className="text-[32px]">Special : {mainData.SpecialOffers}</h1>
                <h1 className="text-[32px]">Review : {mainData.Reviews}</h1>
               
            </div>
            
            
        </div>
    );
};

export default Details;