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
        {errors.email ? (
          <input
            className="bg-red-300 border border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 text-xl rounded-lg focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full p-3 my-5"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        ) : (
          <input
            className="bg-green-300 border border-green-500 text-green-900  placeholder-green-700 text-xl rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full p-3 my-5"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        )}
        {errors.password ? (
          <input
            className="bg-red-300 border border-red-500 text-red-900  placeholder-red-700 text-xl rounded-lg focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full p-3 my-5"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        ) : (
          <input
            className="bg-green-300 border border-green-500 text-green-900  placeholder-green-700 text-xl rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full p-3 my-5"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        )}
        <p>
          {errors.email
            ? errors.email
            : errors.password || "Please fill the boxes"}
        </p>
        <button
          type="submit"
          className="mt-10 bg-blue-500  text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
