import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AdditionalInfo } from "./formTwo";
import Submit from "./submit";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(10, "Too Long!")
    .required("Required")
    .trim(),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required().min(10).max(10),
  education: Yup.string().required().trim(),
  profile: Yup.string(),
});
const BasicInfoForm = (props) => {
  const [basicInfo, setBasicInfo] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const previous = () => {
    setIsCompleted(false);
  };

  return (
    <div className="w-full h-screen bg-white">
      {isCompleted ? (
        <>
          <AdditionalInfo
            handleSubmit={props.handleSubmit}
            previous={previous}
            isCompletedAdditionalInfo={props.isCompletedAdditionalInfo}
            setIsCompletedAdditionalInfo={props.setIsCompletedAdditionalInfo}
            isCompletedEligibility={props.isCompletedEligibility}
            setIsCompletedEligibility={props.setIsCompletedEligibility}
            isFeeCompleted={props.isFeeCompleted}
            setIsFeeCompleted={props.setIsFeeCompleted}
          />
        </>
      ) : (
        <>
          <h1 className="mb-5 text-2xl">Basic information</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              education: "",
              profile: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              setBasicInfo(values);
              setIsCompleted(true);
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
                      Name <sup>*</sup>
                    </h6>
                    <Field
                      name="name"
                      placeholder="Name"
                      type="text"
                      className="w-full border-slate-200 hover:!outline-none focus:!border-none focus:!outline-none mt-3 mb-3"
                    />
                    {errors.name && touched.name ? (
                      <div className="w-full h-1 text-red-500">
                        {errors.name}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}

                    <h6 className="mt-5">
                      Email <sup>*</sup>
                    </h6>
                    <Field
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="w-full border-slate-200 hover:outline-none focus:border-none focus:!outline-none mt-3 mb-3"
                    />
                    {errors.email && touched.email ? (
                      <div className="w-full h-1 text-red-500">
                        {errors.email}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                    <h6 className="mt-5">Profile</h6>
                    <input
                      onChange={(e) =>
                        setFieldValue("profile", e.target.files[0])
                      }
                      onBlur={handleBlur}
                      name="profile"
                      type="file"
                      accept="image/*"
                      className="w-full border-slate-200 hover:outline-none focus:border-none focus:!outline-none mt-3 mb-3"
                    />
                    {values.profile && (
                      <img
                        src={URL.createObjectURL(values.profile)}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                    {errors.profile && touched.profile ? (
                      <div className="w-full h-1 text-red-500">
                        {errors.profile}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                  </div>
                  <div className="">
                    <h6>
                      Phone <sup>*</sup>
                    </h6>
                    <Field
                      name="phone"
                      placeholder="Phone"
                      type="number"
                      className="w-full border-slate-200 mt-3 mb-3"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="w-full h-1 text-red-500">
                        {errors.phone}
                      </div>
                    ) : (
                      <div className="w-full h-1 text-red-500"></div>
                    )}
                    <h6 className="mt-5">
                      Education <sup>*</sup>
                    </h6>
                    <select
                      name="education"
                      id="education"
                      onBlur={handleBlur}
                      className="w-full mt-3 mb-3 border-slate-200"
                      onChange={(e) => {
                        handleChange("education");
                        values.education = e.target.value;
                        console.log(values);
                      }}
                    >
                      <option value="mbbs">MBBS</option>
                      <option value="btech">BETECH</option>
                      <option value="bcom">BCOM</option>
                      <option value="bca">BCA</option>
                    </select>
                    <div>
                      {errors.education && touched.education ? (
                        <div className="w-full h-1 text-red-500">
                          {errors.education}
                        </div>
                      ) : (
                        <div className="w-full h-1"></div>
                      )}
                    </div>
                  </div>
                </div>
                <Submit handleSubmit={handleSubmit} next={true} pre={false} />
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default BasicInfoForm;
