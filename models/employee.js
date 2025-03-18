import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  salary: {
    type: Number,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
