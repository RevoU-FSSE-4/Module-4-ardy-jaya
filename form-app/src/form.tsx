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

    // Clear form data
    actions.resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg">
        <h1 className="text-2xl mb-6 text-center">Registration Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {currentStep === 1 && (
                <StepOne values={values} next={handleNextStep} />
              )}
              {currentStep === 2 && (
                <StepTwo
                  values={values}
                  prev={handlePrevStep}
                  next={handleNextStep}
                />
              )}
              {currentStep === 3 && (
                <StepThree
                  values={values}
                  prev={handlePrevStep}
                  next={handleNextStep}
                />
              )}
              {currentStep === 4 && (
                <StepFour
                  values={values}
                  prev={handlePrevStep}
                  handleSubmit={handleSubmit}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// StepOne component for the first step of the form
const StepOne: React.FC<{ values: FormData; next: () => void }> = ({
  values,
  next,
}) => (
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
    <ErrorMessage
      name="fullName"
      component="div"
      className="text-red-500 text-xs italic"
    />

    <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
      Date of Birth:
    </label>
    <Field
      type="date"
      name="dob"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <ErrorMessage
      name="dob"
      component="div"
      className="text-red-500 text-xs italic"
    />

    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
      Email:
    </label>
    <Field
      type="email"
      name="email"
      placeholder="Email"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <ErrorMessage
      name="email"
      component="div"
      className="text-red-500 text-xs italic"
    />

    <button
      type="button"
      onClick={next}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
    >
      Next
    </button>
  </>
);

// StepTwo component for the second step of the form
const StepTwo: React.FC<{ values: FormData; prev: () => void; next: () => void }> = ({
  values,
  prev,
  next,
}) => (
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
    <ErrorMessage
      name="street"
      component="div"
      className="text-red-500 text-xs italic"
    />

    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
      City:
    </label>
    <Field
      type="text"
      name="city"
      placeholder="City"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <ErrorMessage
      name="city"
      component="div"
      className="text-red-500 text-xs italic"
    />

    <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
      State:
    </label>
    <Field
      type="text"
      name="state"
      placeholder="State"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <ErrorMessage
      name="state"
      component="div"
      className="text-red-500 text-xs italic"
    />

    <label htmlFor="zipCode" className="block text-gray-700 text-sm font-bold mb-2">
      Zip Code:
    </label>
    <Field
      type="text"
      name="zipCode"
      placeholder="Zip Code"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <ErrorMessage
      name="zipCode"
      component="div"
      className="text-red-500 text-xs italic"
    />

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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
    >
      Next
    </button>
  </>
);

// StepThree component for the final step of the form
const StepThree: React.FC<{ values: FormData; prev: () => void; next: () => void }> = ({
  values,
  prev,
  next,
}) => (
  <>
    <h3 className="text-xl font-bold mb-4">Step 3: Account Information</h3>

    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
        Username:
      </label>
      <Field
        type="text"
        name="username"
        placeholder="Username"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage
        name="username"
        component="div"
        className="text-red-500 text-xs italic"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
        Password:
      </label>
      <Field
        type="password"
        name="password"
        placeholder="Password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage
        name="password"
        component="div"
        className="text-red-500 text-xs italic"
      />
    </div>

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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
    >
      Next
    </button>
  </>
);

// StepFour component for previewing form data
const StepFour: React.FC<{ values: FormData; prev: () => void; handleSubmit: (values: FormData, actions: any) => void }> = ({
  values,
  prev,
  handleSubmit,
}) => (
  <>
    <h3 className="text-xl font-bold mb-4">Step 4: Review Your Information</h3>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">Full Name:</p>
      <p className="text-gray-800">{values.fullName}</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">Date of Birth:</p>
      <p className="text-gray-800">{values.dob}</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">Email:</p>
      <p className="text-gray-800">{values.email}</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">Street Address:</p>
      <p className="text-gray-800">{values.street}</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">City:</p>
      <p className="text-gray-800">{values.city}</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">State:</p>
      <p className="text-gray-800">{values.state}</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">Zip Code:</p>
      <p className="text-gray-800">{values.zipCode}</p>
    </div>

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-bold mb-1">Username:</p>
      <p className="text-gray-800">{values.username}</p>
    </div>

    <div className="mb-6">
      <p className="text-gray-700 text-sm font-bold mb-1">Password:</p>
      <p className="text-gray-800">********</p>
    </div>

    <button
      type="button"
      onClick={prev}
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
    >
      Previous
    </button>
    <button
      type="button"
      onClick={() => handleSubmit(values)}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
    >
      Submit
    </button>
  </>
);

export default FormPage;




// const validationSchema = Yup.object().shape({
//     fullName: Yup.string().required("Full name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     dob: Yup.date().max(new Date(), "Date of birth cannot be in the future").required("Date of birth is required"),
//     street: Yup.string().required("Street address is required"),
//     city: Yup.string().required("City is required"),
//     state: Yup.string().required("State is required"),
//     zipCode: Yup.string().required("Zip code is required"),
//     username: Yup.string().required("Username is required"),
//     password: Yup.string().required("Password is required"),
// });

// const initialValues = {
//     fullName: "",
//     dob: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     username: "",
//     password: "",
// };

// interface FormData {
//     firstName: string;
//     lastName: string;
//     email: string;
//   }

// const data = {
//   fullName: "",
//   dob: "",
//   email: "",
//   street: "",
//   city: "",
//   state: "",
//   zipCode: "",
//   username: "",
//   password: "",
// };

// export default function FormPage() {
//   const [data, setData] = useState({
//     fullName: "",
//     dob: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     username: "",
//     password: "",
//   });
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNextStep = (newData) => {setData(prev => (...prev, ...newData))
//     setCurrentStep (prev => prev + 1)
//   }

//   const handlePrevStep = (newData) => {setData(prev => (...prev, ...newData))
//     setCurrentStep (prev => prev - 1)
//   }

// const steps = [<StepOne next={handleNextStep} data={data}/>,
// <StepTWo  next={handleNextStep} prev={} data={data}/>]
//   return (
//     <div className="formPage">
//       {steps[currentStep]}
//     </div>
//   );
// }

// const StepOne = () => {
//   return (
//     <Formik initialValues={props.data}>
//       {() => (
//         <Form>
//           <label htmlFor="fullName">Full Name </label>
//           // <Field name="fullName" placeholder="Full Name" />
//           // <br />
//           // <label htmlFor="email">Email </label>
//           // <Field name="email" placeholder="Email" />
//           // <br />
//           // <label htmlFor="dob">Date of Birth </label>
//           // <Field name="dob" type="date" />
//           // <br />
//           // <button type="submit">next</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const StepTWo = () => {
//   return (
//     <Formik>
//       {() => (
//         <Form>
//           <label htmlFor="fullName">Full Name </label>
//           // <Field name="fullName" placeholder="Full Name" />
//           // <br />
//           // <label htmlFor="email">Email </label>
//           // <Field name="email" placeholder="Email" />
//           // <br />
//           // <label htmlFor="dob">Date of Birth </label>
//           // <Field name="dob" type="date" />
//           // <br />
//           <button type="submit">preview</button>
//           // <button type="submit">next</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export const FormPage = () => (
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         fullName: "",
//         dob: "",
//         email: "",
//         street: "",
//         city: "",
//         state: "",
//         zipCode: "",
//         username: "",
//         password: "",
//       }}
//       onSubmit={async (values) => {
//         alert(JSON.stringify(values));
//       }}
//       validationSchema={}
//     >
//       <Form>
//         <label htmlFor="fullName">Full Name </label>
//         <Field name="fullName" placeholder="Full Name" />
//         <br />
//         <label htmlFor="email">Email </label>
//         <Field name="email" placeholder="Email" />
//         <br />
//         <label htmlFor="dob">Date of Birth </label>
//         <Field name="dob" type="date" />
//         <br />
//         <button type="submit">Submit</button>
//       </Form>

//     </Formik>
//   </div>
// );

// export function FormPage() {
//   const [name, setName] = useState<string>("");
//   const [errorName, setErrorName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [errorEmail, setErrorEmail] = useState<string>("");

//   function handleSubmit(event: any) {
//     event.preventDefault();
//     alert(name+email);
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>First name: </label>
//         <input
//           type="text"
//           placeholder="Fill Your Name"
//           onChange={(event) => {
//             const value = event.target.value;
//             if (value.length < 3) {
//               setErrorName("Fill Your Name");
//             } else {
//               setErrorName("");
//             }
//             setName(event.target.value);
//           }}
//         />
//         <br />
//         <> {errorName} </>
//         <br />
//         <label>Email: </label>
//         <input
//           type="email"
//           placeholder="Fill Your Name"
//           onChange={(event) => {
//             const value = event.target.value;
//             if (value.length < 5) {
//               setErrorEmail("Fill Your Email");
//             } else {
//               setErrorEmail("");
//             }
//             setEmail(event.target.value);
//           }}
//         />
//         <br />
//         <> {errorEmail} </>
//         <br />
//         <button disabled={errorEmail !== "" || errorName !== ""}>
//           {" "}
//           Submit{" "}
//         </button>
//       </form>
//     </div>
//   );
// }

// const SignUpSchema = Yup.object().shape({
//   fullName: Yup.string()
//     .min(5, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   dob: Yup.string().email("Invalid email").required("Required"),
// });

// export const Basic = () => (
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         fullName: "",
//         email: "",
//         dob: "",
//       }}
//       validationSchema={SignUpSchema}

//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//     }}
//     >
//       <Form>
//         <label htmlFor="fullName">Full Name </label>
//         <Field id="fullName" name="fullName" placeholder="Full Name" />
//         <br />
//         <label htmlFor="email">Email </label>
//         <Field id="email" name="email" placeholder="email" />
//         <br />
//         <label htmlFor="dob">Date of Birth </label>
//         <Field id="dob" name="dob" type="date" />
//         <br />
//         <div>
//         <button>Submit</button>
//         <input type="text" onChange={}
//         </div>
//       </Form>
//     </Formik>
//   </div>
// );
