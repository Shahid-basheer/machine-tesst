import { Formik, Form } from "formik";
import * as Yup from "yup";
import Submit from "./submit";
import { useState } from "react";
const SignupSchema = Yup.object().shape({
  fees: Yup.string().required("Required").trim(),
  scolarship: Yup.string().required("Required").trim(),
});

const Fee = (props) => {
  const [isFeeCompleted, setIsFeeCompleted] = useState(false);
  return (
    <div>
      <h1 className="mb-5 text-2xl">Fess & Scolarship</h1>
      <Formik
        initialValues={{
          fees: "",
          scolarship: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          props.setIsFeeCompleted(true);
          alert("Successfully course created!");
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
            {props.handleSubmit(handleSubmit)}
            <div className="grid grid-cols-2 gap-x-2">
              <div className="">
                <h6>
                  Fees <sup className="btext-red-500">*</sup>
                </h6>
                <select
                  name="fees"
                  onBlur={handleBlur}
                  className="w-full mt-3 mb-3 text-slate-500 border-slate-200  hover:outline-none focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                  onChange={(e) => {
                    values.fees = e.target.value;
                    console.log(values, errors);
                  }}
                >
                  <option value="" disabled selected>
                    Select Fees
                  </option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                </select>
                {errors.fees && touched.fees ? (
                  <div className="w-full h-1 text-red-500">{errors.fees}</div>
                ) : (
                  <div className="w-full h-1"></div>
                )}
              </div>
              <div className="">
                <h6>
                  Scolarship <sup className="text-red-500">*</sup>
                </h6>
                <select
                  name="scolarship"
                  onBlur={handleBlur}
                  className="w-full mt-3 mb-3 text-slate-500 border-slate-200  hover:outline-none focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                  onChange={(e) => {
                    values.scolarship = e.target.value;
                    console.log(values, errors);
                  }}
                >
                  <option defaultValue="" disabled>
                    Select Scolarship
                  </option>
                  <option value="one">Sp one</option>
                  <option value="two">Sp two</option>
                  <option value="three">Sp three</option>
                  <option value="four">Sp four</option>
                </select>
                {errors.scolarship && touched.scolarship ? (
                  <div className="w-full h-1 text-red-500">
                    {errors.scolarship}
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
                next={false}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Fee;
