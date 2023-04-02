import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { FormHelperText, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import { addEmployee } from "../../store/teamifySlice/employeeSlice";
import { useDispatch } from "react-redux";

const addSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  job: Yup.string().required("Job is required"),
});
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  job: "",
};

export default function AddEmployee() {
  const [state, setState] = React.useState(false);

  const dispatch = useDispatch();

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const handleSubmit = (data, { setSubmitting }) => {
    console.log({
      ...data,
    });

    setSubmitting(true);
    // perform your form submission logic here
    dispatch(
      addEmployee({
        ...data,
      })
    );

    setSubmitting(false);
  };

  const list = () => (
    <Box
      sx={{
        width: 350,
        height: "100%",
        backgroundColor: "#dcf3f5",
        padding: "10px",
      }}
      role="presentation"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          toggleDrawer(false)(event);
        }
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            display: "flex",
            color: "#6956E5",
            justifyContent: "center",
          }}
        >
          Add New Employee
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={addSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, isSubmitting }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Field
                  name="first_name"
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  as={TextField}
                  error={touched.first_name && errors.first_name}
                  helperText={touched.first_name && errors.first_name}
                  sx={{
                    fontSize: "14px",
                  }}
                />
                <Field
                  name="last_name"
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  as={TextField}
                  error={touched.last_name && errors.last_name}
                  helperText={touched.last_name && errors.last_name}
                  sx={{
                    fontSize: "14px",
                  }}
                />
                <Field
                  name="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  as={TextField}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    fontSize: "14px",
                  }}
                />
                <Box>
                  <FormControl
                    component="fieldset"
                    error={touched.gender && errors.gender}
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                    <FormHelperText>
                      {touched.gender && errors.gender}
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box>
                  <span>Job</span>
                  <RadioGroup
                    name="job"
                    value={values.job}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="marketing"
                      control={<Radio />}
                      label="Marketing"
                    />
                    <FormControlLabel
                      value="hr"
                      control={<Radio />}
                      label="HR"
                    />
                    <FormControlLabel
                      value="developers"
                      control={<Radio />}
                      label="Developers"
                    />
                    <FormControlLabel
                      value="design"
                      control={<Radio />}
                      label="Design"
                    />
                  </RadioGroup>

                  {touched.job && errors.job && (
                    <FormHelperText error>{errors.job}</FormHelperText>
                  )}
                </Box>
              </Box>
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Add Employee</Button>
      <Drawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        ModalProps={{ BackdropProps: { invisible: true } }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
