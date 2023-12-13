import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

import me_and_samir from './images/me_and_samir.jpg'
import Image from 'react-bootstrap/Image';

const About = () => {
    return (
        <Container className='fullScreen'>
            <h1><center>About Me</center></h1>
            <Row>
                <Col md={4}>
                    <Card className="text-center border-0">
                        <Card.Img variant="top" src={me_and_samir} style={{height: "25rem"}}/>
                            <Card.Body>
                                <Card.Title className="font-weight-bold">Me + Samir</Card.Title>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={8} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>Hi, I'm John! I'm currently a Master's student at the University of Virginia conducting research in the area of 
                autonomous racing. My research focuses on advancing the visual and physical intelligence of the AV-21, a full-scale autonomous racecar 
                capable of travelling upwards of 180 mph. I'm extremely passionate about improving the safety and efficiency of autonomous mobile robots and
                strive to use my proficient background in machine learning, dynamics modeling, and software engineering to solve complex problems.
                </p>
                <p className="lead" style={{textIndent: "50px"}}>
                    poopeater
                </p>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    );
}

export default About;