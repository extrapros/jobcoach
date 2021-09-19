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
} from "@material-ui/core";
import { Field, FieldArray, Form, Formik } from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import React from "react";
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

export default function Education() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Education
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
                  {/* <Grid item xs={12} sm={6}>
                    <Field
                      fullWidth
                      name="school"
                      component={TextField}
                      label="School"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel component="legend">Degree?</FormLabel>
                    <RadioGroup row aria-label="degree">
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        fullWidth
                        name="program"
                        component={TextField}
                        label="Program"
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        fullWidth
                        name="years"
                        component={TextField}
                        type="number"
                        label="Years Attended"
                        variant="filled"
                      />
                    </Grid>
                  </Grid> */}
                  <FieldArray name="donations">
                    {({ push, remove }) => (
                      <React.Fragment>
                        {values.donations.map((_, index) => (
                          <Grid
                            container
                            item
                            direction="column"
                            key={index}
                            spacing={3}
                          >
                            <Grid item xs={12} sm={6}>
                              <Field
                                fullWidth
                                name={`donations.${index}.school`}
                                component={TextField}
                                label="School"
                                variant="filled"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <FormLabel component="legend">Degree?</FormLabel>
                              <RadioGroup
                                row
                                aria-label="degree"
                                name={`donations.${index}.degree`}
                              >
                                <FormControlLabel
                                  value="yes"
                                  control={<Radio />}
                                  label="Yes"
                                />
                                <FormControlLabel
                                  value="no"
                                  control={<Radio />}
                                  label="No"
                                />
                              </RadioGroup>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                fullWidth
                                name={`donations.${index}.program`}
                                component={TextField}
                                label="Program"
                                variant="filled"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <Field
                                fullWidth
                                name={`donations[${index}].years`}
                                component={TextField}
                                type="number"
                                label="Years Attended"
                                variant="filled"
                              />
                            </Grid>
                            {index !== 0 && (
                            <Grid item xs={12} sm={6}>
                              <Button
                                disabled={isSubmitting}
                                onClick={() => remove(index)}
                              >
                                Delete
                              </Button>
                            </Grid>)}
                          </Grid>
                        ))}

                        <Grid item>
                          {typeof errors.donations === "string" ? (
                            <Typography color="error">
                              {errors.donations}
                            </Typography>
                          ) : null}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Button
                            disabled={isSubmitting}
                            variant="contained"
                            onClick={() => push(emptyDonation)}
                          >
                            Add
                          </Button>
                        </Grid>
                      </React.Fragment>
                    )}
                  </FieldArray>

                 {/*  <Grid item xs={12} sm={6}>
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

                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      startIcon={
                        isSubmitting ? (
                          <CircularProgress size="0.9rem" />
                        ) : undefined
                      }
                    >
                      {isSubmitting ? "Submitting" : "Submit"}
                    </Button>
                  </Grid> */}
                </Grid>

                {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
