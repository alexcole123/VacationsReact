import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../Redux/state";
import { notify } from "./Notify";
import { UserModel } from "../Models/UserModel";

export function useAuth() {
    const user = useSelector<AppState, UserModel>(store => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
}
