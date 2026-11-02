"use client";
import React, { createContext, useState } from "react";

// Added export here
export const CheckInContext = createContext();

export const CheckInProvider = ({ children }) => {
	const [entries, setEntries] = useState([]);

	const addEntry = (newEntry) => {
		setEntries((prev) => [...prev, newEntry]);
	};

    console.log(entries);

	return <CheckInContext.Provider value={{ entries, addEntry }}>{children}</CheckInContext.Provider>;
};

export default CheckInProvider;
