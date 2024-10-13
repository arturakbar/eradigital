import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <footer>
        <Container className="mt-5">
          <hr className="d-lg-none d-block" />
          <Row>
            <Col lg={4}>
              <img src="../../src/assets/logo.png" alt="" />
            </Col>
            <Col lg={4}>
              <p>&copy; Copyright DigitalEra 2024</p>
            </Col>
            <Col lag={4}>
              <img src="../../src/assets/img-footer.png" alt="" />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterComponent