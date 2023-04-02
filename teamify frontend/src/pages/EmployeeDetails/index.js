import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteEmployee,
  selectEmpData,
  updateEmployee,
} from "../../store/teamifySlice/employeeSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Box, Button, FormHelperText, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteModal from "../../components/Employees/DeleteModal";

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

const EmployeeDetails = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const empData = useSelector(selectEmpData);
  const employee = empData.find((e) => e.id === parseInt(id));
  console.log(employee);

  const handleUpdate = (data, { setSubmitting }) => {
    console.log({
      ...data,
    });

    setSubmitting(true);

    dispatch(
      updateEmployee({
        ...data,
      })
    );
    setSubmitting(false);
  };
  const handleDelete = (data, { setSubmitting }) => {
    dispatch(deleteEmployee(data.id));
    console.log(data.id);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        height: "70%",
        alignItems: "center",
      }}
    >
      <Typography
        style={{
          display: "flex",
          color: "#6956E5",
          justifyContent: "center",
        }}
      >
        Employee Details
      </Typography>
      <Formik
        initialValues={{ ...employee }}
        validationSchema={addSchema}
        onSubmit={isEdit ? handleUpdate : handleDelete}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
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
                  disabled={!isEdit}
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
                  disabled={!isEdit}
                />
              </Box>
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
                disabled={!isEdit}
              />
              <Box>
                <FormControl
                  component="fieldset"
                  error={touched.gender && errors.gender}
                  disabled={!isEdit}
                >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
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
                    </Box>
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
                  disabled={!isEdit}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
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
                  </Box>
                </RadioGroup>

                {touched.job && errors.job && (
                  <FormHelperText error>{errors.job}</FormHelperText>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              {!isEdit ? (
                <>
                  <Button
                    onClick={() => setIsEdit(true)}
                    variant="contained"
                    type="button"
                    sx={{
                      backgroundColor: "#6956E5",
                    }}
                  >
                    Edit
                  </Button>

                  <DeleteModal onDelete={handleDelete} />
                </>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6956E5",
                  }}
                  type="submit"
                >
                  Confirm Changes
                </Button>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EmployeeDetails;
