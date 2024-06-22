import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useSelector } from "react-redux";
import { UserModel } from "../../../Models/UserModel";
import { AppState } from "../../../Redux/state";

export function Menu(): JSX.Element {


    const user = useSelector<AppState, UserModel>(store => store.user);

    return (
        <div className="Menu">
            <NavLink to="/home" className="menu-link">Home</NavLink>

            {/* end = only exact route will paint the menu */}
            {user && <NavLink to="/holidays-status" className="menu-link" end>Holidays Status</NavLink>}

            {user &&  <NavLink to="/total-users" className="menu-link" end>Total Users</NavLink>}
            
            {user && <NavLink to="/total-likes" className="menu-link" end>Total Likes per Holiday</NavLink>}

            {user && <NavLink to="/destinations-and-likes" className="menu-link" end>Destination + Likes</NavLink>}

            <NavLink to="/about" className="menu-link">About</NavLink>
        </div>
    );
}

