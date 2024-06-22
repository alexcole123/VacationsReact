import { useEffect, useState } from "react";
import "./Copyrights.css";

export function Copyrights(): JSX.Element {
    const [year, setYear] = useState<string>(() => {
        const now = new Date();
        return now.getFullYear().toString(); // Initial year
    });

    useEffect(() => {
        const updateYear = () => {
            const now = new Date();
            const currentYear = now.getFullYear().toString();
            if (currentYear !== year) {
                setYear(currentYear);
            }
        };

        // Check for updates once a day
        const intervalId = setInterval(updateYear, 24 * 60 * 60 * 1000);

        // Clean up interval on unmount
        return () => clearInterval(intervalId);
    }, [year]);

    function showName() {
        alert("By Alex Cole");
    }

    return (
        <div className="Copyrights">
            <h4 onClick={showName}>All rights reserved © {year}</h4>
        </div>
    );
}
