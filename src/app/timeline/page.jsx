"use client";
import React, { useContext, useState } from "react";
import { CheckInContext } from "../components/CheckInProvider/CheckInProvider";
import { MoveDown } from "lucide-react";
import TimelineCard from "../components/TimelineCard/TimelineCard";

const TimelinePage = () => {
	const { entries } = useContext(CheckInContext);
	const [filter, setFilter] = useState("");

	const selectedEntries = filter ? entries.filter((entry) => entry.medium === filter) : entries;

	return (
		<div className="container mx-auto mt-20 px-35">
			<h1 className="text-3xl font-bold">Timeline</h1>
			<div className="dropdown dropdown-start">
				<div tabIndex={0} role="button" className="btn m-1">
					<MoveDown className="size-4" /> Filter Timeline
				</div>
				<ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
					<li>
						<a onClick={() => setFilter("Text")}>Text</a>
					</li>
					<li>
						<a onClick={() => setFilter("Call")}>Call</a>
					</li>
					<li>
						<a onClick={() => setFilter("Video")}>Video</a>
					</li>
				</ul>
			</div>
			<div>
				{
					selectedEntries.map(entry => <div key={entry.id}>
						<TimelineCard entry={entry}></TimelineCard>
					</div>)
				}
			</div>
		</div>
	);
};

export default TimelinePage;
