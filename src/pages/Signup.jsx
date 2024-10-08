import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { updateFormData } from "../features/form/formSlice";
// import "../App.css";
import { FormControl } from "@mui/material";
// import BasicDatePicker from "../components/DatePicker";
import { NavLink } from "react-router-dom";

const initialState = {
  FName: "",
  email: "",
  password: "",
  cnf_password: "",
  dob: "",
};

function Signup() {
//   const formData = useSelector((state) => state.form);
  const [values, setValues] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    const formattedDate = selectedDate
      ? new Date(selectedDate).toLocaleDateString()
      : "";
    const updatedValues = { ...values, dob: formattedDate };
    console.log({ values, depth: true });
    dispatch(updateFormData(updatedValues));
    setValues(initialState);
  };
  return (
    <>
      <FormControl>
        <TextField
          label="Full Name"
          name="FName"
          variant="outlined"
          fullWidth
          margin="normal"
          value={values.FName}
          onChange={onHandleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={values.email}
          onChange={onHandleChange}
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={values.valuepassword}
          onChange={onHandleChange}
        />
        <TextField
          label="Confirm Password"
          name="cnf_password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={values.cnf_password}
          onChange={onHandleChange}
        />
        {/* <BasicDatePicker
          label="Pick a Date"
          value={selectedDate}
          onChange={setSelectedDate}
        /> */}
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={onSubmit}
        >
          Register
        </Button>
      </FormControl>
      <p>
        <NavLink to={"/login"}> Already have an account?</NavLink>
      </p>
      <p>
        <NavLink to={"/reset"}> Reset Password</NavLink>
      </p>
    </>
  );
}

export default Signup;
