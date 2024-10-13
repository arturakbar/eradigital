import NavbarComponen from '../components/NavbarComponen'
import { Card } from 'react-bootstrap'
import { Container, Row, Col, Button } from 'react-bootstrap'
import hero from "../assets/img-hero.png"
import FooterComponent from '../components/FooterComponen'

const HomePage = () => {
  return (
    <>
      <NavbarComponen />
      <div className="hero">
        <Container>
          <Row>
            <Col>
              <Card className="text-white mt-5">
                <Card.Img src={hero} alt="" />
                <Card.ImgOverlay className='home'>
                  <Card.Title>
                    <h2>

                      Penawaran Laptop <br />
                      Terbaik Untuk Anda!
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    Aman, Cepat, dan Praktis!
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="Produk" className="mt-5">
        <Container>
          <Row>
            <h3 className=''>Sedang Promo Saat ini</h3>
            <Col lg={3}>
              <Card>
                <Card.Img variant="top" src="../../src/assets/img-hero-1.png" />
                <Card.Body>
                  <Card.Title>Lenovo Ideapad 1 14GL7 </Card.Title>
                  <Card.Text>
                    Rating 4.5
                  </Card.Text>
                  <Card.Text><b>25 juta</b></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card>
                <Card.Img variant="top" src="../../src/assets/img-hero-2.png" />
                <Card.Body>
                  <Card.Title>ThinkPad X12 Detachable</Card.Title>
                  <Card.Text>
                    Rating 4.5
                  </Card.Text>
                  <Card.Text><b>25 juta</b></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card>
                <Card.Img variant="top" src="../../src/assets/img-hero-3.png" />
                <Card.Body>
                  <Card.Title>ThinkPad X1 Yoga Gen 5</Card.Title>
                  <Card.Text>
                    Rating 4.5
                  </Card.Text>
                  <Card.Text><b>25 juta</b></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card>
                <Card.Img variant="top" src="../../src/assets/img-hero-4.png" />
                <Card.Body>
                  <Card.Title>ThinkPad X1 Nano</Card.Title>
                  <Card.Text>
                    Rating 4.5
                  </Card.Text>
                  <Card.Text><b>25 juta</b></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="terkini mt-4">
            <h3>Produk Terkini</h3>
            <Row>
              <Col lg={3}>
                <Card>
                  <Card.Img variant="top" src="../../src/assets/img-hero-2.png" />
                  <Card.Body>
                    <Card.Title>ThinkPad X12 Detachable</Card.Title>
                    <Card.Text>
                      Rating 4.5
                    </Card.Text>
                    <Card.Text><b>25 juta</b></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card>
                  <Card.Img variant="top" src="../../src/assets/img-hero-4.png" />
                  <Card.Body>
                    <Card.Title>ThinkPad X1 Nano</Card.Title>
                    <Card.Text>
                      Rating 4.5
                    </Card.Text>
                    <Card.Text><b>25 juta</b></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card>
                  <Card.Img variant="top" src="../../src/assets/img-hero-3.png" />
                  <Card.Body>
                    <Card.Title>ThinkPad X1 Yoga Gen 5</Card.Title>
                    <Card.Text>
                      Rating 4.5
                    </Card.Text>
                    <Card.Text><b>25 juta</b></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3}>
                <Card>
                  <Card.Img variant="top" src="../../src/assets/img-hero-1.png" />
                  <Card.Body>
                    <Card.Title>Lenovo Ideapad 1 14GL7</Card.Title>
                    <Card.Text>
                      Rating 4.5
                    </Card.Text>
                    <Card.Text><b>25 juta</b></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div id="Promo" className="mt-5 ">
        <Container>
          <Row>
            <Col lg={4}>
              <img src="../../src/assets/img-promo-1.png" alt="" />
            </Col>
            <Col lg={8}>
              <img src="../../src/assets/img-promo.png" alt="" />
            </Col>
          </Row>
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
        </Container>
      </div>

    </>
  )
}

export default HomePage