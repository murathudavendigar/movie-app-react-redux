import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import useAuthCalls from "../hooks/useAuthCalls";

const registerSchema = Yup.object({
  name: Yup.string().required("zorunlu"),
  surname: Yup.string().required("zorunlu"),

  email: Yup.string().email("geçersiz email girdin").required("zorunlu "),
  password: Yup.string()
    .min(8, "en az 8 karakter")
    .max(16, "en fazla 16 karakter")
    .required("zorunlu"),
});

const Register = () => {
  const { register } = useAuthCalls();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions) => {
      register(values);
      actions.resetForm();
    },
  });

  return (
    <div className="h-screen bg-slate-600 flex justify-center items-center text-center">
      <form onSubmit={handleSubmit}>
        <input
          className="mb-5"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <p>{errors.name || ""}</p>

        <input
          className="mb-5"
          placeholder="surname"
          name="surname"
          onChange={handleChange}
          value={values.surname}
        />
        <p>{errors.surname || ""}</p>

        <input
          className="mb-5"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <p>{errors.email ? errors.email : ""}</p>

        <input
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <p>{errors.password ? errors.password : ""}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
