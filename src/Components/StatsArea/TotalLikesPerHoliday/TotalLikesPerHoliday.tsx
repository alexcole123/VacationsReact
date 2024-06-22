import { useEffect, useState } from "react";
import "./TotalLikesPerHoliday.css";
import { appConfig } from "../../../Utils/AppConfig";
import { useTitle } from "../../../Utils/UseTitle";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useAuth } from "../../../Utils/useAuth";
import { holidaysService } from "../../../Services/HolidaysService";
import { notify } from "../../../Utils/Notify";

export function TotalLikesPerHoliday(): JSX.Element {
    useTitle("Total Likes");
    useAuth(); // Use useAuth hook to check for authenticated user


    const [totalLikes, setTotalLikes] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
     

        const fetchData = async () => {
            try {
                const totalLikes = await holidaysService.fetchTotalLikes();
                setTotalLikes(totalLikes);
            } catch(error: any){
                notify.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const data = [
        {
            name: 'Total Likes',
            likes: totalLikes,
        },
    ];

    return (
        <div>
            {isLoading ? (
                <p>Loading likes...</p>
            ) : (
                <div>
                    <h2>Total likes = {totalLikes}</h2>
                    <BarChart width={500} height={300} data={data} className="likesBar">
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="likes" fill="#8884d8" />
                    </BarChart>
                </div>
            )}
        </div>
    );
}
