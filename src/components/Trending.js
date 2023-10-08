import { Card, Container, Row, Col, Image } from "react-bootstrap";
import harry1 from "../assets/images/trending/harry1.png";
import harry2 from "../assets/images/trending/harry2.png";
import harry3 from "../assets/images/trending/harry3.png";
import harry4 from "../assets/images/trending/harry4.png";
import harry5 from "../assets/images/trending/harry5.png";
import harry6 from "../assets/images/trending/harry6.png";
const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="trending">
          Harry Potter Edition
        </h1>
        <br />
        <Row>
          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry1} alt="Harry Potter" />
              <Card.Title className="text-cener">Harry Potter</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry2} alt="Harry Potter" />
              <Card.Title className="text-cener">Harry Potter</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry3} alt="Harry Potter" />
              <Card.Title className="text-cener">Harry Potter</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry4} alt="Harry Potter" />
              <Card.Title className="text-cener">Harry Potter</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry5} alt="Harry Potter" />
              <Card.Title className="text-cener">Harry Potter</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry6} alt="Harry Potter" />
              <Card.Title className="text-cener">Harry Potter</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
