import { Col, Container, Row } from "react-bootstrap";

const Staffmember = () => {
  return (
    <>
      <Container>
        <Row className="m-2">
          <Col xs={12} sm={12} md={6} className="py-2 px-0">
            <img
              src="src\image\Tony Kariuki.jpeg"
              alt="Card image"
              className="w-100"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-2 bg-blue-500 flex flex-col justify-center text-white p-4"
          >
            <h2 className="font-bold">Tony Adam</h2>
            <h5>Engine Mechanic</h5>
            <p>
              Specializes in all engine issues with experience of more than ten years dealing with engines.​​
            </p>
          </Col>
          <div className="border-b-4 border-yellow-300 mt-2"></div>
        </Row>
        <Row className="m-2">
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\Dennis Mulwa.jpeg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Dennis Mulwa</h5>
                  <h5 classname="font-bold">Brakes Allignment Mechanic</h5>
                  <p>
                    Specialised in brakes allignment, balancing and suspension systems.​​ Has been in the industry for more than 5 years.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\Jason Kimani.jpeg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Jason Kimani</h5>
                  <h5 classname="font-bold">Wheels Mechanic</h5>
                  <p>
                    Specialised in wheel allignment, balancing and suspension systems with experience exceeding 5 years.​​in the field.
                    </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <div className="border-b-4 border-yellow-300 my-2"></div>
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Gladys Muthoni</h5>
                  <h5 classname="font-bold">Electrical Repair Mechanic</h5>
                  <p>
                    Need assistance with electrical repair? Gladys is the right person to contact. She has been in the industry for more than 7 years.​​
                  </p>
                </Col>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\Gladys Muthoni.jpeg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="p-0">
            <Container>
              <Row>
                <Col
                  xs={12}
                  lg={6}
                  className="my-2 bg-blue-500 flex flex-col justify-center text-white py-4"
                >
                  <h5 className="font-bold">Yvonne Wangeci</h5>
                  <h5 classname="font-bold">General Mechanic</h5>
                  <p>
                    Has a vast experience ranging from battery services, oil services and other general services. Has been in the industry for more than 10 years.​​
                  </p>
                </Col>
                <Col xs={12} lg={6} className="py-2 px-0">
                  <img
                    src="src\image\Yvonne Wangeci.jpeg"
                    alt="Card image"
                    className="w-100"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Staffmember;
