import { NavLink } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";
import "./PageNotFound.css";

export function PageNotFound(): JSX.Element {
    useTitle("Page Not Found")
    return (

        <div className="PageNotFound">
            <h2>Page Not Found</h2>
            <img src="https://media.giphy.com/media/kF0ngyP7S1DfmzKqiN/giphy.gif?cid=ecf05e47eewr8eq0yw2xpp53ul743cd9lzrexhzvne12hkkk&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Page Not Found" className="giphy-image"/>  
            <br></br>
            <NavLink to="/home">Back</NavLink>
          
         </div>
    );
}
