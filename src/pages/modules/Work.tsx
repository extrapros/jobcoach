import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
} from "@material-ui/core";
import DateRangePicker, { DateRange } from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { Field, FieldArray, Form, Formik } from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import React, { useState } from "react";
import { array, boolean, number, object, string, ValidationError } from "yup";

const emptyDonation = { institution: "", percentage: 0 };
const useStyles = makeStyles((theme) => ({
  errorColor: {
    color: theme.palette.error.main,
  },
  noWrap: {
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  },
}));

export default function Work() {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Work History
      </Typography>
      <Card>
        <CardContent>
          <Formik
            initialValues={{
              fullName: "",
              donationsAmount: 0,
              termsAndConditions: false,
              donations: [emptyDonation],
            }}
           
            onSubmit={async (values) => {
              console.log("my values", values);
              return new Promise((res) => setTimeout(res, 2500));
            }}
          >
            {({ values, errors, isSubmitting, isValid }) => (
              <Form autoComplete="off">
                <Grid container item direction="column" spacing={3}>
                  <FieldArray name="donations">
                    {({ push, remove }) => (
                      <React.Fragment>
                        {values.donations.map((_, index) => (
                          <div>
                            <Card>
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    name={`donations.${index}.company`}
                                    component={TextField}
                                    label="Company"
                                    variant="filled"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    name={`donations.${index}.title`}
                                    component={TextField}
                                    label="Title"
                                    variant="filled"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                  >
                                    <DateRangePicker
                                      startText="From"
                                      endText="To"
                                      value={value}
                                      onChange={(newValue) => {
                                        setValue(newValue);
                                      }}
                                      renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                          <Field {...startProps} />
                                          <Box> to </Box>
                                          <Field {...endProps} />
                                        </React.Fragment>
                                      )}
                                    />
                                  </LocalizationProvider>
                                </Grid>
                                <Grid item container spacing={2}>
                                  <Grid item xs={12} sm={6}>
                                    <Field
                                      fullWidth
                                      name={`donations.${index}.city`}
                                      component={TextField}
                                      label="City"
                                      variant="filled"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Field
                                      fullWidth
                                      name={`donations.${index}.country`}
                                      component={TextField}
                                      type="number"
                                      label="Country"
                                      variant="filled"
                                    />
                                  </Grid>
                                </Grid>
                                {index !== 0 && (
                                  <Grid item xs={12} sm={6}>
                                    <Button
                                      disabled={isSubmitting}
                                      onClick={() => remove(index)}
                                    >
                                      Delete
                                    </Button>
                                  </Grid>
                                )}
                              </Grid>

                              <Grid item>
                                {typeof errors.donations === "string" ? (
                                  <Typography color="error">
                                    {errors.donations}
                                  </Typography>
                                ) : null}
                              </Grid>
                            </Card>

                            <Grid item xs={12} sm={6}>
                              <Button
                                disabled={isSubmitting}
                                variant="contained"
                                onClick={() => push(emptyDonation)}
                              >
                                Add
                              </Button>
                            </Grid>
                          </div>
                        ))}
                      </React.Fragment>
                    )}
                  </FieldArray>

                  <Grid item xs={12} sm={6}>
                    <Field
                      name="termsAndConditions"
                      type="checkbox"
                      component={CheckboxWithLabel}
                      Label={{
                        label: "I accept the terms and conditions",
                        className: errors.termsAndConditions
                          ? classes.errorColor
                          : undefined,
                      }}
                    />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
