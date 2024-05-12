import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";


const MyBookings = () => {
    const {person} = useContext(AuthContext)
    const [data,setData] = useState([])
    // const [tableLoading,setTableLoading] = useState(false)

    // function fetchData(){
    //     // setTableLoading(true)
       
    //    }

    useEffect(()=>{
        
       
		fetch(`http://localhost:4000/insertItemsAfterBookings?email=${person?.email}`)
        .then(res => res.json())
        .then(data => setData(data))
    //    setTableLoading(false)
    },[person?.email])

    // console.log(tableLoading)


    const handleDeleteData = async(id,RoomDescription,Availability)=>{
		console.log(RoomDescription)

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		  }).then(async(result) => {
			if (result.isConfirmed) {
				const get = await axios.delete(`http://localhost:4000/delete/${id}`)
				const {data} = await axios.patch( `http://localhost:4000/update/${RoomDescription}`,
				{Availability}
				)
				
      
        console.log(get,data,"from here")
		fetchData()
			  Swal.fire({
				title: "Deleted!",
				text: "Your file has been deleted.",
				icon: "success"
			  });
			}
		  });








        

       
        
    }

	







    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 ">
	<h2 className="mb-4 text-2xl font-semibold leading-tight text-black">All My Bookings.</h2>
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
                {/* {
                    tableLoading && <h1>Loading..............</h1>
                } */}
				{
                    data.map(e => <tr key={e._id} className="border-b border-opacity-20 text-black text-xl">
					<td className="p-3">
						<p>{e?.RoomDescription}</p>
					</td>
					<td className="p-3">
						<p>{e?.Price}</p>
					</td>
					<td className="p-3">
                    <p>{e?.From}</p>
					</td>
					<td className="p-3">
						<p>{e?.To}</p>
					</td>
					<td className="p-3">
					<span className="px-3 py-1 cursor-pointer font-semibold rounded-md bg-violet-400 text-white">
							<span>Give Review</span>
						</span>
					</td>
					<td className="p-3 text-right">
                    <span className="px-3 py-1 cursor-pointer font-semibold rounded-md bg-violet-400 text-white">
							<span>Update</span>
						</span>
					</td>
					<td className="p-3 text-right">
						<span onClick={()=> handleDeleteData(e?._id,e?.RoomDescription,true)} className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-red-400 text-white">
							<span>Delete</span>
						</span>
					</td>
				</tr>
				)
                }
				
				
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default MyBookings;