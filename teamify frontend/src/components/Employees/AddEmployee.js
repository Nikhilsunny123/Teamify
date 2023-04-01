import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FormHelperText, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const addSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  job: Yup.string().required("Job is required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  job: "",
};

// const useStyles = makeStyles({
//   formControl: {
//     marginTop: "1rem",
//     marginBottom: "1rem",
//   },
//   error: {
//     color: "red",
//     marginTop: "0.5rem",
//   },
// });

export default function AddEmployee() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  const list = () => (
    <Box
      sx={{
        width: 350,
        height: "100%",
        backgroundColor: "#d0beed",
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
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            onSubmit,
          }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Field
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  as={TextField}
                  error={touched.firstName && errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
                <Field
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  as={TextField}
                  error={touched.lastName && errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
                <Field
                  name="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  as={TextField}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />
                <Box sx={{ margin: "16px 0" }}>
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
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                    <FormHelperText>
                      {touched.gender && errors.gender}
                    </FormHelperText>
                  </FormControl>
                </Box>
                <Box sx={{ margin: "16px 0" }}>
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
              <Button variant="contained" onClick={onSubmit}>
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
