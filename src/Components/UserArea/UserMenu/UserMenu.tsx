import { useSelector } from "react-redux";
import myUserMenu from "./UserMenu.module.css";
import { AppState } from "../../../Redux/state";
import { UserModel } from "../../../Models/UserModel";
import { NavLink, useNavigate } from "react-router-dom";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/Notify";

export function UserMenu(): JSX.Element {

    const user = useSelector<AppState, UserModel>(store => store.user)
    const navigate = useNavigate();

    function logout(){
        userService.logout();
        notify.success("Bye Bye");
        navigate("/home")
    }

    return (
        <div className={myUserMenu.UserMenu}>
            { 
                !user && <div>
                    Hello Guest | &nbsp; 
                    <NavLink to="/login">Login</NavLink> 
                    </div>}

            { 
                user && <div>
                    Hello {user.first_name} {user.last_name} | &nbsp; 
                    <NavLink to="" onClick={logout}>Logout</NavLink>
                    </div>}
        </div>
    );
}
