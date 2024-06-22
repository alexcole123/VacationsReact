import "./TotalUsers.css";
import { useEffect, useState } from "react";
import { appConfig } from "../../../Utils/AppConfig";
import { useTitle } from "../../../Utils/UseTitle";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useAuth } from "../../../Utils/useAuth";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/Notify";

export function TotalUsers(): JSX.Element {
    useTitle("Total Users");
    useAuth(); // Use useAuth hook to check for authenticated user

    const [totalUsers, setTotalUsers] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const totalUsers = await userService.fetchTotalUsers();
                setTotalUsers(totalUsers);
            } catch(error: any){
                notify.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading users...</p>
            ) : (
                <div>
                    <h2>Total users = {totalUsers}</h2>
                    <BarChart width={500} height={300} data={[{ name: 'Total Users', users: totalUsers }]} className="usersBar">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="users" fill="#8884d8" />
                    </BarChart>
                </div>
            )}
        </div>
    );
}
