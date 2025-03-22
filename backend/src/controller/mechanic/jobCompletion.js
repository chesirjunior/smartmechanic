import job_CompletionModel from "../../model/mechanic/jobComplete.js";
import Joi from "joi";

const job_CompletionController = {
  // Create a new job completion record
  create: async (req, res) => {
    try {
      const payload = req.body;
      console.log(payload);

      // Validate the payload using Joi
      const schema = Joi.object({
        Description: Joi.string().required(),
        laborCost: Joi.number().required(),
        serviceCharge: Joi.number(),
        MechanicId: Joi.number(),
        requestServiceId: Joi.number(),
      });

      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      // Calculate the total bill
      const totalBill = payload.laborCost + payload.serviceCharge;

      // Create the job completion record
      const jobCompletion = await job_CompletionModel.create({
        Description: payload.Description,
        laborCost: payload.laborCost,
        serviceCharge: payload.serviceCharge,
        totalBill: totalBill,
        MechanicId: payload.MechanicId,
        requestServiceId: payload.requestServiceId,
      });

      // Send the response
      res.json({
        message: "Job completion record created",
        jobCompletion,
      });
    } catch (error) {
      console.error("Error creating job completion record:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  },

  // Read all job completion records
  read: async (req, res) => {
    try {
      const jobCompletions = await job_CompletionModel.findAll({});
      res.json(jobCompletions);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Count the number of job completion records
  count: async (req, res) => {
    try {
      const jobCount = await job_CompletionModel.count();
      res.json(jobCount);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Failed to fetch data",
      });
    }
  },

  // Calculate the sum of the totalBill column
  sumBills: async (req, res) => {
    try {
      const totalSum = await job_CompletionModel.sum('totalBill');
      res.json( totalSum );
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to calculate sum of bills" });
    }
  },
};

export default job_CompletionController;