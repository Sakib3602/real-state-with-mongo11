import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
const Details = () => {
  const { person } = useContext(AuthContext);
  console.log(person?.email, "details page");
  const [mainData, setMainData] = useState(null);

  const idParam = useParams();
  console.log(idParam.id);
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [reviewData, setReviewData] = useState("");
  // console.log(startDate)
  // console.log(startDate2)
  const forMakeAnother = {
    email: person?.email,
    RoomDescription: mainData?.RoomDescription,
    From: startDate.toLocaleDateString(),
    To: startDate2.toLocaleDateString(),
    Price: mainData?.PricePerNight,
  };

  console.log(forMakeAnother, "sknci");

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const data1 = await axios.get(
        `http://localhost:4000/details/${idParam.id}`
      );
      setMainData(data1.data);
    } catch (error) {
      // console.log(error.massage)
    }
  };

  const nameOfTheData = mainData?.RoomDescription
  console.log(nameOfTheData,"skmcsdncinj")    // Luxury Penthouse with Private Pool
  useEffect(() => {
    fetch(
      `http://localhost:4000/reviewSpecific?name=${nameOfTheData}`
    )
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, [nameOfTheData]);

  console.log(reviewData, "from detail");


  const updatePatch = async (id, Availability) => {
    const { data } = await axios.patch(`http://localhost:4000/update/${id}`, {
      Availability,
    });
    const insertValue = await axios.post(
      "http://localhost:4000/insertItemsAfterBooking",
      forMakeAnother
    );
    console.log(insertValue);
    console.log(data);
    getdata();
  };

  const navigate = useNavigate();

  function handleOk() {
    toast.success("Successfully Booked!");
    navigate("/myBookings");
  }

  return (
    <div className="w-full md:w-[80%] mt-10 rounded-2xl bg-black text-white gap-12 lg:w-[75%] m-auto border flex flex-col lg:flex-row md:flex-row">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COZI- Details</title>
        </Helmet>
        <img className="h-[580px]" src={mainData?.RoomImages} alt="" />
      </div>
      <div>
        <h1 className="text-[50px]">{mainData?.RoomDescription}.</h1>
        <h1 className="text-[35px]">
          Price Per NIght : ${mainData?.PricePerNight}
        </h1>
        <Toaster />
        <h1 className="text-[32px]">Room Size : {mainData?.RoomSize}</h1>
        <h1 className="text-[32px]">
          Available : {mainData?.Availability ? "Yes" : "No"}
        </h1>
        <h1 className="text-[32px]">Special : {mainData?.SpecialOffers}</h1>
        <h1 className="text-[32px]">Review : {mainData?.Reviews}</h1>

        <div>
          <h1>From :</h1>
          <DatePicker
            className="border p-2 rounded-md text-black"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <h1>To :</h1>
          <DatePicker
            className="border p-2 rounded-md text-black"
            selected={startDate2}
            onChange={(date) => setStartDate2(date)}
          />
        </div>

        {/* modal */}

        <button
          className="btn btn-wide btn-sm mt-4"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Book Now
        </button>
        <dialog id="my_modal_3" className="modal text-stone-950">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h1 className="text-[35px]">{mainData?.RoomDescription}.</h1>
            <h1 className="text-[23px]">Room Size : {mainData?.RoomSize}</h1>
            <h1 className="text-[35px]">
              Price Per NIght : ${mainData?.PricePerNight}
            </h1>

            <button
              disabled={mainData?.Availability === false}
              onClick={() => {
                updatePatch(mainData?.RoomDescription, false);
                handleOk(); // Call handleOk function here
              }}
              className="btn btn-sm btn-outline"
            >
              Confirm
            </button>
          </div>
        </dialog>
        {/* modal */}
      </div>
    </div>
  );
};

export default Details;
