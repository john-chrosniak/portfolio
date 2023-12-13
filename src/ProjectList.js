import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'


import ddm_hero from './images/deep_dynamics_demo.mp4';
import perception_demo from './images/perception_demo.mp4'
import traj_demo from './images/halfwaydecentovertake.mp4'
import racecar_demo from './images/racecar_demo.mp4'

import aipd from './images/aipd_logo.png'
import capstone from './images/capstone.PNG'
import rosbot_sar from './images/sar_map.png'
import cube_crusher from './images/cube_crusher.png'
import free_throw_fixer from './images/shaq_free_throw.jpeg'
import pcd_augmentation from './images/pcd_perturbations.png'
import ml4va from './images/image_segmentation.png'



const ProjectList = () => {
    return (
        <Container className="pb-4 pt-4">

            <div id="Research section">
                <h2 id="research" className='text-center p-4'>Research</h2>
                <p className='text-center'>I conduct research at the intersection of Robotics and Machine Learning in the context of Autonomous Racing,
                    a field dedicated to improving the Safety of Autonomous Vehicles through Stress Testing in a High-Speed, Competitive Environment.
                    </p>
                <Row>
                    <Col md={6}>
                        <Card className="text-center m-1 border-1 bg-light">
                            <Card.Link href={"https://github.com/linklab-uva/deep-dynamics"} style={{textDecoration: 'none', color: 'black'}}>
                                <Row>
                                    <video muted loop onMouseOver={event => event.target.play()} onMouseOut={event => {event.target.currentTime=0; event.target.pause()}}>
                                        <source src={ddm_hero} type="video/mp4"/>
                                    </video>
                                </Row>
                                <Row>   
                                        <Card.Body>                
                                                <Card.Title className="font-weight-bold">Deep Dynamics</Card.Title>                
                                                <Card.Text>
                                                    Merging Physics and AI for Vehicle Dynamics Modeling
                                                </Card.Text>           
                                        </Card.Body>   
                                </Row>
                            </Card.Link>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="text-center m-1 border-1 bg-light">
                            <Card.Link href={"https://autonomousracing.dev/"} style={{textDecoration: 'none', color: 'black'}}>
                                <Row>
                                    <video muted loop onMouseOver={event => event.target.play()} onMouseOut={event => {event.target.currentTime=0; event.target.pause()}}>
                                        <source src={perception_demo} type="video/mp4"/>
                                    </video>
                                </Row>
                                <Row>   
                                        <Card.Body>                
                                                <Card.Title className="font-weight-bold">Racecar Detection and Tracking</Card.Title>                
                                                <Card.Text>
                                                    Teaching an Autonomous Racecar to Detect and Track Opponent Vehicles
                                                </Card.Text>           
                                        </Card.Body>   
                                </Row>
                            </Card.Link>
                            </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card className="text-center m-1 border-1 bg-light">
                        <Card.Link href={"https://github.com/linklab-uva/deepracing-state-estimation"} style={{textDecoration: 'none', color: 'black'}}>
                            <Row>
                                <video muted loop onMouseOver={event => event.target.play()} onMouseOut={event => {event.target.currentTime=0; event.target.pause()}}>
                                    <source src={traj_demo} type="video/mp4"/>
                                </video>
                            </Row>
                            <Row>   
                                    <Card.Body>                
                                            <Card.Title className="font-weight-bold">Racecar Trajectory Prediction</Card.Title>                
                                            <Card.Text>
                                                Predicting the Future Motion of Formula 1 Racecars
                                            </Card.Text>           
                                    </Card.Body>   
                            </Row>
                        </Card.Link>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="text-center m-1 border-1 bg-light">
                        <Card.Link href={"https://github.com/linklab-uva/rosbag2nuscenes"} style={{textDecoration: 'none', color: 'black'}}>
                            <Row>
                                <video muted loop onMouseOver={event => event.target.play()} onMouseOut={event => {event.target.currentTime=0; event.target.pause()}}>
                                    <source src={racecar_demo} type="video/mp4"/>
                                </video>
                            </Row>
                            <Row>   
                                    <Card.Body>                
                                            <Card.Title className="font-weight-bold">RACECAR Dataset + ROSBag2nuScenes</Card.Title>                
                                            <Card.Text>
                                                Making Autonomous Racing and ROS2 Bags Accessible to the AV Community
                                            </Card.Text>           
                                    </Card.Body>   
                            </Row>
                        </Card.Link>
                        </Card>
                    </Col>
                </Row>
            </div>


            <div id="Publications section">
                <h2 className="pt-5 text-center">Publications</h2>
                <Container className="mb-5">
                    <h4>Peer-Reviewed</h4>
                    <p><a href={"https://arxiv.org/abs/2312.04374"}><b>[3]</b> John Chrosniak, Jingyun Ning, and Madhur Behl. <b><i>Deep Dynamics: Vehicle Dynamics Modeling with a Physics-Informed Neural
                    Network for Autonomous Racing</i></b>. <i>Under Peer Review at RA-L</i>, 2023. </a><a href={"https://arxiv.org/abs/2312.04374"}> <FontAwesomeIcon icon={faFilePdf}/></a></p>
                    <p><a href={"https://arxiv.org/abs/2306.03252"}><b>[2]</b> Amar Kulkarni, John Chrosniak, Emory Ducote, Florian Sauerback, Andrew Saba, Utkarsh Chirimar, John Link,
                    Marcello Cellina, and Madhur Behl. <b><i>RACECAR &mdash; The Dataset for High-Speed Autonomous Racing</i></b>. In <i>2023 IEEE International
                    Conference on Intelligent Robots and Systems</i>, 2023.</a> <a href={"https://arxiv.org/abs/2306.03252"}> <FontAwesomeIcon icon={faFilePdf}/></a></p>
                    <p><a href={"https://par.nsf.gov/biblio/10320142-towards-multi-agent-autonomous-racing-deepracing-framework"}><b>[1]</b> Trent Weiss, John Chrosniak, and Madhur Behl. <b><i>Towards Multi-Agent Autonomous Racing with the DeepRacing Framework</i></b>. In <i>2021 IEEE International
                    Conference on Robotics and Automation (ICRA) - Workshop on Opportunities and Challenges with Autonomous Racing</i>, 2021. </a><a href={"https://par.nsf.gov/biblio/10320142-towards-multi-agent-autonomous-racing-deepracing-framework"}> <FontAwesomeIcon icon={faFilePdf}/></a></p>
                </Container>
                <Container className="mt-4">
                    <h4>Theses</h4>
                    <p><a href={"https://doi.org/10.18130/0qav-fv52"}><b>[2]</b> John Chrosniak. <i><b>Deep Dynamics: Vehicle Dynamics Modeling with a Physics-Informed Neural Network 
                    for Autonomous Racing</b></i>. University of Virginia, Computer Science - School of Engineering and Applied Science, MS (Master of Science), 2023. </a><a href={"https://doi.org/10.18130/0qav-fv52"}> <FontAwesomeIcon icon={faFilePdf}/></a></p>
                    <p><a href={"https://doi.org/10.18130/ppe1-at69"}><b>[1]</b> John Chrosniak. <i><b>Bouncer Locking System; Internet of Risky Things: Investigating the Social Construction of IoT Devices</b></i>.
                University of Virginia, School of Engineering and Applied Science, BS (Bachelor of Science), 2022. </a><a href={"https://doi.org/10.18130/ppe1-at69"}> <FontAwesomeIcon icon={faFilePdf}/></a></p>
                </Container>
            </div>


            <div id="Projects section" className="pb-5">
                <h2 className="pt-5"><center>Projects</center></h2>
                <Row>
                    <Col md={4}>
                        <Card className="text-center border border-secondary bg-light h-100">
                            <Card.Link href={"https://github.com/linklab-uva/aipd"} style={{textDecoration: 'none', color: 'black'}}>
                                    <Card.Img variant="top" src={aipd}/>
                                        <Card.Body>                
                                                <Card.Title className="font-weight-bold">A.I.P.D</Card.Title>                
                                                <Card.Text>
                                                    Enforcing Speeding with Autonomous Vehicles
                                                </Card.Text>           
                                        </Card.Body> 
                                        <br></br><br></br>
                                <Card.Footer className="text-muted text-start">Python, ROS, ROSBag API, OpenCV, Qt</Card.Footer>    
                            </Card.Link>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center border border-secondary bg-light h-100">
                            <Card.Link href={"https://github.com/You-Underestimate-Our-Powell/EmbeddedSystem"} style={{textDecoration: 'none', color: 'black'}}>
                                <Card.Img variant="top" src={capstone}/>
                                <Card.Body>                
                                    <Card.Title className="font-weight-bold">Bouncer Locking System</Card.Title>                
                                    <Card.Text>
                                        An Anti-Theft Lockbox for Safe Package Delivery
                                    </Card.Text>           
                                </Card.Body> 
                                <br></br>
                                <br></br>
                                <Card.Footer className="text-muted text-start">C++, Python, AWS S3, OpenCV, Flask, KiCad</Card.Footer>   
                            </Card.Link>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center border border-secondary bg-light h-100">
                             <Card.Link href={"https://github.com/john-chrosniak/rosbot-search-and-rescue"} style={{textDecoration: 'none', color: 'black'}}>
                                <Card.Img variant="top" src={rosbot_sar}/>
                                <Card.Body>                
                                    <Card.Title className="font-weight-bold">ROSbot Search & Rescue</Card.Title>                
                                    <Card.Text>
                                    Locating Objects of Interest While Mapping an Unknown Environment
                                    </Card.Text>           
                                </Card.Body>
                                <br></br>
                                <Card.Footer className="text-muted text-start">Python, C++, ROS, PCL, Eigen</Card.Footer>   
                            </Card.Link>
                        </Card>
                    </Col>
                </Row>
                <Row className="pt-5 h-100">
                    <Col md={3}>
                        <Card className="text-center border border-secondary bg-light h-100">
                            <Card.Link href={"https://github.com/john-chrosniak/cube-crusher"} style={{textDecoration: 'none', color: 'black'}}>
                                <Card.Img variant="top" src={cube_crusher}/>
                                <Card.Body>                
                                    <Card.Title className="font-weight-bold">Real-Time Cube Crusher</Card.Title>  
                                    <br></br>              
                                    <Card.Text>
                                    Cube Crusher Video Game for the Tiva C Series MCU
                                    </Card.Text>           
                                </Card.Body>
                                <br></br>
                                <Card.Footer className="text-muted text-start">C, ARM Assembly</Card.Footer>      
                            </Card.Link>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="text-center border border-secondary bg-light h-100">
                            <Card.Link href={"https://github.com/john-chrosniak/free-throw-fixer"} style={{textDecoration: 'none', color: 'black'}}>
                                <Card.Img variant="top" src={free_throw_fixer}/>
                                <Card.Body>                
                                    <Card.Title className="font-weight-bold">Free Throw Fixer Wearable Device</Card.Title>             
                                    <Card.Text>
                                    Fixing Basketball Shooting Form with a Smart Watch
                                    </Card.Text>           
                                </Card.Body>
                                <br></br>
                                <Card.Footer className="text-muted text-start">Python, Java, TensorFlow</Card.Footer>     
                            </Card.Link>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="text-center border border-secondary bg-light h-100">
                            <Card.Link href={"https://github.com/john-chrosniak/point-cloud-augmentation"} style={{textDecoration: 'none', color: 'black'}}>
                                <Card.Img variant="top" src={pcd_augmentation}/>
                                <Card.Body>                
                                    <Card.Title className="font-weight-bold">Point Cloud Augmentation</Card.Title>          
                                    <Card.Text>
                                        <br></br>
                                    Impact of Perturbation Injections for LiDAR-Based Neural Networks
                                    </Card.Text>           
                                </Card.Body>
                                <br></br>
                                <Card.Footer className="text-muted text-start">Python, PyTorch, PCL</Card.Footer>   
                            </Card.Link>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="text-center border border-secondary bg-light h-100">
                            <Card.Link href={"https://github.com/john-chrosniak/ML4VA"} style={{textDecoration: 'none', color: 'black'}}>
                                <Card.Img variant="top" src={ml4va}/>
                                <Card.Body>                
                                    <Card.Title className="font-weight-bold">Semantic Segmentation of Agricultural Fields</Card.Title>
                                    <Card.Text>
                                    Identifying Regions at Risk of Run-Off Water Pollution
                                    </Card.Text> 
                                </Card.Body> 
                                <br></br>
                                <Card.Footer className="text-muted text-start">Python, Tensorflow, Keras</Card.Footer>   
                            </Card.Link>
                        </Card>
                    </Col>  
                </Row>
            </div>
            {/* <h4 className="pt-5">News</h4> */}

        </Container>
    );
}

export default ProjectList;