import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export function FormPage() {
  const [name, setName] = useState<string>("");
  const [errorName, setErrorName] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");

  function handleSubmit(event: any) {
    event.preventDefault();
    alert(name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First name: </label>
        <input
          type="text"
          placeholder="Fill Your Name"
          onChange={(event) => {
            const value = event.target.value;
            if (value.length < 3) {
              setErrorName("Fill Your Name");
            } else {
              setErrorName("");
            }
            setName(event.target.value);
          }}
        />
        <br />
        <> {errorName} </>
        <br />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Fill Your Name"
          onChange={(event) => {
            const value = event.target.value;
            if (value.length < 5) {
              setErrorEmail("Fill Your Email");
            } else {
              setErrorEmail("");
            }
            setName(event.target.value);
          }}
        />
        <br />
        <> {errorEmail} </>
        <br />
        <button disabled={errorEmail !== "" || errorName !== ""}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

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
