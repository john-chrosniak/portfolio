import linkedLogo from "./images/linkedin.png";
import githubLogo from "./images/github.png"

const Footer = () => {
    return (
        <div class='footer'>
            <div class="contactinfo">
                <a style={{margin: "5px"}} href="https://www.linkedin.com/in/john-chrosniak/"><img src={linkedLogo} alt="LinkedIn Logo" style={{width:"40px", height:"40px"}}></img></a>
                <a style={{margin: "5px"}} >chrosniakj@gmail.com</a>
                <a style={{margin: "5px"}} href="https://github.com/john-chrosniak"><img src={githubLogo} alt="Github Logo" style={{width:"40px", height:"40px"}}></img></a>
            </div>
            <div class="copyright">
                <p>&copy;John Chrosniak 2023</p>
            </div>
    </div>
    );
}

export default Footer;