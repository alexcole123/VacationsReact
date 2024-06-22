
// Function for performing changes ont the slice data:
import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../Models/UserModel";
import { HolidayModel } from "../Models/HolidayModel";


// // Function for initializing all holidays:


// Function for initializing all holidays:
export function init_holidays(state: {
    pastHolidays: HolidayModel[];
    currentHolidays: HolidayModel[];
    futureHolidays: HolidayModel[];
  }, action: PayloadAction<{
    pastHolidays: HolidayModel[];
    currentHolidays: HolidayModel[];
    futureHolidays: HolidayModel[];
  }>) {
    const { pastHolidays, currentHolidays, futureHolidays } = action.payload;
    state.pastHolidays = pastHolidays;
    state.currentHolidays = currentHolidays;
    state.futureHolidays = futureHolidays;
  }
  

  //---------------------------------------------------------------------------

  
  // Function for counting total users
export function count_users(state: number, action: PayloadAction<number>) {
    return action.payload;
}

  //---------------------------------------------------------------------------

  
  // Function for counting total users
export function count_likes(state: number, action: PayloadAction<number>) {
    return action.payload;
}


  //---------------------------------------------------------------------------

// Function for displaying destination and likes
export function destinations_and_likes(state: HolidayModel[], action: PayloadAction<HolidayModel[]>) {
    return action.payload;
  }


  //---------------------------------------------------------------------------
// Function for setting the logged-in user into the global state
export function login(currentState: UserModel | null, action: PayloadAction<UserModel>): UserModel {
    const newUserData = action.payload;
    // Create a new user object with the data from payload
    const newState = { ...currentState, ...newUserData };
    return newState;
  }
  
// // function for setting the logged-in user into the global state
// export function login(currentState: UserModel, action: PayloadAction<UserModel>): UserModel{
//     const newState = action.payload; //Here the payload is the new user logged-in.
//     return newState;
// }


  // Function for logging out

export function logout(currentState: UserModel, action: PayloadAction): UserModel{
    return null;
}


