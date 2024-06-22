import { useEffect, useState } from "react";
import "./HolidayStatus.css"; // Assuming the CSS file exists
import { useTitle } from "../../../Utils/UseTitle";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useAuth } from "../../../Utils/useAuth";
import { holidaysService } from "../../../Services/HolidaysService";
import { notify } from "../../../Utils/Notify";
import CircularProgress from '@mui/material/CircularProgress';


export function HolidayStatus(): JSX.Element {
    useTitle("Holiday Status");
    useAuth(); // Use useAuth hook to check for authenticated user

    const [isLoading, setIsLoading] = useState(true);
    const [pastCount, setPastCount] = useState(0);
    const [currentCount, setCurrentCount] = useState(0);
    const [futureCount, setFutureCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Set loading to true when starting to send data
            try {
                const { pastHolidaysCount, currentHolidaysCount, futureHolidaysCount } = await holidaysService.getHolidaysCounts();
                setPastCount(pastHolidaysCount);
                setCurrentCount(currentHolidaysCount);
                setFutureCount(futureHolidaysCount);
            } catch(error: any){
                notify.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const holidayData = [
        { name: "Past Holidays", holidays: pastCount },
        { name: "Current Holidays", holidays: currentCount },
        { name: "Future Holidays", holidays: futureCount }
    ];

    return (
        <div>
            {isLoading ? (
                <div >
                <CircularProgress value={80} size='120px'/>
                </div>            
                ) : (
                <div>
                    <h2>Holiday Status</h2>
                    <h4>Past Holidays = {pastCount}</h4>
                    <h4>Current Holidays = {currentCount}</h4>
                    <h4>Future Holidays = {futureCount}</h4>
                    <BarChart width={500} height={300} data={holidayData} className="statusBar">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="holidays" fill="#8884d8" />
                    </BarChart>
                </div>
            )}
        </div>
    );
}
