import { Col, Container, Row } from "react-bootstrap";

const Review = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="p-10">
            <h1>What Our Customers Say</h1>
            <p>
              Hear from our satisfied customers about their experiences with our
              services. We take pride in delivering exceptional automotive care.
            </p>
            <div className="border-4 border-yellow-300 border-spacing-8"></div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="p-4">
            <div className="mb-4 p-4 bg-slate-100 border-b-4 border-yellow-300">
              <p>
                "I had an amazing experience with their team. They fixed my car
                quickly and efficiently. Highly recommended for anyone looking
                for reliable automotive services!"
              </p>
              <div className="h-[60px] p-2 flex items-center">
                <img
                  src="src\image\carmechanic.png"
                  alt="customer icon"
                  className="h-[50px] rounded-full p-2 bg-blue-500 w-[50px]"
                />
                <h4 className="px-4">James Mulwa</h4>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="p-4">
            <div className="mb-4 p-4 bg-slate-100 border-b-4 border-yellow-300">
              <p>
                "The staff was very professional and knowledgeable. They
                explained everything clearly and made sure I was satisfied with
                the service. Great job!"
              </p>
              <div className="h-[60px] p-2 flex items-center">
                <img
                  src="src\image\carmechanic.png"
                  alt="customer icon"
                  className="h-[50px] rounded-full p-2 bg-blue-500 w-[50px]"
                />
                <h4 className="px-4">Fred Wambua</h4>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} className="p-4">
            <div className="mb-4 p-4 bg-slate-100 border-b-4 border-yellow-300">
              <p>
                "I've been coming here for years, and they never disappoint.
                Their prices are fair, and the quality of work is always top-notch."
              </p>
              <div className="h-[60px] p-2 flex items-center">
                <img
                  src="src\image\carmechanic.png"
                  alt="customer icon"
                  className="h-[50px] rounded-full p-2 bg-blue-500 w-[50px]"
                />
                <h4 className="px-4">Michael Kiema</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Review;