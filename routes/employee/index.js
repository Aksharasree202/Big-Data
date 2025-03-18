import { Router } from "express";
import Employee from "../../models/employee.js";

const router = Router();


router.post("/create", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res
      .status(201)
      .json({ message: "✅ Employee Created Successfully", employee });
  } catch (error) {
    res.status(500).json({ message: "❌ Error Creating Employee", error });
  }
});


router.get("/get", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "❌ Error Fetching Employees", error });
  }
});


router.get("/get/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "❌ Employee Not Found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "❌ Error Fetching Employee", error });
  }
});


router.put("/update/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employee) {
      return res.status(404).json({ message: "❌ Employee Not Found" });
    }
    res
      .status(200)
      .json({ message: "✅ Employee Updated Successfully", employee });
  } catch (error) {
    res.status(500).json({ message: "❌ Error Updating Employee", error });
  }
});


router.delete("/delete/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "❌ Employee Not Found" });
    }
    res.status(200).json({ message: "✅ Employee Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error Deleting Employee", error });
  }
});

export default router;
