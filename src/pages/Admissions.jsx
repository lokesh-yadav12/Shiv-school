import React from "react";
import { Formik, Form, Field } from "formik";

const Admissions = () => {
  return (
    <div className="py-12 px-6 sm:px-20 bg-gray-900 min-h-screen text-gray-200">
      <div className="container max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Admissions - Shiv School
        </h2>
        <p className="text-gray-400 mb-6">
          Apply online for the upcoming academic year.
        </p>

        <Formik
          initialValues={{ name: "", email: "", phone: "", class: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("admission:", values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
              alert("Application submitted (demo)");
            }, 800);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Full name
                </label>
                <Field
                  name="name"
                  className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Phone
                  </label>
                  <Field
                    name="phone"
                    className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Class applying for
                  </label>
                  <Field
                    name="class"
                    className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 transition rounded text-white font-medium"
                >
                  Submit Application
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Admissions;
