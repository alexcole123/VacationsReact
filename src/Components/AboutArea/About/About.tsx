import { useTitle } from "../../../Utils/UseTitle";
import "./About.css"; // Make sure to define your CSS styles in this file
import profileSource from "../../../Assets/Images/alex.jpeg";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



export function About(): JSX.Element {
    useTitle("About");

    const name = "Alex Cole";
    const phone = "052-3294043";

    return (
        <div className="About">
            <div className="about-pic">
                <h1>{name}</h1>
                <h5>{phone}</h5>
                <img src={profileSource} alt="Profile" className="profile-pic" />
                    <IconButton href="https://www.linkedin.com/in/alex-cole-6a5651219/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </IconButton>
                    <IconButton href="https://github.com/alexcole123" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                    <IconButton href="https://www.facebook.com/AlexJCole1" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/alexjcole/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                    </IconButton>
                    {/* <IconButton>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    </IconButton> */}
            </div>
            <div className="about-info">
                <p>Hello there! 👋 I'm {name}, a passionate full-stack developer with a knack for building innovative web solutions. I thrive on the excitement of tackling complex problems and crafting elegant solutions that bring ideas to life. With a solid foundation in both frontend and backend technologies, I love exploring the ever-evolving landscape of web development and pushing the boundaries of what's possible.</p>
            </div>
        </div>
    );
}
