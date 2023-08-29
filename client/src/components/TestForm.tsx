

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {UserType} from '../types';
import * as Yup from "yup";

//Instanciate props interface for TestForm
interface TestFormProps {
  addUser : (name: string, email: string) => void
}

//Use TestFormProps interface and props
const TestForm: React.FC<TestFormProps> = props => {
  const initialValues: UserType = {
    name: "",
    email: "",
  };

  //Validate form values using yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values: UserType) => {
    console.log("Form submitted with values:", values);
    props.addUser(values.email, values.name)
  };

  return (
    <div>
      <h2>New User Form</h2>
      <Formik  initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
