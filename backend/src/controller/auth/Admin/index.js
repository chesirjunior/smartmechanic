import CustomerModel from "../../../model/customer/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Joi from "joi";
import AdminModel from "../../../model/Admin/index.js";

const admin_authController = {
  login: async (req, res) => {
    const payload = req.body;

    const schema = Joi.object({
      Email: Joi.string().min(10).max(30).required().email(),
      Password: Joi.string().min(8).max(15).required(),
    });
    const { error } = schema.validate(payload);
    if (error) {
      return res.status(400).json({ message: "Invalid data", error: error });
    }

    const admin = await AdminModel.findOne({
      where: {
        Email: payload.Email,
      },
    });
    if (!admin) {
      return res.status(401).json({
        message: "invalid credentional",
      });
    }

    //compare password
    const Password = payload.Password;
    const hashPassword = admin.Password;
    const validPass = await bcrypt.compare(Password, hashPassword);
    if (!validPass) {
      return res.status(401).send("Invalid Password");
    } else {
      console.log(validPass, "this is a result");
    }

    const data = {
      id: admin.id,
      Email: admin.Email,
    };

    const expirationTime = Math.floor(Date.now() / 1000) + 2 * 60 * 60;

    // token Expiry
    jwt.sign({ ...data, exp: expirationTime }, "secret", (err, gettoken) => {
      if (err) {
        console.log(err);
        res.status.json(401)({
          message: " Internal Server Error",
        });
      } else {
        res.json({
          message: "Aadmin Logged In",
          data,
          gettoken,
        });
      }
    });
  },
  register: async function (req, res) {
    try {
      const payload = req.body;
      console.log(payload);
      // Validate the request payload
      const schema = Joi.object({
        Username: Joi.string().min(3).max(20).required().alphanum(),
        Email: Joi.string().min(10).max(30).required().email(),
        Password: Joi.string().min(8).max(15).required(),
      });
      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      // Check if the Password field exists in the payload
      if (!payload.Password) {
        return res.status(400).json({
          message: "Password is required",
        });
      }

      const saltround = 10;
      const Password = await bcrypt.hash(payload.Password, saltround);

      const admins = new AdminModel();
      admins.Username = payload.Username;
      admins.Password = Password;
      admins.Email = payload.Email;
      await admins.save();

      res.json({
        message: "Admin Created",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Failed to create admin",
      });
    }
  },
};
export default admin_authController;
