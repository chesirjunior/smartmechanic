import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Servicelist = () => {
  const navigate = useNavigate();
  const [catlist, setcatlist] = useState([]);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3308/categories", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      setcatlist(res.data["getCategories"]);
      console.log(res.data["getCategories"]);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      

<Row>
  <Col xs={12} className="p-10 text-center">
    <h1 className="text-3xl font-bold">What We Do</h1>
    <div className="flex flex-col md:flex-row justify-between items-center my-4">
      <p className="text-lg text-gray-600 md:w-2/3 leading-relaxed">
        We offer a wide range of services to cater for all your vehicle needs. Our services range from wheel balancing, engine services, brake lining among other services. Visit us today to experience.
      </p>
      <Button
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md mt-3 md:mt-0"
        onClick={() => navigate("/service")}
      >
        View Services
      </Button>
    </div>
    <div className="border-4 border-yellow-300 my-4"></div>
  </Col>
</Row>

<Row className="gx-4 gy-5">
  {catlist.map((data, index) => (
    <Col key={index} md={4} xs={12} className="flex justify-center">
      <Card className="shadow-lg p-6 bg-white rounded-lg w-full max-w-sm">
        <div className="flex justify-center">
          <img
            src="src/image/carmechanic.png"
            alt="service icon"
            className="h-24"
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="text-xl font-bold text-gray-800">
            {data.CategoryType}
          </Card.Title>
          <Card.Text className="text-gray-600 text-md leading-relaxed">
            Welcome for the above services
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


    </Container>
  );
};

export default Servicelist;
