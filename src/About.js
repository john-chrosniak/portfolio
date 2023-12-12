import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <Container className='fullScreen'>
            <p>Hi, I'm John! I'm currently a Master's student at the University of Virginia conducting research in the area of 
                autonomous racing. My research focuses on advancing the visual and physical intelligence of the AV-21, a full-scale autonomous racecar 
                capable of travelling upwards of 180 mph. I'm extremely passionate about improving the safety and efficiency of autonomous mobile robots and
                strive to use my proficient background in machine learning, dynamics modeling, and software engineering to solve complex problems.
            </p>
        </Container>
    );
}

export default About;