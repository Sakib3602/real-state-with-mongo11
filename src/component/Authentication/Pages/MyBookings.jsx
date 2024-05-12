

const MyBookings = () => {
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
					<th className="p-3">Price</th>
					<th className="p-3">From</th>
					<th className="p-3">To</th>
					<th className="p-3 text-right"></th>
					<th className="p-3"></th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 text-black text-xl">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
                    <p>434/21/4345</p>
					</td>
					<td className="p-3">
						<p>12/34/5666</p>
					</td>
					<td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-white">
							<span>Update</span>
						</span>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-red-400 text-white">
							<span>Delete</span>
						</span>
					</td>
				</tr>
				
				
				
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default MyBookings;