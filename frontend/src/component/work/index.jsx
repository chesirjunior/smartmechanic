import { Col, Container, NavLink, Row } from "react-bootstrap";

const Work = () => {
  return (
    <>
      <Container className="my-8">
        <Row>
          <Col xs={12} className="p-10">
            <h1>Why Choose Us</h1>
            <p>
              We are committed to providing top-notch automotive services with a
              focus on quality, reliability, and customer satisfaction.
            </p>
            <div className="border-4 border-yellow-300 border-spacing-8"></div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Expert Engineers</b>
              </h3>
              <p>
                Our team consists of highly skilled and certified engineers who
                specialize in diagnosing and repairing all types of vehicles.
                With years of experience, they ensure your car is in safe hands.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Experienced Technicians</b>
              </h3>
              <p>
                Our technicians have extensive experience in handling complex
                automotive issues. They use the latest tools and techniques to
                deliver efficient and effective solutions.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Guaranteed Service</b>
              </h3>
              <p>
                We stand behind our work with a satisfaction guarantee. If
                you're not happy with our service, we'll make it right.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="p-4">
            <div>
              <h3>
                <b>Trusted Work</b>
              </h3>
              <p>
                We have built a reputation for trust and reliability. Our
                customers rely on us for honest advice and high-quality repairs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Work;