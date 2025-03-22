import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const AddCategory = () => {
  const [categoryType, setCategoryType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3308/categories", {
        CategoryType: categoryType,
      });

      if (response.status === 200) {
        setMessage("Category added successfully!");
        setCategoryType(""); // Clear the input field
      }
    } catch (error) {
      setMessage("Failed to add category. Please try again.");
      console.error(error);
    }
  };

  return (
    <Container className="my-4">
      <h1 className="text-center font-bold text-blue-500 border-b-4 border-yellow-300 py-2">
        ADD NEW CATEGORY
      </h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="categoryType"
                className="block text-sm font-medium text-gray-700"
              >
                Category Type:
              </label>
              <input
                type="text"
                id="categoryType"
                value={categoryType}
                onChange={(e) => setCategoryType(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Add Category
            </button>
          </form>
          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddCategory;