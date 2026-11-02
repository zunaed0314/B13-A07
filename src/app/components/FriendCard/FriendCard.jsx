import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
	let bg_color;
	if (friend.status === "overdue") {
		bg_color = "bg-red-400";
	} else if (friend.status === "almost due") {
		bg_color = "bg-orange-300";
	} else {
		bg_color = "bg-green-800";
	}
	return (
		<div className="flex h-full flex-col items-center justify-center space-y-1 rounded-xl border border-gray-100 px-8 py-8 shadow-lg">
			<div className="avatar">
				<div className="w-24 rounded-full">
					<Image
						alt={friend.name}
						src={friend.picture}
						height={50}
						width={50}
						// className='w-auto h-12'
					/>
				</div>
			</div>
			<p className="w-full text-center text-xl font-semibold">{friend.name}</p>
			<p className="text-gray-600">{friend.days_since_contact}d ago</p>
			<div className="flex gap-2">
				{friend.tags.map((tag, index) => (
					<p key={index} className="rounded-full bg-green-200 px-3 py-1 text-black text-green-800">
						{tag}
					</p>
				))}
			</div>
			<p className={`${bg_color} rounded-full px-3 py-1 text-white`}>{friend.status}</p>
		</div>
	);
};

export default FriendCard;
