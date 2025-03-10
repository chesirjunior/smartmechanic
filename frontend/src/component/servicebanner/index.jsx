import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Servicebanner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <div className="relative w-full ">
              <img
                src="src/image/bg (1).jpg"
                alt="Your Image"
                className="object-cover w-full h-full lg:h-[540px]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-white bg-black bg-opacity-50 ">
                <div className="sm:w-1/2">
                  <span className="md:text-4xl font-bold mb-4 border-b-4 border-yellow-300 p-2">
                    OUR SERVICES
                  </span>
                  <h2 className="md:text-4xl font-bold my-4">
                  We are here to fix your car at your convinience.
                  </h2>
                </div>
                <Link to = "/serviceform">
                <button className="mt-6 bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:bg-yellow-600 transition duration-300">
                  Book Now
                </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Servicebanner;
