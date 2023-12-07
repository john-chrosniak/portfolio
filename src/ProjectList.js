import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ProjectList = () => {
    return (
        <Container className="pb-4">
            <h4 id="research">Research</h4>
            <Card className="text-center" border="secondary">
                <Card.Link href={"/*TODO: fill in with links */"} style={{textDecoration: 'none', color: 'black'}}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={"/*TODO: fill in with images */"}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Body>                
                                    <Card.Title className="font-weight-bold">Thesis Document</Card.Title>                
                                    <Card.Subtitle className="mb-2"> Insert Link Here</Card.Subtitle>   
                                    <Card.Text>
                                        Some quick explanation
                                    </Card.Text>           
                            </Card.Body>   
                        </Col>
                    </Row>
                </Card.Link>
            </Card>
            <h4 className="pt-5">Publications</h4>
            <Card className="text-center mb-2" border="secondary">
                <Card.Link href={"/*TODO: fill in with links */"} style={{textDecoration: 'none', color: 'black'}}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={"/*TODO: fill in with images */"}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Body>                
                                    <Card.Title className="font-weight-bold">Thesis Document</Card.Title>                
                                    <Card.Subtitle className="mb-2"> Insert Link Here</Card.Subtitle>   
                                    <Card.Text>
                                        Some quick explanation
                                    </Card.Text>           
                            </Card.Body>   
                        </Col>
                    </Row>
                </Card.Link>
            </Card>
            <Card className="text-center" border="secondary">
                <Card.Link href={"/*TODO: fill in with links */"} style={{textDecoration: 'none', color: 'black'}}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={"/*TODO: fill in with images */"}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Body>                
                                    <Card.Title className="font-weight-bold">Thesis Document</Card.Title>                
                                    <Card.Subtitle className="mb-2"> Insert Link Here</Card.Subtitle>   
                                    <Card.Text>
                                        Some quick explanation
                                    </Card.Text>           
                            </Card.Body>   
                        </Col>
                    </Row>
                </Card.Link>
            </Card>
            <h4 className="pt-5">Other Projects</h4>
            <Card className="text-center mb-2" border="secondary">
                <Card.Link href={"/*TODO: fill in with links */"} style={{textDecoration: 'none', color: 'black'}}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={"/*TODO: fill in with images */"}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Body>                
                                    <Card.Title className="font-weight-bold">Thesis Document</Card.Title>                
                                    <Card.Subtitle className="mb-2"> Insert Link Here</Card.Subtitle>   
                                    <Card.Text>
                                        Some quick explanation
                                    </Card.Text>           
                            </Card.Body>   
                        </Col>
                    </Row>
                </Card.Link>
            </Card>
            <Card className="text-center mb-2" border="secondary">
                <Card.Link href={"/*TODO: fill in with links */"} style={{textDecoration: 'none', color: 'black'}}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={"/*TODO: fill in with images */"}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Body>                
                                    <Card.Title className="font-weight-bold">Thesis Document</Card.Title>                
                                    <Card.Subtitle className="mb-2"> Insert Link Here</Card.Subtitle>   
                                    <Card.Text>
                                        Some quick explanation
                                    </Card.Text>           
                            </Card.Body>   
                        </Col>
                    </Row>
                </Card.Link>
            </Card>
            <Card className="text-center" border="secondary">
                <Card.Link href={"/*TODO: fill in with links */"} style={{textDecoration: 'none', color: 'black'}}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={"/*TODO: fill in with images */"}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Body>                
                                    <Card.Title className="font-weight-bold">Thesis Document</Card.Title>                
                                    <Card.Subtitle className="mb-2"> Insert Link Here</Card.Subtitle>   
                                    <Card.Text>
                                        Some quick explanation
                                    </Card.Text>           
                            </Card.Body>   
                        </Col>
                    </Row>
                </Card.Link>
            </Card>
            {/* <h4 className="pt-5">News</h4> */}

        </Container>
    );
}

export default ProjectList;