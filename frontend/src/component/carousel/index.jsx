import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            src="src\image\Engine.avif"
            alt="First slide"
            className="d-block w-100"
            style={{ fontSize: "1040px" }}
          />
          <Carousel.Caption>
            <p>Providing top-quality engine repair and deep cleaning services to your satisfaction.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            src="src\image\Wheel balancing.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Providing quality auto repair and maintenance services with expertise</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}></Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            src="src\image\Open bonnets.avif"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>
            Delivering top-quality service with precision and reliability.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
