import { Card, Container, Row, Col, Image } from "react-bootstrap";
import bseller1 from "../assets/images/bseller/bseller1.jpg";
import bseller2 from "../assets/images/bseller/bseller2.jpg";
import bseller3 from "../assets/images/bseller/bseller3.jpg";
import bseller4 from "../assets/images/bseller/bseller4.jpg";
import bseller5 from "../assets/images/bseller/bseller5.jpg";
const BestSeller = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="bseller">
          Best Seller
        </h1>
        <br />
        <Row>
          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={bseller1} alt="Harry Potter" />
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
              <Image src={bseller2} alt="Harry Potter" />
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
              <Image src={bseller3} alt="Harry Potter" />
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
              <Image src={bseller4} alt="Harry Potter" />
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
              <Image src={bseller5} alt="Harry Potter" />
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
              <Image src={bseller1} alt="Harry Potter" />
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
export default BestSeller;
