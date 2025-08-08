import React from "react";
import { Formik, Form, Field } from "formik";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();

  return (
    <div className="py-12 px-6 flex justify-center bg-gray-600">
      <div className="container max-w-md bg-gray-800 rounded-lg shadow-lg p-6 text-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register - Shiv School (Demo)
        </h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "student",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await register(values);
              alert("Registered (demo). Please login.");
            } catch (err) {
              alert("Error");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <Field
                  name="name"
                  className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Role</label>
                <Field
                  name="role"
                  as="select"
                  className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </Field>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded"
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
