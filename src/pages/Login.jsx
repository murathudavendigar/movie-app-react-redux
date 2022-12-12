import { useFormik } from "formik";
import React from "react";
import useAuthCalls from "../hooks/useAuthCalls";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("geçersiz email girdin").required("zorunlu "),
  password: Yup.string()
    .min(8, "en az 8 karakter")
    .max(16, "en fazla 16 karakter")
    .required("zorunlu"),
});

const Login = () => {
  const { login } = useAuthCalls();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      login(values);
      actions.resetForm();
    },
  });

  return (
    <div className="h-screen bg-slate-600 flex justify-center items-center text-center">
      <form onSubmit={handleSubmit}>
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

export default Login;
