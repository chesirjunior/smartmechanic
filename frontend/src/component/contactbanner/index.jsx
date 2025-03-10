import { Col, Container, Row } from "react-bootstrap";

const Contactbanner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <div className="relative w-full ">
              <img
                src="src\image\Stranded Driver.jpeg"
                alt="Your Image"
                className="object-cover w-full h-full lg:h-[540px]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-white bg-black bg-opacity-50 ">
                <div className="sm:w-1/2">
                  <span className="md:text-4xl font-bold mb-4 border-b-4 border-yellow-300 p-2">
                    CONTACT US
                  </span>
                  <h2 className="md:text-4xl font-bold my-4">
                    Reach out to us today for your vehicle repairs.We are available 24/7.
                  </h2>
                  <p className="md:text-xl">
                    Contact us today through our various platforms and get your vehicle fixed in no time.
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

export default Contactbanner;
