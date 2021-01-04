import React from "react";
import { Formik } from "formik";

import * as Yup from "yup";

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string().required("Required")
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input type="email" name="email" onChange={formik.handleChange} />
            {(formik.touched.email && formik.errors.email) ? formik.errors.email : null}
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
