import Contact from "../../model/customer/contact.js";
const createContact = (req, res) => {
  const { name, email, phone, message } = req.body;

  // Log the form data
  console.log('Contact Form Submission:', { name, email, phone, message });

  // Respond with a success message
  res.status(200).json({ message: 'Your query has been submitted successfully.' });
};

export default { createContact };