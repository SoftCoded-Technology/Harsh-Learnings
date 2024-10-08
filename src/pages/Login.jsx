import React, { useState } from "react";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateFormData } from "../features/form/formSlice";
import { NavLink } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const formData = useSelector((state) => state.form);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log({ values, depth: true });
    dispatch(updateFormData(updatedValues));
    setValues(initialState);
  };
  return (
    <>
      <FormControl>
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
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={onSubmit}
        >
          Login
        </Button>
      </FormControl>
      <p>
        <NavLink to={"/"}> Already have an account?</NavLink>
      </p>
      <p>
        <NavLink to={"/reset"}> Reset Password</NavLink>
      </p>
    </>
  );
}

export default Login;
