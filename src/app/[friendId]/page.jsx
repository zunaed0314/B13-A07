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
import { notFound } from "next/navigation";

// 1. The dynamic metadata function
export async function generateMetadata({ params }) {
	const { friendId } = await params;
	const friend = friends.find((f) => f.id === parseInt(friendId));

	if (!friend) return { title: "Friend Not Found" };

	return {
		title: `${friend.name}	`,
		description: `Details and check-in history for ${friend.name}.`,
	};
}

const FriendsDetailsPage = async ({ params }) => {
	const { friendId } = await params;
	const friend = friends.find((f) => f.id === parseInt(friendId));
	if (!friend) {
		notFound();
	}

	return (
		<div className="container mx-auto mt-25 grid grid-cols-1 gap-3 px-6 md:grid-cols-5 lg:px-35">
			<div className="bg-base-100 md:col-span-2 md:row-span-2">
				<FriendCard friend={friend} />
			</div>

			<div className="grid grid-cols-3 gap-4 md:col-span-3">
				<div className="bg-base-100 flex flex-col items-center justify-center border border-gray-100 p-5 shadow-md">
					<p className="text-center text-2xl font-bold text-green-900">{friend.days_since_contact}</p>
					<p className="text-center">Days Since Contact</p>
				</div>

				<div className="bg-base-100 flex flex-col items-center justify-center border border-gray-100 p-5 shadow-md">
					<p className="text-center text-2xl font-bold text-green-900">{friend.goal}</p>
					<p className="text-center">Goal (Days)</p>
				</div>

				<div className="bg-base-100 flex flex-col items-center justify-center border border-gray-100 p-5 shadow-md">
					<p className="text-center text-2xl font-bold text-green-900">{friend.next_due_date}</p>
					<p className="text-center">Next Due</p>
				</div>
			</div>

			{/* Relationship Goal */}
			<div className="bg-base-100 flex flex-col justify-around border border-gray-100 p-6 shadow-md md:col-span-3">
				<div className="flex justify-between">
					<p className="text-xl font-bold text-green-900">Relationship goal</p>
					<button className="btn btn-sm">Edit</button>
				</div>
				<p>Connect Every 30 Days</p>
			</div>

			{/* Actions */}
			<div className="col-span-1 space-y-4 md:col-span-2">
				<div className="bg-base-100 flex items-center justify-center gap-2 border border-gray-100 py-3 shadow">
					<Image src={snooze} alt="snooze" width={15} height={15} />
					<span>Snooze 2 Weeks</span>
				</div>

				<div className="bg-base-100 flex items-center justify-center gap-2 py-3 shadow">
					<Image src={archive} alt="archive" width={15} height={15} />
					<span>Archive</span>
				</div>

				<div className="bg-base-100 flex items-center justify-center gap-2 py-3 shadow">
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
