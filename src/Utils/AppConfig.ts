class AppConfig {
    private readonly baseUrl = "http://127.0.0.1:8000/api/";

    public readonly holidays_datesUrl = this.baseUrl + "holidays_dates/";
    public readonly total_usersUrl = this.baseUrl + "total_users/";
    public readonly total_likesUrl = this.baseUrl + "total_likes/";
    public readonly get_cities_with_likesUrl = this.baseUrl + "get_cities_with_likes/";
    public readonly loginUrl = this.baseUrl + "login/";
    public readonly logoutUrl = this.baseUrl + "logout/";

    // public readonly holidays_datesUrl = "http://localhost:8000/delay/api/holidays_dates/"; // example of a busy server
    // public readonly total_usersUrl = "http://localhost:8000/delay/api/total_users/"; // example of a busy server
    // public readonly total_likesUrl = "http://localhost:8000/delay/api/total_likes/"; // example of a busy server
    // public readonly get_cities_with_likesUrl = "http://localhost:8000/delay/api/get_cities_with_likes/"; // example of a busy server

}

export const appConfig = new AppConfig();
