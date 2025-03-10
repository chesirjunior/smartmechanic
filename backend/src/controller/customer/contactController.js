import Contact from "../../model/customer/contact.js";

const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await Contact.create({ name, email, phone, message });
    res.status(200).send("Contact form submitted successfully");
  } catch (error) {
    res.status(500).send("Error submitting form");
  }
};

export default { createContact };