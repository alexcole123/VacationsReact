import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { UserModel } from "../Models/UserModel";
import { store, userActions } from "../Redux/state";
import { CredentialsModel } from "../Models/CredentialModel";
import { appConfig } from "../Utils/AppConfig";
import { createAction } from "@reduxjs/toolkit";


interface LoginResponse {
    access: string;
    refresh: string;
    user: Omit<UserModel, 'password'>; // User data without the password field
}
class UserService {
    public constructor() {
        // Extract token from storage if it exists
        const access_token = localStorage.getItem('access_token');

        // If no token, do nothing
        if (!access_token) return;

        // Decode the token
        const dbUser = jwtDecode<{ user: UserModel }>(access_token).user;

        // Create action object containing the logged-in user
        const action = userActions.login(dbUser);

        // Save logged-in user in the global state
        store.dispatch(action);
        
    }


    public async login(credentials: CredentialsModel): Promise<void> {
        
        // Send credentials to backend
        const response = await axios.post(appConfig.loginUrl, credentials, { withCredentials: true });

            const { access, refresh, user } = response.data;

            // Save tokens to local storage or cookies
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);

            // Create action object containing the logged-in user
            const action = userActions.login(user);

            // Save logged-in user in the global state
            store.dispatch(action);

    }


    public logout(): void {
        // Create action object logout
        const action = userActions.logout();

        // Save registered user in the global state
        store.dispatch(action);

        // Remove tokens from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        
    }

    // Get total users
    public async fetchTotalUsers() {
        const response = await axios.get(appConfig.total_usersUrl, { withCredentials: true });        
    
        return response.data.total_users;


    }
}

export const countUsers = createAction<number>('totalUsers/countUsers');

export const userService = new UserService();

