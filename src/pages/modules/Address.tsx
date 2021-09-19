import * as React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { Field } from "formik";

export function Address() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            autoComplete="given-name"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            autoComplete="family-name"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="middlename"
            name="middleName"
            label="Middle Name"
            fullWidth
            autoComplete="family-name"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="mailingaddress"
            name="MailingAddress"
            label="Mailing Address (Optional)"
            autoComplete="address"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Mobile"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="linkedin"
            name="linkedin"
            label="Linkedin"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Would you like to upload a profile photo? It’s completely optional!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field id="file" name="file" type="file" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
