// -added new TestForm using Formik
// -added formik to package.json
// -added interface for typescript
// -used custom formik Form and Field 
// -pushed to Github by JS 08/29/23

import React from "react";
import { Formik, Field, Form } from "formik";
import {UserType} from '../types';


const TestForm: React.FC = () => {
  const initialValues: UserType = {
    name: "",
    email: "",
  };

  const handleSubmit = (values: UserType) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div>
      <h2>New User Form</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name"></Field>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email"></Field>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TestForm;
