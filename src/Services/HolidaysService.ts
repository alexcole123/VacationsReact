import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { destinationLikesActions, store } from "../Redux/state";
import { createAction } from "@reduxjs/toolkit";

class HolidaysService {

    // Function returning Promise which reports holidays array:
    public async getHolidaysCounts(): Promise<{
        pastHolidaysCount: number;
        currentHolidaysCount: number;
        futureHolidaysCount: number;
    }> {
        const response = await axios.get<{
            past_holidays: number;
            current_holidays: number;
            future_holidays: number;
        }>(appConfig.holidays_datesUrl, { withCredentials: true });

        const { past_holidays, current_holidays, future_holidays } = response.data;


        return {
            pastHolidaysCount: past_holidays,
            currentHolidaysCount: current_holidays,
            futureHolidaysCount: future_holidays
        };
    }
    

    // ------------------------------------------------------------------------------------------------------------------------------------------------

    // Get total likes
    public async fetchTotalLikes() {
        const response = await axios.get(appConfig.total_likesUrl, { withCredentials: true });        
    
        return response.data.total_likes

    }

    // ------------------------------------------------------------------------------------------------------------------------------------------------


    // Get total likes per destination
    public async  fetchTotalLikesAndDestination() {
    
        const response = await fetch(appConfig.get_cities_with_likesUrl, { 
            credentials: 'include' // Ensure cookies are included in the request
        });        const data = await response.json();
    
        store.dispatch(destinationLikesActions.destinations_and_likes(data));
        return data; // Return the data so it can be used by the component
      }

}

export const holidaysService = new HolidaysService();
export const countLikes = createAction<number>("totalLikes/countLikes"); 
