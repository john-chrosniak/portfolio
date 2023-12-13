import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

import me_and_samir from './images/me_and_samir.jpg'
import car_team from './images/car_team.png'
import solar_car from './images/solar_car.jpg'
import glacier from './images/glacier.jpg'

const About = () => {
    return (
        <Container className='fullScreen'>
            <Row>
                <Col md={4}>
                    <Card className="text-center border-0">
                        <Card.Img variant="top" src={me_and_samir} style={{height: "25rem"}}/>
                            {/* <Card.Body> */}
                                {/* <Card.Title className="font-weight-bold">Me + Samir &lt;3</Card.Title> */}
                            {/* </Card.Body> */}
                    </Card>
                </Col>
                <Col md={8} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>Hi, I'm John! I'm currently a Master's student at the University of Virginia conducting research in the area of 
                autonomous racing. My research focuses on advancing the visual and physical intelligence of the AV-21, a full-scale autonomous racecar 
                capable of travelling upwards of 180 mph. I'm extremely passionate about improving the safety and efficiency of autonomous mobile robots and
                strive to use my proficient background in machine learning, dynamics modeling, and software engineering to solve complex problems.
                </p>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col md={7} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>As a Perception Team Co-Lead on the <a href="https://autonomousracing.dev/">Cavalier Autonomous Racing Team</a>,
                I am in charge of developing and deploying the object detection and tracking software for a full-scale autonomous racecar. The University of Virginia team competes year round in time trial and head-to-head competitions
                as part of the <a href="https://www.indyautonomouschallenge.com/">Indy Autonomous Challenge </a>at professional racing tracks like the Indianapolis Motor Speedway, Las Vegas Motor Speedway, and the Monza Circuit.
                </p>
                </Col>
                <Col md={5}>
                    <Card className="text-center border-0">
                        <Card.Img variant="top" src={car_team} style={{height: "25rem"}}/>
                            {/* <Card.Body> */}
                                {/* <Card.Title className="font-weight-bold">Me + Samir &lt;3</Card.Title> */}
                            {/* </Card.Body> */}
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Card className="text-center border-0">
                        <Card.Img variant="top" src={solar_car} style={{height: "25rem"}}/>
                            {/* <Card.Body> */}
                                {/* <Card.Title className="font-weight-bold">Me + Samir &lt;3</Card.Title> */}
                            {/* </Card.Body> */}
                    </Card>
                </Col>
                <Col md={7} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>I was also heavily involved with the <a href="https://www.solarcaratuva.org/"></a>Solar Car Team at UVA as an undergraduate.
                My teammates and I designed and manufactured a full-scale solar-powered racecar that competed in the <a href="https://www.americansolarchallenge.org/about/formula-sun-grand-prix/">Formula Sun Grand Prix </a>
                at the Heartland Motorsports Park. My role as the Embedded System Team Co-Lead was to design the hardware and firmware that interfaces the various components
                of the racecar (e.g. solar panels, motor, battery pack) over a CANbus.
                </p>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col md={7} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>When I'm not hunched over a computer, I spend as much time as I can outdoors.
                I love snowboarding, mountain biking, hiking, backpacking, and recently gave mountaineering a try (big fan of mountains). I also
                enjoy cooking, video games, and playing the guitar, trombone, or trumpet.
                </p>
                </Col>
                <Col md={5}>
                    <Card className="text-center border-0">
                        <Card.Img variant="top" src={glacier} style={{height: "25rem"}}/>
                            {/* <Card.Body> */}
                                {/* <Card.Title className="font-weight-bold">Me + Samir &lt;3</Card.Title> */}
                            {/* </Card.Body> */}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;