import friends from "../../../public/data.json";
import FriendCard from "../components/FriendCard/FriendCard";
import Image from "next/image";
import snooze from "../../../public/snooze.png";
import archive from "../../../public/archive.png";
import deletes from "../../../public/delete.png";
import call2 from "../../../public/call2.png";
import text2 from "../../../public/text2.png";
import video2 from "../../../public/video2.png";
import { toast } from "react-toastify";
import CheckIn from "../components/Check-In/CheckIn";

const FriendsDetailsPage = async ({ params }) => {
	const { friendId } = await params;
	const friend = friends.find((f) => f.id === parseInt(friendId));
	if (!friend) {
		alert("Not Found!");
	}

	return (
		<div
			className="mt-25 container mx-auto px-6 lg:px-35
                grid grid-cols-1 md:grid-cols-5 gap-3"
		>
			<div className="md:col-span-2 md:row-span-2 bg-base-100">
				<FriendCard friend={friend} />
			</div>

			<div className="grid grid-cols-3 gap-4 md:col-span-3">
				<div
					className="bg-base-100 p-5 border border-gray-100
                        flex flex-col justify-center items-center shadow-md"
				>
					<p className="text-center text-green-900 font-bold text-2xl">
						{friend.days_since_contact}
					</p>
					<p className="text-center">Days Since Contact</p>
				</div>

				<div
					className="bg-base-100 p-5 border border-gray-100
                        flex flex-col justify-center items-center shadow-md"
				>
					<p className="text-center text-green-900 font-bold text-2xl">
						{friend.goal}
					</p>
					<p className="text-center">Goal (Days)</p>
				</div>

				<div
					className="bg-base-100 p-5 border border-gray-100
                        flex flex-col justify-center items-center shadow-md"
				>
					<p className="text-center text-green-900 font-bold text-2xl">
						{friend.next_due_date}
					</p>
					<p className="text-center">Next Due</p>
				</div>
			</div>

			{/* Relationship Goal */}
			<div
				className="md:col-span-3 bg-base-100 p-6
                    border border-gray-100 shadow-md flex flex-col justify-around"
			>
				<div className="flex justify-between">
					<p className="text-green-900 font-bold text-xl">Relationship goal</p>
					<button className="btn btn-sm">Edit</button>
				</div>
				<p>Connect Every 30 Days</p>
			</div>

			{/* Actions */}
			<div className="col-span-1 md:col-span-2 space-y-4">
				<div
					className="bg-base-100 flex gap-2 justify-center items-center
                        shadow py-3 border border-gray-100"
				>
					<Image src={snooze} alt="snooze" width={15} height={15} />
					<span>Snooze 2 Weeks</span>
				</div>

				<div
					className="bg-base-100 flex gap-2 justify-center items-center
                        shadow py-3"
				>
					<Image src={archive} alt="archive" width={15} height={15} />
					<span>Archive</span>
				</div>

				<div
					className="bg-base-100 flex gap-2 justify-center items-center
                        shadow py-3"
				>
					<Image src={deletes} alt="delete" width={15} height={15} />
					<span className="text-red-500">Delete</span>
				</div>
			</div>

			{/* Quick Check-In */}
			<CheckIn friend={friend}></CheckIn>
		</div>
	);
};

export default FriendsDetailsPage;
