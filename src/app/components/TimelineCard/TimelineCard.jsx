import Image from "next/image";
import React from "react";

const imageMap = {
	Call: "/call.png",
	Text: "/text.png",
	Video: "/video.png",
};
const TimelineCard = ({ entry }) => {

	const img = imageMap[entry.medium];

	return (
		<div className="bg-base-100 flex items-center gap-4 border border-gray-200 p-3 shadow">
			<Image src={img} alt={entry.medium} width={0} height={0} className="h-10 w-auto"></Image>
			<div className="flex flex-col justify-start">
				<p className="text-gray-800">
					<span className="font-bold">{entry.medium}</span> with {entry.name}
				</p>
				<p>{entry.date}</p>
			</div>
		</div>
	);
};

export default TimelineCard;
