import React from "react";
import { Formik, Form, Field } from "formik";

const Contact = () => {
  return (
    <div className="py-12">
      <div className="container max-w-3xl bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Shiv School</h2>
        <p className="text-gray-600 mb-4">Questions? Reach out to us.</p>

        <Formik initialValues={{ name: "", email: "", message: "" }} onSubmit={(values, {setSubmitting, resetForm}) => {
          console.log("contact:", values);
          setTimeout(()=>{ setSubmitting(false); resetForm(); alert("Message sent (demo)"); }, 700);
        }}>
          {({isSubmitting}) => (
            <Form className="space-y-4">
              <div><label className="block text-sm">Name</label><Field name="name" className="w-full border px-3 py-2 rounded" /></div>
              <div><label className="block text-sm">Email</label><Field name="email" type="email" className="w-full border px-3 py-2 rounded" /></div>
              <div><label className="block text-sm">Message</label><Field name="message" as="textarea" rows="5" className="w-full border px-3 py-2 rounded" /></div>
              <div className="flex justify-end">
                <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
