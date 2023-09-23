import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';



const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };
  
  const onSubmit = (values, { resetForm }) => {
    // Handle form submission here, e.g., send data to the server
    console.log('Form submitted with values:', values);
  
    // Reset the form after submission
    resetForm();
  };
  
  const validate = (values) => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

function MyForm() {
  return (
   <>
   
   <div>
      <h1>Simple Form with Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <Field classNameName="border-2 border-gray-400 mx-2 my-2 px-2 bg-red-100 rounded-md"  type="text" id="firstName" name="firstName" />
            <ErrorMessage classNameName='text-red-600' name="firstName" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field classNameName="border-2 border-gray-400  mx-2 my-2 px-2 bg-red-100 rounded-md"   type="text" id="lastName" name="lastName" />
            <ErrorMessage classNameName='text-red-600' name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field classNameName="border-2 border-gray-400    mx-2 my-2 px-2 bg-red-100 rounded-md"   type="email" id="email" name="email" />
            <ErrorMessage classNameName='text-red-600' name="email" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
   
   </>
  )
}

export default MyForm