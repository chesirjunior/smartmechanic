import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../context/logincontext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginSchema = Yup.object().shape({
  Email: Yup.string().email("Invalid email").required("Required"),
  Password: Yup.string().required("Required"),
});

const Loginform = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserEmail, setIsLoggedIn } = useContext(UserAuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      console.log("Logging in with:", values);
      const userresponse = await axios.post(
        "http://localhost:3308/login",
        values
      );
      console.log("User login response:", userresponse.data);

      if (userresponse.status === 200) {
        const { data, gettoken } = userresponse.data;
        const { id, Email } = data;

        localStorage.setItem("token", gettoken);
        localStorage.setItem("userId", id);
        localStorage.setItem("userEmail", Email);

        setUserEmail(values.Email);
        setIsLoggedIn(true);
        setSubmitting(false);
        navigate("/");
        return;
      }
      setErrorMessage("Invalid email or password. Please try again.");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setErrorMessage("An error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img
        src="src\image\Untitled design.png"
        alt="Your Image"
        className="object-cover w-full h-full fixed top-0 left-0 z-0 hidden lg:block"
      />
      <img
        src="src\image\bgsignup.jpg"
        alt="Your Image"
        className="object-cover w-full h-full fixed top-0 left-0 z-0 block md:hidden"
      />
      <div className="flex items-center font-bold">
        <span>Online</span>
        <img
          src="src\image\MECHA LOGO.jpg"
          alt="Image Loading Error"
          className="w-[35px] h-[35px] mx-1"
        />
        <span>Mechanics</span>
      </div>
      <div className="absolute w-100 p-4 md:top-24 border-[0px] h-full overflow-y-scroll no-scrollbar ">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-white">
              <div className="bg-blue-500 py-2 pr-4 rounded-lg border-4 border-yellow-300 lg:w-3/4">
                <div className="flex justify-center">
                  <NavLink to="/signup" className="p-2 text-white ml-auto">
                    Create an account
                  </NavLink>
                </div>
                <h1 className="font-bold text-center">Log In </h1>
                <Formik
                  initialValues={{
                    Email: "",
                    Password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={handleLogin}
                >
                  {({ isSubmitting, isValid }) => (
                    <Form className="z-10">
                      <div>
                        <label
                          htmlFor="Email"
                          className="text-lg mx-2 font-bold"
                        >
                          Email
                        </label>
                        <br />
                        <Field
                          type="email"
                          name="Email"
                          className="text-lg m-2 w-100 text-black px-2"
                        />
                        <ErrorMessage
                          name="Email"
                          component="div"
                          className="text-red-500 px-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="Password"
                          className="text-lg mx-2 font-bold"
                        >
                          Password
                        </label>
                        <br />
                        <div className="relative">
                          <Field
                            type={showPassword ? "text" : "password"}
                            name="Password"
                            className="text-lg m-2 w-100 text-black px-2"
                          />
                          <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 cursor-pointer"
                          >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                          </span>
                        </div>
                        <ErrorMessage
                          name="Password"
                          component="div"
                          className="text-red-500 px-2"
                        />
                      </div>
                      {errorMessage && (
                        <div className="text-red-500 text-center mb-4">
                          {errorMessage}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className="border-4 border-white rounded-lg m-2 px-2 py-1 w-[100px] font-bold"
                      >
                        LOG IN
                      </button>
                      <div>
                        <a href="#" className="p-2 text-white">
                          Forget Password
                        </a>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Loginform;