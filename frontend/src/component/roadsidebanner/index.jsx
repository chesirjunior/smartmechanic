import { Col, Container, Row } from "react-bootstrap";

const Roadsidebanner = () => {
  return (
    <>
      <Container fluid>
        <Row className="m-4 border-4 border-yellow-300 px-2">
          <Col xs={12} sm={12} md={6} className="py-2 px-0">
            <img
              src="src\image\img1.jpg"
              alt="Card image"
              className="w-100"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-2 bg-blue-500 text-center flex flex-col justify-center text-white p-4"
          >
            <h2 className="font-bold">Need a Roadside Assistance?</h2>
            <p>
              We are avaialble at your service any time of the day with qualified mechanics within a click of a button. We offer a wide range of services including jump start, brake lining, tire change, oil change, and many more. We are here to help you get back on the road as soon as possible.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Roadsidebanner;
