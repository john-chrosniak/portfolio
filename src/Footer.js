
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="contactinfo">
                <a style={{margin: "5px"}} href="https://www.linkedin.com/in/john-chrosniak/"><FontAwesomeIcon icon={faLinkedin} alt="LinkedIn Logo" style={{width:"50px", height:"50px", color:"#0077b5"}}/></a>
                <a style={{margin: "5px"}} >jlc9wr@virginia.edu</a>
                <a style={{margin: "5px"}} href="https://github.com/john-chrosniak"><FontAwesomeIcon icon={faGithub} alt="Github Logo" style={{width:"50px", height:"50px", color:"#000000"}}/></a>
            </div>
            <div className="copyright">
                <p>&copy;John Chrosniak 2023</p>
            </div>
        </div>
    );
}

export default Footer;