import React, { useLayoutEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Submit from "./submit";
import Fee from "./fee";
const SignupSchema = Yup.object().shape({
  eligibility: Yup.string().required("Required").trim(),
  syllabus: Yup.string().required("Required"),
});
const Elgibility = (props) => {
  const [isCompletedEligibility, setIsCompletedEligibility] = useState(false);
  const previous = () => {
    setIsCompletedEligibility(false);
  };
  useLayoutEffect(() => {
    window.scrollTo({ top: 15, behavior: "smooth" });
  }, []);

  return (
    <div>
      {isCompletedEligibility ? (
        <>
          <Fee
            handleSubmit={props.handleSubmit}
            previous={previous}
            handleFormData={props.handleFormData}
            formData={props.formData}
          />
        </>
      ) : (
        <>
          <h1 className="mb-5 text-2xl">Eligibility & Syllabus</h1>
          <Formik
            initialValues={{
              eligibility: "",
              syllabus: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              setIsCompletedEligibility(true);
              props.handleFormData(values);
            }}
          >
            {({
              errors,
              touched,
              handleSubmit,
              handleChange,
              values,
              handleBlur,
              setFieldValue,
            }) => (
              <Form>
                <div className="grid grid-cols-2 gap-x-2">
                  <div className="">
                    <h6>
                      Eligibility <sup className="text-red-500">*</sup>
                    </h6>
                    <select
                      name="admission"
                      onBlur={handleBlur}
                      className="w-full mt-3 mb-3 text-slate-500 border-slate-200  hover:outline-none focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                      onChange={(e) => {
                        values.eligibility = e.target.value;
                        console.log(values, errors);
                      }}
                    >
                      <option value="" disabled selected>
                        Select Eligibility
                      </option>
                      <option value="plus two">Plus two</option>
                      <option value="sslce">Sslc</option>
                      <option value="degree">Degree</option>
                      <option value="pg">pg</option>
                    </select>
                    {errors.eligibility && touched.eligibility ? (
                      <div className="w-full h-1 text-red-500">
                        {errors.eligibility}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                  </div>
                  <div className="">
                    <h6>
                      Syllabus <sup className="text-red-500">*</sup>
                    </h6>
                    <select
                      name="syllabus"
                      onBlur={handleBlur}
                      className="w-full mt-3 mb-3 text-slate-500 border-slate-200  hover:outline-none focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                      onChange={(e) => {
                        values.syllabus = e.target.value;
                        console.log(values, errors);
                      }}
                    >
                      <option defaultValue="" disabled>
                        Select Syllabus
                      </option>
                      <option value="humanities">Humanities</option>
                      <option value="science">Science</option>
                      <option value="commerce">Commerce</option>
                      <option value="computerscience">Computer Science</option>
                    </select>
                    {errors.syllabus && touched.syllabus ? (
                      <div className="w-full h-1 text-red-500">
                        {errors.syllabus}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                  </div>
                </div>
                <hr className="border-dashed border-slate-300" />
                <div className="mt-3">
                  <Submit
                    handleAdditionSubmit={handleSubmit}
                    previous={props.previous}
                    pre={true}
                    next={true}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default Elgibility;
