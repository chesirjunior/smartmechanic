import CustomerModel from "../model/customer/index.js";
import requestServices_Model from "../model/customer/request_Service.js";
import CategoriesModel from "../model/mechanic/categories.js";
import MechanicModel from "../model/mechanic/index.js";
import cust_ImageModel from "../model/customer/images.js";
import mech_ImageModel from "../model/mechanic/images.js";
import job_CompletionModel from "../model/mechanic/jobComplete.js";
import ContactModel from "../model/customer/contact.js";
import AdminModel from "../model/Admin/index.js";
const initDB = async () => {
  try {
    await CustomerModel.sync({ alter: true, force: false });
    console.log("✅ CustomerModel synced successfully.");

    await MechanicModel.sync({ alter: true, force: false });
    console.log("✅ MechanicModel synced successfully.");

    await requestServices_Model.sync({ alter: true, force: false });
    console.log("✅ requestServices_Model synced successfully.");

    await job_CompletionModel.sync({ alter: true, force: false });
    console.log("✅ job_CompletionModel synced successfully.");

    await cust_ImageModel.sync({ alter: true, force: false });
    console.log("✅ cust_ImageModel synced successfully.");

    await mech_ImageModel.sync({ alter: true, force: false });
    console.log("✅ mech_ImageModel synced successfully.");

    await CategoriesModel.sync({ alter: true, force: false });
    console.log("✅ CategoriesModel synced successfully.");
   
    await ContactModel.sync({ alter: true, force: false }); 
    console.log("✅ ContactModel synced successfully."); 
    
    await AdminModel.sync({ alter: true, force: false }); 
    console.log("✅ AdminModel synced successfully."); 

    console.log("✅ All models synced successfully.");
  } catch (err) {
    console.error("❌ Unable to sync models:", err);
    throw err; // Throw error to handle it in app.js
  }
};

export default initDB;