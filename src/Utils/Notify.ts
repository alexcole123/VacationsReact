import { Notyf } from "notyf";

class Notify {
	
    private notyf = new Notyf({ 
        duration: 3000, 
        position: { x: "center", y: "top"},
        dismissible: true
    });

    public success(message: string): void {
        this.notyf.success(message);
    }

    public error(error: any): void {
        const message = this.extractErrorMessage(error);
        this.notyf.error(message);
    }

    private extractErrorMessage(error: any): string {
        // 1. Error is a string
        if (typeof error === "string" && error !== "") return error;
    
        // 2. Axios response with a string error message
        if (error?.response?.data && typeof error.response.data === "string" && error.response.data !== "") {
            return error.response.data;
        }
    
        // 3. Axios response with an object containing an error field
        if (error?.response?.data?.error && typeof error.response.data.error === "string" && error.response.data.error !== "") {
            return error.response.data.error;
        }
    
        // 4. Error object with a message field
        if (error?.message && typeof error.message === "string" && error.message !== "") {
            return error.message;
        }
    
        // Default fallback error message
        return "Some error occurred, please try again.";
    }
    
}

export const notify = new Notify();
