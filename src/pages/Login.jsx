import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-[#2a2a2a] rounded-xl shadow-lg p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
          Login to Shiv School
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              const user = await login(values.email, values.password);
              if (user.role === "admin") navigate("/dashboard/admin");
              else if (user.role === "teacher") navigate("/dashboard/teacher");
              else navigate("/dashboard/student");
            } catch (err) {
              setErrors({ server: "Login failed" });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="space-y-5">
              {errors.server && (
                <div className="text-red-400 bg-red-900/30 p-2 rounded text-sm">
                  {errors.server}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full bg-[#1b1b1b] border border-gray-600 px-3 py-2 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="w-full bg-[#1b1b1b] border border-gray-600 px-3 py-2 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition duration-200"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
                <a
                  href="/register"
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Register
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
