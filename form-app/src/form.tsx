import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define validation schema for form fields
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  dob: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  street: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip code is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

// Define interface for form data
interface FormData {
  fullName: string;
  dob: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  username: string;
  password: string;
}

// Main FormPage component
const FormPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const initialValues: FormData = {
    fullName: "",
    dob: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
  };

  // Function to handle moving to the next step
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to handle moving to the previous step
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to handle form submission
  const handleSubmit = (values: FormData, actions: any) => {
    // Handle form submission
    alert(JSON.stringify(values, null, 2));

    // Reset form values to initial state
    actions.resetForm();

    // Set submitted state to true
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg">
        <h1 className="text-2xl mb-6 text-center">Registration Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, values }) => (
            <Form>
              {currentStep === 1 && (
                <StepOne values={values} next={handleNextStep} isValid={isValid} />
              )}
              {currentStep === 2 && (
                <StepTwo values={values} prev={handlePrevStep} next={handleNextStep} />
              )}
              {currentStep === 3 && (
                <StepThree values={values} prev={handlePrevStep} next={handleNextStep} />
              )}
              {currentStep === 4 && (
                <StepFour values={values} prev={handlePrevStep} handleSubmit={handleSubmit} />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};


interface StepOneProps {
  values: FormData;
  next: () => void;
  isValid: boolean;
}

const StepOne: React.FC<StepOneProps> = ({ values, next, isValid }) => {
  // Custom validation function to check if all personal information fields are filled
  const isPersonalInfoValid = () => {
    return values.fullName.trim() !== "" && values.dob.trim() !== "" && values.email.trim() !== "";
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Step 1: Personal Information</h1>
      <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
        Full Name:
      </label>
      <Field
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs italic" />

      <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
        Date of Birth:
      </label>
      <Field
        type="date"
        name="dob"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="dob" component="div" className="text-red-500 text-xs italic" />

      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email:
      </label>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />

      <button
        type="button"
        onClick={next}
        disabled={!isPersonalInfoValid()}
        className={`${!isPersonalInfoValid() ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4`}
        >
        Next
      </button>
    </>
  );
};


const StepTwo: React.FC<{ values: FormData; prev: () => void; next: () => void }> = ({
  values,
  prev,
  next,
}) => {
  const isAddressValid = () => {
    return values.street.trim() !== "" && values.city.trim() !== "" && values.state.trim() !== "" && values.zipCode.trim() !== "";
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Step 2: Address Information</h2>
      <label htmlFor="street" className="block text-gray-700 text-sm font-bold mb-2">
        Street Address:
      </label>
      <Field
        type="text"
        name="street"
        placeholder="Street Address"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="street" component="div" className="text-red-500 text-xs italic" />

      <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
        City:
      </label>
      <Field
        type="text"
        name="city"
        placeholder="City"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="city" component="div" className="text-red-500 text-xs italic" />

      <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
        State:
      </label>
      <Field
        type="text"
        name="state"
        placeholder="State"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="state" component="div" className="text-red-500 text-xs italic" />

      <label htmlFor="zipCode" className="block text-gray-700 text-sm font-bold mb-2">
        Zip Code:
      </label>
      <Field
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs italic" />

      <button
        type="button"
        onClick={prev}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={next}
        disabled={!isAddressValid()}
        className={`${!isAddressValid() ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4`}
      >
        Next
      </button>
    </>
  );
};

const StepThree: React.FC<{ values: FormData; prev: () => void; next: () => void }> = ({
  values,
  prev,
  next,
}) => {
  const isAccountValid = () => {
    return values.username.trim() !== "" && values.password.trim() !== "";
  };

  return (
    <>
      <h3 className="text-xl font-bold mb-4">Step 3: Account Information</h3>
      <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
        Username:
      </label>
      <Field
        type="text"
        name="username"
        placeholder="Username"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic" />

      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
        Password:
      </label>
      <Field
        type="password"
        name="password"
        placeholder="Password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />

      <button
        type="button"
        onClick={prev}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={next}
        disabled={!isAccountValid()}
        className={`${!isAccountValid() ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4`}
      >
        Next
      </button>
    </>
  );
};

const StepFour: React.FC<{
  values: FormData;
  prev: () => void;
  handleSubmit: (values: FormData, actions: any) => void;
}> = ({ values, prev, handleSubmit }) => {
  return (
    <>
      <h3 className="text-xl font-bold mb-4">Step 4: Review Your Information</h3>
      <div className="mb-4">
        <h4 className="font-bold">Personal Information:</h4>
        <p>Full Name: {values.fullName}</p>
        <p>Date of Birth: {values.dob}</p>
        <p>Email: {values.email}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Address Information:</h4>
        <p>Street: {values.street}</p>
        <p>City: {values.city}</p>
        <p>State: {values.state}</p>
        <p>Zip Code: {values.zipCode}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold">Account Information:</h4>
        <p>Username: {values.username}</p>
        <p>Password: {values.password}</p>
      </div>
      <button
        type="button"
        onClick={prev}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
      >
        Previous
      </button>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Submit
      </button>
    </>
  );
};

export default FormPage;
