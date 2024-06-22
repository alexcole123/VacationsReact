import myHome from "./Home.module.css";
import statsSource from "../../../Assets/Images/stats.png"
import { useTitle } from "../../../Utils/UseTitle";


export function Home(): JSX.Element {
    useTitle("Home")

    
    
    return (
        <div className={myHome.container}>
        <p>Welcome to our Admin Dashboard! Your hub for viewing and analyzing vacation statistics. Explore current, past, and future vacations, track user activity, and monitor engagement metrics effortlessly.
        Gain valuable insights into user interactions and vacation popularity to inform strategic decisions and enhance the platform experience. Let our Admin Dashboard be your window into the pulse of our vacation statistics platform.
        </p>
            <img src={statsSource}></img>
        </div>
    );
}
