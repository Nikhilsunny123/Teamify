import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const checkIfUserIsAuthenticated = () => {
    if (localStorage.getItem("isLogin")) {
      return true;
    } else {
      return false;
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(5px)",
        zIndex: 1,
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          localStorage.setItem("name", values.email);
          localStorage.setItem("isLogin", true);
          if (checkIfUserIsAuthenticated()) {
            navigate("/");
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backdropFilter: "blur(10px)",

              padding: "20px",
              backgroundColor: "#dcf3f5",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10%",
            }}
          >
            <h3 style={{}}>Sign In</h3>
            <Field
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              as={TextField}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              name="password"
              label="Password"
              variant="outlined"
              margin="normal"
              as={TextField}
              error={touched.password && errors.password}
              helperText={touched.password && errors.password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
