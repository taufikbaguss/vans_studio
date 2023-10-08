import { Card, Container, Row, Col, Image } from "react-bootstrap";
import harry1 from "../assets/images/harry_potter/harry1.png";
import harry2 from "../assets/images/harry_potter/harry2.png";
import harry3 from "../assets/images/harry_potter/harry3.png";
import harry4 from "../assets/images/harry_potter/harry4.png";
import harry5 from "../assets/images/harry_potter/harry5.png";
import harry6 from "../assets/images/harry_potter/harry6.png";
import harry7 from "../assets/images/harry_potter/harry7.png";
import harry8 from "../assets/images/harry_potter/harry8.png";
import harry9 from "../assets/images/harry_potter/harry9.png";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="h1_harry" id="trending">
          VANS REVEALS FULL HARRY POTTER COLLECTION
        </h1>
        <br />
        <Row>
          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry1} alt="Harry Potter" />
              <Card.Title className="text-cener">
                Sk8-Hi for Gryffindor
              </Card.Title>
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

          <Col md={4} className="shoesImage">
            <Card className="bg-dark text-light shoesImage">
              <Image src={harry7} alt="Harry Potter" />
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
              <Image src={harry8} alt="Harry Potter" />
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
              <Image src={harry9} alt="Harry Potter" />
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
