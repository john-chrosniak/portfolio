import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

import me_and_truck from './images/truck.jpg'
import car_team from './images/car_team.png'
import solar_car from './images/solar_car.jpg'
import glacier from './images/glacier.jpg'

const About = () => {
    return (
        <Container className='fullScreen'>
            <Row>
                <Col md={4}>
                    <Card className="text-center border-0">
                        <Card.Img variant="top" src={me_and_truck} style={{height: "25rem"}}/>
                            {/* <Card.Body> */}
                                {/* <Card.Title className="font-weight-bold">Me + Samir &lt;3</Card.Title> */}
                            {/* </Card.Body> */}
                    </Card>
                </Col>
                <Col md={8} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>Hi, I'm John! I'm an embodied AI researcher passionate about investigating ways to improve the safety and 
                agility of robotics and autonomous vehicles. I currently work full-time as a Connected Autonomous Vehicle Software Engineer for Leidos as part of the <a style={{color:"blue"}} 
                href="https://highways.dot.gov/research/laboratories/saxton-transportation-operations-laboratory/saxton-transportation-operations-laboratory-overview">
                Saxton Transportation Operations Laboratory</a>, where I focus on developing cooperative driving automation applications that improve the safety and efficiency of
                autonomous vehicles. I also work part-time as a Race Engineer for Code19 Racing, a startup focused on competing in the <a style={{color:"blue"}} href="https://a2rl.io/">
                Abu Dhabi Autonomous Racing Leaguue</a>, where I support the design and deployment of the motion planning and controls stack for a full-scale autonomous racecar that
                races on the Yas Marina Formula One Circuit.
                </p>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col md={{span: 7, order: 1}} xs={{span:12, order: 2}} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>As a graduate student at the University of Virginia, I led the Perception Sub-Team of the <a style={{color:"blue"}} href="https://autonomousracing.dev/">Cavalier Autonomous Racing Team</a>.
                I was in charge of leading the design, development, and deployment of  the object detection and tracking software for a full-scale autonomous racecar that competes year round in time trial and head-to-head competitions
                as part of the <a style={{color:"blue"}} href="https://www.indyautonomouschallenge.com/">Indy Autonomous Challenge </a>at professional racing tracks like the Indianapolis Motor Speedway, Las Vegas Motor Speedway, and Texas Motor Speedway.
                My master's thesis focused on combining physics-based and data-driven approaches to model the complex dynamics of a racecar when operating at its handling limits.
                </p>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }}>
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
                <p className="lead" style={{textIndent: "50px"}}>I was also heavily involved with the <a style={{color:"blue"}} href="https://www.solarcaratuva.org/">Solar Car Team at UVA </a> as an undergraduate.
                My teammates and I designed and manufactured a full-scale solar-powered racecar that competed in the <a style={{color:"blue"}} href="https://www.americansolarchallenge.org/about/formula-sun-grand-prix/">Formula Sun Grand Prix </a>
                at the Heartland Motorsports Park. My role as the Embedded System Team Co-Lead was to design the hardware and firmware that interfaces the various components
                of the racecar (e.g. solar panels, motor, battery pack) over a CANbus.
                </p>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col md={{span: 7, order: 1}} xs={{span:12, order: 2}} className="my-auto">
                <p className="lead" style={{textIndent: "50px"}}>When I'm not hunched over a computer, I spend as much time as I can outdoors.
                I love running, snowboarding, mountain biking, hiking, backpacking, and recently gave mountaineering a try (big fan of mountains)! I also
                enjoy cooking, video games, and playing the guitar, trombone, or trumpet.
                </p>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }}>
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