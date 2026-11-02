"use client";
import React, { useContext, useState, useRef, useEffect } from "react";
import { CheckInContext } from "../components/CheckInProvider/CheckInProvider";
import { ChevronDown } from "lucide-react";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import useHook from "../../Hook/useHook";

const TimelinePage = () => {
	const { entries } = useContext(CheckInContext);
	const [filter, setFilter] = useState("");

	// const selectedEntries = filter ? entries.filter((entry) => entry.medium === filter) : entries;

	const [search, searchOnChange] = useHook("");

	const selectedEntries = entries
		.filter((e) => !filter || e.medium === filter)
		.filter((e) => {
			if (!search) return true;
			const q = search.toLowerCase();
			return e.name?.toLowerCase().includes(q) || e.date?.toString().toLowerCase().includes(q);
		});

	const dropdownRef = useRef(null);

	const handleFilterClick = (value) => {
		setFilter(value);
		if (dropdownRef.current) {
			dropdownRef.current.removeAttribute("open");
		}
	};

	return (
		<div className="container mx-auto flex-1 space-y-5 px-6 pt-20 md:px-35">
			<h1 className="text-3xl font-bold">Timeline</h1>

			<div className="flex items-center gap-5">
				<details className="dropdown" ref={dropdownRef}>
					<summary className="btn m-1">
						Filter Timeline <ChevronDown className="ml-2 size-4" />
					</summary>
					<ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
						<li>
							<a onClick={() => handleFilterClick("Text")}>Text</a>
						</li>
						<li>
							<a onClick={() => handleFilterClick("Call")}>Call</a>
						</li>
						<li>
							<a onClick={() => handleFilterClick("Video")}>Video</a>
						</li>
						<li>
							<a onClick={() => handleFilterClick("")}>Clear Filter</a>
						</li>
					</ul>
				</details>
				<label className="input">
					<svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</g>
					</svg>
					<input type="text" value={search} onChange={searchOnChange} className="input focus:outline-1 focus:outline-offset-0" placeholder="Search" />
				</label>
			</div>

			<div className="flex flex-col gap-3">
				{selectedEntries.length === 0 ? (
					<p className="bg-base-100 rounded-lg border border-gray-100 p-5 text-gray-500 shadow-sm">No check-ins yet. Go to Home page to log one!</p>
				) : (
					selectedEntries.map((entry) => (
						<div key={entry.id}>
							<TimelineCard entry={entry} />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default TimelinePage;
