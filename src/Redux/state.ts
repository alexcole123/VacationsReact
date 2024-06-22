import { configureStore, createSlice } from "@reduxjs/toolkit";
import { count_users, login, logout, init_holidays, count_likes, destinations_and_likes } from "./reducers";
import { UserModel } from "../Models/UserModel";
import { HolidayModel } from "../Models/HolidayModel";


export type AppState = {
    holidays: {
      pastHolidays: HolidayModel[];
      currentHolidays: HolidayModel[];
      futureHolidays: HolidayModel[];
    };
    user: UserModel;
    totalUsers: number;
    totalLikes: number;
    destinationsLikes: HolidayModel[];
  };

// User Slice
const userSlice = createSlice({
    name: "users", //Internal use of Redux
    initialState: null, //The initial state
    reducers: {login, logout } //All reducers related to user
});

// Holiday Slice
const holidaySlice = createSlice({
    name: "holidays",
    initialState: {
      pastHolidays: [] as HolidayModel[],
      currentHolidays: [] as HolidayModel[],
      futureHolidays: [] as HolidayModel[],
    },
    reducers: { init_holidays },
  });


// Total Users Slice
const totalUsersSlice = createSlice({
    name: "totalUsers",
    initialState: 0,
    reducers: {
        count_users
    }
});

// Total Likes Slice
const totalLikesSlice = createSlice({
    name: "totalLikes",
    initialState: 0,
    reducers: {
        count_likes
    }
});

// Create a slice for destination and likes
const destinationLikesSlice = createSlice({
    name: "destinationLikes",
    initialState: [] as HolidayModel[],
    reducers: { destinations_and_likes }
  });

  

// Exporting action objects
export const userActions = userSlice.actions;
export const holidaysActions = holidaySlice.actions;
export const totalUsersActions = totalUsersSlice.actions;
export const totalLikesActions = totalLikesSlice.actions;
export const destinationLikesActions = destinationLikesSlice.actions;


// Store
export const store = configureStore<AppState>({
    reducer: {
        user: userSlice.reducer,
        holidays: holidaySlice.reducer,
        totalUsers: totalUsersSlice.reducer, 
        totalLikes: totalLikesSlice.reducer, 
        destinationsLikes: destinationLikesSlice.reducer, 

    }
});