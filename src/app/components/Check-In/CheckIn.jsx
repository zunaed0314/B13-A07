"use client";
import React, { useContext } from "react"; // Imported useContext
import Image from "next/image";
import snooze from "@/../public/snooze.png";
import archive from "@/../public/archive.png";
import deletes from "@/../public/delete.png";
import call2 from "@/../public/call2.png";
import text2 from "@/../public/text2.png";
import video2 from "@/../public/video2.png";
import { toast } from "react-toastify";
import { CheckInContext } from "../CheckInProvider/CheckInProvider";

const CheckIn = ({ friend }) => {
	const { addEntry } = useContext(CheckInContext);

	const handleCheckIn = (medium) => {
		toast.success(`${medium} with ${friend.name}`);

		const date = new Date();
		const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
		const monthName = date.toLocaleDateString("en-US", { month: "long" });
		const dayNumber = date.getDate();
		const year = date.getFullYear();

		const formattedDate = `${dayName} ${monthName} ${dayNumber}, ${year}`;

		addEntry({
			id: `${friend.id}-${medium}-${Date.now()}`,
			name: friend.name,
			date: formattedDate,
			medium: `${medium}`,
			date2: date.toLocaleDateString()
			// name: `${friend.name}`
		});
	};

	return (
		<div className="bg-base-100 flex flex-col gap-3 rounded-md border border-gray-100 p-5 shadow-md md:col-span-3">
			<p className="text-2xl font-semibold">Quick Check-In</p>
			<div className="flex w-full flex-1 gap-3">
				<button
					onClick={() => handleCheckIn("Call")}
					className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-gray-100 py-4 shadow transition hover:bg-gray-200 active:scale-[0.98] active:bg-gray-300"
				>
					<Image src={call2} alt="Call" width={24} height={24} />
					<p className="font-medium">Call</p>
				</button>
				<button
					onClick={() => handleCheckIn("Text")}
					className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-gray-100 py-4 shadow transition hover:bg-gray-200 active:scale-[0.98] active:bg-gray-300"
				>
					<Image src={text2} alt="Text" width={24} height={24} />
					<p className="font-medium">Text</p>
				</button>
				<button
					onClick={() => handleCheckIn("Video")}
					className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-gray-100 py-4 shadow transition hover:bg-gray-200 active:scale-[0.98] active:bg-gray-300"
				>
					<Image src={video2} alt="Video" width={24} height={24} />
					<p className="font-medium">Video</p>
				</button>
			</div>
		</div>
	);
};

export default CheckIn;
