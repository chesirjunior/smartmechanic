import AdminModel from "../../model/Admin/index.js";

const adminController = {
    read: async (req, res) => {
        try {
          const getAdmin = await AdminModel.findAll({
            attributes: { exclude: ["Password"] }, // Exclude the Password column
          });
      
          res.json( getAdmin );
        } catch (error) {
          console.error("Error fetching admin data:", error);
          res.status(500).json({
            message: "Failed to get admin",
          });
        }
    }
}
      
    export default adminController;