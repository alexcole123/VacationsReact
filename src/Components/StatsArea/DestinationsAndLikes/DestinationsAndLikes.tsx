import { useEffect, useState } from "react";
import "./DestinationsAndLikes.css";
import { useTitle } from "../../../Utils/UseTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAuth } from "../../../Utils/useAuth";
import { holidaysService } from "../../../Services/HolidaysService";
import { notify } from "../../../Utils/Notify";

export function DestinationsAndLikes(): JSX.Element {
    useTitle("Destinations and Likes");
    useAuth(); // Use useAuth hook to check for authenticated user


    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await holidaysService.fetchTotalLikesAndDestination(); // Call the function to get the response
                setCities(data); // Use response directly to set the state
            } catch(error: any){
                notify.error(error);
            } finally {
                setIsLoading(false);
            }
        };


        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading data...</div>;
    }

    return (
        <div className="DestinationsAndLikes">
            <h2>Destinations and Likes</h2>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="destinations and likes table">
                    <TableHead className="table-header">
                        <TableRow>
                            <TableCell>Destination</TableCell>
                            <TableCell align="right">Likes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cities.map((city, index) => (
                            <TableRow key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                                <TableCell >
                                    {city.destination}
                                </TableCell>
                                <TableCell align="right">{city.likes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
