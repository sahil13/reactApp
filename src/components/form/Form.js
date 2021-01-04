// form using FORMIK
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

/* const validate = (values) => {
  const errors = {};

  if (values.firstName === "") {
    errors.firstName = "Required";
  }
  if (values.lastName.length < 5) {
    errors.lastName = "Last name should be atleast 5 char long.";
  }
  return errors;
}; */

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="user-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </div>
        { (formik.touched.firstName && formik.errors.firstName) ? <div>{formik.errors.firstName}</div> : null}

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        { formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <div className="form-group">
          <label>email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
