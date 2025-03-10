import { Col, Container, NavLink, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Prefooter = () => {
  return (
    <>
      <Container fluid>
        <Row className="m-2">
          <Col xs={12} sm={6} md={6} lg={4} className="p-4">
            <div>
              <h3 className=" text-blue-500 font-bold">Mechanic Online</h3>
              <p>
                Follow us on our social media platforms to get the latest service updates and offers.
              </p>
              <div className="flex justify-around">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="p-4  sm:text-center">
            <h3 className=" text-blue-500 font-bold shadow-yellow-500">
              Our Services
            </h3>
            <NavLink to="/service">Wheel Balancing</NavLink>
            <NavLink to="/service">Engine services</NavLink>
            <NavLink to="/service">Brake Lining</NavLink>
            <NavLink to="/service">All Other vehicle Repairs </NavLink>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} className="p-4">
            <h3 className=" text-blue-500 font-bold shadow-yellow-500">
              Contact Us
            </h3>
            <p className="m-0">
              <b>Address:</b> P.O. BOX 143-10300, Kerugoya
            </p>
            <p className="m-0">
                <b>Whatsapp:</b> +254 712 345 678
              
            </p>
            <p className="m-0">
              <b>Email:</b> onlinemechanic@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Prefooter;
