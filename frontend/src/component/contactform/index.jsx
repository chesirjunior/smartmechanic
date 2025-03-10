import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await axios.post("http://localhost:3308/contact", formData);
      console.log(response.data);
      setSuccessMessage("Your query has been submitted successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred while submitting your query. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Container className="py-4">
        <Row className="my-4 border-2 border-yellow-300 px-2">
          <Col xs={12} sm={12} md={6} className="py-2 px-0 ">
            <img
              src="src/image/bg (2).jpg"
              alt="Card image"
              className="w-100 h-[556px]"
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="my-2 bg-blue-500 flex flex-col justify-center text-white p-4 "
          >
            <div className="px-4 py-2 rounded bg-slate-200 ">
              <h2 className="font-bold text-center text-blue-500">
                Send Your Queries
              </h2>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="bg-slate-200 text-black mb-1 rounded p-2 text-sm border-2 border-blue-500"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-slate-200 text-black mb-1 rounded p-2 text-sm border-2 border-blue-500"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="phone"
                >
                  Phone No
                </label>
                <input
                  className="bg-slate-200 text-black mb-1 rounded p-2 text-sm border-2 border-blue-500"
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label
                  className="mb-1 font-bold text-md my-2 text-blue-500"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  cols="30"
                  rows="3"
                  placeholder="Enter Description"
                  className="bg-slate-200 text-black mb-1 rounded m-2 text-md p-2 border-2 border-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errorMessage && (
                  <div className="text-red-500 text-center mb-4">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="text-green-500 text-center mb-4">
                    {successMessage}
                  </div>
                )}
                <input
                  className="text-2xl mb-1 rounded border-2 border-white my-2 bg-blue-500 font-bold"
                  type="submit"
                  value="SUBMIT"
                  disabled={isSubmitting}
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contactform;