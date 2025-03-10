import { Col, Container, Row } from "react-bootstrap";

const Aboutbanner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <div className="relative w-full ">
              <img
                src="C:\wamp64\www\mechanicOnline_webApp\mechanicOnline_webApp-main\frontend\src\image\bg(10).jpg"
                alt="Your Image"
                className="object-cover w-full h-full lg:h-[540px]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-white bg-black bg-opacity-50 ">
                <div className="sm:w-1/2">
                  <span className="md:text-4xl font-bold mb-4 border-b-4 border-yellow-300 p-2">
                    ABOUT US
                  </span>
                  <h2 className="md:text-4xl font-bold my-4">
                    Your one stop online garage for all your repairs.
                  </h2>
                  <p className="md:text-xl">
                    Enjoy efficient and quality services any time of the day when you need them. We guarantee a broad based service delivery to our customer at affordable rates and pocket friendly. Visit us today to experience all services ranging from wheel balancing, engine services, brake lining among other services.
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

export default Aboutbanner;
