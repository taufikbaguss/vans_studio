import { Col, Container, Row, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">VANS</div>
            <div className="title">OFF THE WALL</div>
            <div className="introButton mt-4 text-center">
              <Button variant="light">Check Our Collection</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
