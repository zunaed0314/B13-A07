import { Plus } from "lucide-react";
import friends from "../../public/data.json";
import FriendCard from "./components/FriendCard/FriendCard";
export default function Home() {
	const friendsPromise = fetch("/data.json").then((res) => res.json());
	return (
		<div className="flex flex-col items-center justify-center mt-30 gap-10 px-35">
			<h1 className="text-5xl font-bold text-cyan-950">
				Friends To Keep Close in your life
			</h1>
			<p className="text-center text-gray-500">
				Your personal shelf of meaningful connections. Browse, tend, and nurture{" "}
				<br />
				the relationships that matter most.
			</p>
			<button className="btn bg-green-900 text-white rounded-lg">
				<Plus className="size-5" />
				Add Friend
			</button>
			<div className="grid grid-cols-4 container mx-auto gap-6">
				<div className="px-10 py-5 border border-gray-100 transform-transition duration-300 hover:scale-102 flex flex-col justify-center items-center shadow-md">
					<p className="text-green-900 text-4xl">10</p>
					<p>Friends</p>
				</div>
				<div className="px-10 py-5 border border-gray-100 transform-transition duration-300 hover:scale-102 flex flex-col justify-center items-center shadow-md">
					<p className="text-green-900 text-4xl">10</p>
					<p>Friends</p>
				</div>
				<div className="px-10 py-5 border border-gray-100 transform-transition duration-300 hover:scale-102 flex flex-col justify-center items-center shadow-md">
					<p className="text-green-900 text-4xl">10</p>
					<p>Friends</p>
				</div>
				<div className="px-10 py-5 border border-gray-100 transform-transition duration-300 hover:scale-102 flex flex-col justify-center items-center shadow-md">
					<p className="text-green-900 text-4xl">10</p>
					<p>Friends</p>
				</div>
			</div>
			<div className=' container mx-auto border-t border-gray-200 mt-5 pt-10 space-y-5'>
				<p className="text-3xl text-black font-semibold">Your Friends</p>
				<div className="grid grid-cols-4 gap-5">
					{friends.map((friend) => (
						<div key={friend.id}>
							<FriendCard friend={friend}></FriendCard>
						</div>
					))}
				</div>	
			</div>
		</div>
	);
}
