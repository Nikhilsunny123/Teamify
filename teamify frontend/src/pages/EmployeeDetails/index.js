import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteEmployee,
  selectEmpData,
  updateEmployee,
} from "../../store/teamifySlice/employeeSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Avatar, Box, Button, FormHelperText, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteModal from "../../components/shared/DeleteModal";
import Toastr from "../../components/shared/Toastr";

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
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const empData = useSelector(selectEmpData);
  const employee = empData.find((e) => e.id === parseInt(id));
  console.log(employee);

  const handleUpdate = async (data, { setSubmitting }) => {
    setSubmitting(true);

    await dispatch(
      updateEmployee({
        ...data,
      })
    );
    await setSubmitting(false);
    await setIsEdit(false);
  };
  const handleDelete = async () => {
    console.log(employee.id);
    try {
      await dispatch(deleteEmployee(employee.id));
      await (<Toastr />);
      await navigate("/employees");
    } catch (error) {
      console.log("not dispatched");
    }
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
      <div>
        <Avatar />
      </div>
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
        {({
          values,
          errors,
          touched,
          handleChange,
          isSubmitting,
          submitForm,
        }) => (
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
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="Female"
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
                <FormControl
                  component="fieldset"
                  error={touched.job && errors.job}
                  disabled={!isEdit}
                >
                  <FormLabel component="legend">Job</FormLabel>
                  <RadioGroup
                    name="job"
                    value={values.job}
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
                        value="Marketing"
                        control={<Radio />}
                        label="Marketing"
                      />
                      <FormControlLabel
                        value="Hr"
                        control={<Radio />}
                        label="HR"
                      />
                      <FormControlLabel
                        value="Developer"
                        control={<Radio />}
                        label="Developer"
                      />
                      <FormControlLabel
                        value="Designer"
                        control={<Radio />}
                        label="Designer"
                      />
                    </Box>
                  </RadioGroup>
                  <FormHelperText>{touched.job && errors.job}</FormHelperText>
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                marginTop: "10px",
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

                  <DeleteModal onDelete={handleDelete} name="Employee" />
                </>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6956E5",
                  }}
                  onClick={() => submitForm()}
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
