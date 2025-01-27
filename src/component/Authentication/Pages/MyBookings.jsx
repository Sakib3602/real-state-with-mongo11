import axios from "axios";
import React, { useContext, useEffect, useId, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// modal

import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { Helmet } from "react-helmet";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// modal

const MyBookings = () => {
  const { person } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const modalId = useId();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function fetchData() {
    fetch(
      `https://assingment11-two.vercel.app/insertItemsAfterBookings?email=${person?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }
  // fetchData()  dependis

  // console.log(tableLoading)

  const handleDeleteData = async (id, RoomDescription, Availability) => {
    console.log(RoomDescription);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const get = await axios.delete(
          `https://assingment11-two.vercel.app/delete/${id}`
        );

        fetchData();
        const { data } = await axios.patch(
          `https://assingment11-two.vercel.app/update/${RoomDescription}`,
          { Availability }
        );

        console.log(get, data, "from here");
        // fetchData()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //   for modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  //   for modal

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [mom, setMom] = useState(moment().format(" h:mm:ss a"));

  const updateHandle = (e, RoomDescription) => {
    e.preventDefault();

    const updateData = {
      From: startDate.toLocaleDateString(),
      To: startDate2.toLocaleDateString(),
    };
    console.log(updateData, RoomDescription);

    fetch(`https://assingment11-two.vercel.app/updateDate/${RoomDescription}`, {
      method: "PUT", // specify the HTTP method
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updated", data);
        toast.success("Update Successful!");
      });
  };

  // review send data to server
  const [rating, setRating] = useState(5);
  const reviewHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const words = form.words.value;
    const time = mom;
    const hereRating = rating;

    const data = {
      photo,
      email,
      name,
      words,
      hereRating,
      time,
    };
    console.log(data);

    fetch("https://assingment11-two.vercel.app/reviewAll", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Thank You For Your Review!");
      });
    console.log(data);
  };
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 ">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-black">
          All My Bookings.
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-500 text-white text-2xl">
              <tr className="text-left">
                <th className="p-3">Email</th>
                <th className="p-3">Price</th>

                <th className="p-3">From</th>
                <th className="p-3">To</th>
                <th className="p-3"></th>
                <th className="p-3 text-right"></th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              <Helmet>
                <title>COZI- My Bookings</title>
              </Helmet>
              {/* {
                    tableLoading && <h1>Loading..............</h1>
                } */}
              {data.map((e) => (
                <tr
                  key={e._id}
                  className="border-b border-opacity-20 text-black text-xl"
                >
                  <td className="p-3">
                    <p>{e?.RoomDescription}</p>
                  </td>
                  <td className="p-3">
                    <p>${e?.Price}</p>
                  </td>
                  <td className="p-3">
                    <p>{e?.From}</p>
                  </td>
                  <td className="p-3">
                    <p>{e?.To}</p>
                  </td>
                  <td className="p-3">
                    <div>
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn px-3 py-1 cursor-pointer font-semibold rounded-md bg-violet-400 text-white"
                        onClick={() =>
                          document.getElementById(modalId).showModal()
                        }
                      >
                        Update
                      </button>
                      <dialog
                        id={modalId}
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <form
                            onSubmit={(x) =>
                              updateHandle(x, e?.RoomDescription)
                            }
                          >
                            <div>
                              <h1 className="text-[34px] mb-4">
                                UpDate Your Date.
                              </h1>
                              <h1>From :</h1>
                              <DatePicker
                                className="border rounded-lg p-3"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                              <hr className="mt-3" />
                              <h1>To :</h1>
                              <DatePicker
                                className="border rounded-lg p-3"
                                selected={startDate2}
                                onChange={(date) => setStartDate2(date)}
                              />
                              <hr className="mt-3" />
                            </div>
                            <input
                              type="submit"
                              className="btn btn-sm mt-2 px-3 py-1 cursor-pointer font-semibold rounded-md bg-violet-400 text-white"
                            />
                          </form>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}

                              <button className="btn px-3 py-1 cursor-pointer font-semibold rounded-md bg-red-400 text-white">
                                Close
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    <div>
                      <button
                        className="px-3 py-1 cursor-pointer font-semibold rounded-md bg-violet-400 text-white"
                        onClick={openModal}
                      >
                        Review
                      </button>
                      <Toaster position="top-center" reverseOrder={false} />
                      <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                      >
                        <p className="text-[20px]">Review Us.</p>

                        <form onSubmit={reviewHandle}>
                          <input
                            type="text"
                            name="name"
                            value={e?.RoomDescription}
                          />
                          <h1>Name</h1>
                          <input
                            type="text"
                            className="border  text-black p-2 rounded-lg"
                            name="email"
                            value={person.displayName}
                          />
                          <h1>Your PhotoURL :</h1>
                          <input
                            required
                            type="text"
                            name="photo"
                            className="border  text-black p-2 rounded-lg"
                            value={person?.photoURL}
                            placeholder="Give URL"
                          />

                          <hr className="mt-2" />
                          <h1>Rate</h1>
                          <select
                            name="cars"
                            id="cars"
                            onChange={(event) => setRating(event.target.value)}
                            className="border p-2 rounded"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <h1>Time :{moment().format(" h:mm:ss a")}</h1>
                          <hr className="mt-2" />
                          <h1>Your Experience</h1>
                          <input
                            type="text"
                            name="words"
                            required
                            placeholder="Share your words..."
                            className="input input-bordered input-lg w-full max-w-xs mb-2"
                          />

                          <input type="submit" className="btn btn-sm" />
                        </form>
                      </Modal>
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    <span
                      onClick={() =>
                        handleDeleteData(e?._id, e?.RoomDescription, true)
                      }
                      className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-red-400 text-white"
                    >
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
