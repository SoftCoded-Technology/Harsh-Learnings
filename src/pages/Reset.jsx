import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { updateFormData } from "../features/form/formSlice";
import { FormControl } from "@mui/material";
import { NavLink } from "react-router-dom";


const initialState = {
  password: "",
  cnf_password: "",
};
function Reset() {
  const formData = useSelector((state) => state.form);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log({ values, depth: true });
    dispatch(updateFormData(values));
    setValues(initialState);
  };
  return <>
    <FormControl>
       
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
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={onSubmit}
        >
          Reset Password
        </Button>
      </FormControl>
      {/* <p>
        <NavLink to={"/login"}> Already have an account?</NavLink>
      </p>
      <p>
        <NavLink to={"/signup"}> Reset Password</NavLink>
      </p> */}
  </>;
}

export default Reset;
