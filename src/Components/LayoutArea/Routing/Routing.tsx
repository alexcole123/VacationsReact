import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../HomeArea/Home/Home";
import { Login } from "../../UserArea/Login/Login";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { TotalUsers } from "../../StatsArea/TotalUsers/TotalUsers";
import { HolidayStatus } from "../../StatsArea/HolidayStatus/HolidayStatus";
import { TotalLikesPerHoliday } from "../../StatsArea/TotalLikesPerHoliday/TotalLikesPerHoliday";
import { DestinationsAndLikes } from "../../StatsArea/DestinationsAndLikes/DestinationsAndLikes";
import { About } from "../../AboutArea/About/About";

export function Routing(): JSX.Element {
    return (
        <div>

            <Routes>

            {/* Login route*/}
            <Route path="/login" element={<Login />} />

            {/* Home Route */}
            <Route path="/home" element={<Home />}/>
    
            {/* Default Route (redirect to "/home") */}
            <Route path="/" element={<Navigate to="/home" />}/>

            {/* Total users Route: */}
            <Route path="/total-users" element={<TotalUsers />} />

            {/* Total Likes Route: */}
            <Route path="/total-likes" element={<TotalLikesPerHoliday />} />

            {/* Likes + Destination Route: */}
            <Route path="/destinations-and-likes" element={<DestinationsAndLikes />} />

            {/* Holidays dates Route: */}
            <Route path="/holidays-status" element={<HolidayStatus />} />

            {/* About Route: */}
            <Route path="/about" element={<About />} />

            {/* Page not found Route: */}
            <Route path="*" element={<PageNotFound />} />
			
            </Routes>
        </div>
    );
}
