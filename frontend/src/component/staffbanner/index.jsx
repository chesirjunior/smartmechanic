import { Col, Container, Row } from "react-bootstrap";

const Staffbanner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <div className="relative w-full ">
              <img
                src="src\image\Mechanic.jpeg"
                alt="Your Image"
                className="object-cover w-full h-full lg:h-[540px]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-white bg-black bg-opacity-50 ">
                <div className="sm:w-1/2">
                  <span className="md:text-4xl font-bold mb-4 border-b-4 border-yellow-300 p-2">
                    MECHANICS
                  </span>
                  <h2 className="md:text-4xl font-bold my-4">
                    Fixing Cars Just Right For You.
                  </h2>
                  <p className="md:text-xl">
                    Get connected to our experienced mechanics who have experience in handling all your vehicle problems professionally.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Staffbanner;
