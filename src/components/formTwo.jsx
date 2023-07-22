import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Submit from "./submit";
import { Button } from "flowbite-react";
import { FaPlus, FaTrash } from "react-icons/fa";
const SignupSchemaIntake = Yup.object().shape({
  months: Yup.array().of(
    Yup.object().shape({
      months: Yup.string().required("Required").trim(),
    })
  ),
  duration: Yup.array().of(
    Yup.object().shape({
      start: Yup.string().required("Required").trim(),
      end: Yup.string().required("Required").trim(),
    })
  ),
});
export const Intakes = () => {
  const [row, setRow] = useState([{ row: "" }]);
  const [courseTag, setCourseTag] = useState([{ courseTag: "" }]);
  const [courseTagRow, setCourseTagRow] = useState([
    { courseTagRow: "", courseTagIndex: 0 },
  ]);
  const [months, setMonths] = useState([{ months: "" }]);
  const [duration, setDuration] = useState([{ start: "", end: "" }]);
  const handleDeleteRow = (index) => {
    const duplicateRows = [...row];
    duplicateRows.splice(index, 1);
    setRow(duplicateRows);
  };
  const handleDeleteCourseTag = (index) => {
    const duplicateRows = [...courseTag];
    duplicateRows.splice(index, 1);
    setCourseTag(duplicateRows);
  };
  return (
    <div className="w-full h-auto mb-5">
      <Formik
        initialValues={{
          months: [{ months: "" }],
          duration: [{ start: "", end: "" }],
        }}
        validationSchema={SignupSchemaIntake}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
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
            <h6 className="mt-5">
              <strong>Intakes</strong>
            </h6>
            {row.map((data, key) => (
              <>
                <div className="grid grid-cols-2 w-full">
                  <h6 className="">
                    Intake <sup className="text-red-500">*</sup>
                  </h6>

                  <h6>
                    Duration <sup className="text-red-500">*</sup>
                  </h6>
                </div>
                <div className="grid grid-cols-2 w-full h-126 bg-slate-100 mt-3 mb-3">
                  <div className="border-slate-200 border-1">
                    <div className="flex items-center w-full h-full pl-1 pr-1">
                      <Button className="h-14 rounded-none bg-blue-100 hover:!bg-blue-100">
                        <FaTrash
                          onClick={() => handleDeleteRow(key)}
                          color="red"
                          size={20}
                        />
                      </Button>
                      <select
                        name={`months?.${key}?.months`}
                        onBlur={handleBlur}
                        className="w-full mt-3 mb-3 h-14 text-slate-500 border-slate-200  focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                        onChange={(e) => {
                          const newValues = [...months];
                          newValues[key].months = e.target.value;
                          setMonths(newValues);
                          values.months = months;
                          console.log(e.target.value);
                        }}
                      >
                        {console.log(errors)}
                        <option value="" disabled selected>
                          Select Month
                        </option>
                        <option value="september">September</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="june">June</option>
                      </select>
                    </div>
                  </div>
                  <div className="border-slate-200 border-1">
                    <div className="flex items-center gap-1 w-full pl-1 pr-1 mb-1 mt-1">
                      <Field
                        placeholder="1 Year"
                        type="text"
                        className="grow h-14 pt-2 border-none border-slate-200 hover:outline-none focus:!border-none focus:!outline-none focus:!shadow-green-500"
                        value=""
                      />
                      <Button className="h-14 rounded-none bg-blue-100 hover:!bg-blue-100">
                        <FaPlus size={20} />
                      </Button>
                      <Button className="h-14 rounded-none bg-blue-100 hover:!bg-blue-100">
                        <FaTrash color="red" size={20} />
                      </Button>
                    </div>
                    <div className="flex items-center gap-1 w-full pl-1 pr-1">
                      <Field
                        value=""
                        placeholder="2 Year"
                        type="text"
                        className="grow pt-2 h-14 border-none border-slate-200 hover:outline-none focus:!border-none focus:!outline-none focus:!shadow-green-500"
                      />
                      <Button className="h-14 rounded-none bg-blue-100 hover:!bg-blue-100">
                        <FaPlus size={20} />
                      </Button>
                      <Button className="h-14 rounded-none bg-blue-100 hover:!bg-blue-100">
                        <FaTrash color="red" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div>
              {errors.months &&
              touched.months &&
              errors.months[key] &&
              errors.months[key].months ? (
                <div className="w-full h-1 text-red-500">
                  {errors.months[key].months}
                </div>
              ) : (
                <div className="w-full h-1"></div>
              )}
            </div>
            <div className="w-full  pt-3 pb-3 mb-3 mt-3">
              <Button
                onClick={() => setRow([...row, { row: "" }])}
                className="rounded-none  text-blue-600 bg-slate-300 hover:!bg-blue-300 focus:!border-blue-300"
              >
                <FaPlus size={20} />
                &nbsp; Add Row
              </Button>
              <hr className="border-dashed border-slate-300 w-full mt-5 mb-5" />
            </div>

            <div className="flex justify-between mt-5">
              <h6></h6>
              {courseTag?.length == 0 && (
                <Button
                  onClick={() =>
                    setCourseTag([...courseTag, { courseTag: "" }])
                  }
                  className="rounded-none  text-blue-600 bg-slate-300 hover:!bg-blue-300 focus:!border-blue-300"
                >
                  <FaPlus size={20} />
                  &nbsp; New Course Tag
                </Button>
              )}
            </div>
            {courseTag?.map((data, key) => (
              <>
                <div className="flex justify-between mt-5">
                  <h6>Course Tag</h6>
                  {key < 1 && (
                    <Button
                      onClick={() =>
                        setCourseTag([...courseTag, { courseTag: "" }])
                      }
                      className="rounded-none  text-blue-600 bg-slate-300 hover:!bg-blue-300 focus:!border-blue-300"
                    >
                      <FaPlus size={20} />
                      &nbsp; New Course Tag
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                  {courseTagRow?.map((row, index) => (
                    <>
                      {row.courseTagIndex == courseTag[index] && <></>}
                      <div>
                        <h6>Tag</h6>
                        <select
                          onBlur={handleBlur}
                          className="w-full mt-3 mb-3 h-14 text-slate-500 border-slate-200  focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                        >
                          <option value="" disabled selected>
                            Select Tag
                          </option>
                          <option value="mbbs">Mbbs</option>
                          <option value="bca">Bca</option>
                          <option value="bcom">bcom</option>
                          <option value="bsc">Bsc</option>
                        </select>
                        {index < 1 && (
                          <Button
                            onClick={() =>
                              setCourseTagRow([
                                ...courseTagRow,
                                { courseTagRow: "", courseTagIndex: key },
                              ])
                            }
                            className="rounded-none  text-blue-600 bg-slate-300 hover:!bg-blue-300 focus:!border-blue-300"
                          >
                            <FaPlus size={20} />
                            &nbsp; Add Row
                          </Button>
                        )}
                      </div>
                      <div className="pt-3">
                        <h6>Description</h6>
                        <div className="flex gap-x-2">
                          <Field
                            value=""
                            placeholder="2 Year"
                            type="text"
                            className="w-full grow pt-2 h-14 border-2  border-slate-100 hover:outline-none focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                          />
                          <Button className="h-14 rounded-none bg-blue-100 hover:!bg-blue-100">
                            <FaTrash
                              onClick={() => handleDeleteCourseTag(key)}
                              color="red"
                              size={20}
                            />
                          </Button>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </>
            ))}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const SignupSchema = Yup.object().shape({
  admission: Yup.string().required("Required").trim(),
  service: Yup.string().required("Required"),
  courseAffiliation: Yup.array().of(
    Yup.object().shape({
      courseAffiliation: Yup.string().required("Required").trim(),
    })
  ),
  entrance: Yup.array().of(
    Yup.object().shape({
      entrance: Yup.string().required("Required").trim(),
    })
  ),
  documents: Yup.array().of(
    Yup.object().shape({
      documents: Yup.string().required("Required").trim(),
    })
  ),
  specialization: Yup.array().of(
    Yup.object().shape({
      specialization: Yup.string().required("Required").trim(),
    })
  ),
});
export const AdditionalInfo = () => {
  const [additionalInfo, setAdditionalInfo] = useState({});
  const [pdf, setPdf] = useState([{ documents: "" }]);
  const [course, setCourse] = useState([{ courseAffiliation: "" }]);
  const [entrance, setEntrance] = useState([{ entrance: "" }]);
  const [specialization, setSpecialization] = useState([
    { specialization: "" },
  ]);

  const handleFileChange = (e, key, values) => {
    const newValues = [...pdf];
    newValues[key].documents = e.target.files[0];
    setPdf(newValues);
    values.documents = pdf;
    console.log(key, "key");
    console.log(pdf, "pdf");
  };

  const handleEntranceChange = (e, key, values) => {
    const newValues = [...entrance];
    newValues[key].entrance = e.target.value;
    setEntrance(newValues);
    values.entrance = entrance;
  };

  const handleSpecializationChange = (e, key, values) => {
    const newValues = [...specialization];
    newValues[key].specialization = e.target.value;
    setSpecialization(newValues);
    values.specialization = specialization;
  };
  return (
    <div className="bg-white w-full h-full">
      <h1 className="mb-5 text-2xl">Additional information</h1>
      <Formik
        initialValues={{
          admission: "",
          service: "",
          courseAffiliation: [{ courseAffiliation: "" }],
          entrance: [{ entrance: "" }],
          documents: [{ documents: "" }],
          specialization: [{ specialization: "" }],
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setAdditionalInfo(values);
          alert(JSON.stringify(values));
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
                  Admission <sup className="text-red-500">*</sup>
                </h6>
                <select
                  name="admission"
                  onBlur={handleBlur}
                  className="w-full mt-3 mb-3 text-slate-500 border-slate-200  hover:outline-none focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                  onChange={(e) => {
                    values.admission = e.target.value;
                    console.log(values, errors);
                  }}
                >
                  <option value="" disabled selected>
                    Select Admission
                  </option>
                  <option value="mbbs">MBBS</option>
                  <option value="btech">BETECH</option>
                  <option value="bcom">BCOM</option>
                  <option value="bca">BCA</option>
                </select>
                {errors.admission && touched.admission ? (
                  <div className="w-full h-1 text-red-500">
                    {errors.admission}
                  </div>
                ) : (
                  <div className="w-full h-1"></div>
                )}
                <h6 className="mt-5">Course Affiliation</h6>
                {course?.map((data, key) => (
                  <>
                    <div className="flex border-1 border-gray-300 mt-3 mb-3">
                      <Field
                        name={`courseAffiliation?.${key}?.courseAffiliation`}
                        placeholder="Select course affliation"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          const newValues = [...course];
                          newValues[key].courseAffiliation = e.target.value;
                          setCourse(newValues);
                          values.courseAffiliation = course;
                        }}
                        value={data.courseAffiliation}
                        type="text"
                        className="grow h-full pt-2 border-none border-slate-200 hover:outline-none focus:!border-none focus:!outline-none focus:!shadow-green-500"
                      />
                      {!key > 0 && (
                        <Button
                          onClick={(e) => {
                            setCourse([...course, { courseAffiliation: "" }]);
                          }}
                          className="rounded-none bg-blue-100 hover:!bg-blue-100"
                        >
                          <FaPlus size={20} />
                        </Button>
                      )}
                    </div>
                    {errors.courseAffiliation &&
                    touched.courseAffiliation &&
                    errors.courseAffiliation[key] &&
                    errors.courseAffiliation[key].courseAffiliation ? (
                      <div className="w-full h-5 text-red-500">
                        {errors.courseAffiliation[key].courseAffiliation}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                  </>
                ))}
                <h6 className="mt-5">
                  Documents Required <sup className="text-red-500">*</sup>
                </h6>
                {pdf?.map((data, key) => (
                  <>
                    <div className=" flex w-full h-41 items-center border-2 border-slate-200  pb-1 pl-2 text-slate-300 mt-3 mb-3">
                      <label
                        for="inputTag"
                        className="text-slate-300 cursor-pointer"
                      >
                        Select Documents
                      </label>
                      <div className="grow">
                        <input
                          onChange={(e) => handleFileChange(e, key, values)}
                          onBlur={handleBlur}
                          name={`documents?.${key}?.documents?.name`}
                          id="inputTag"
                          type="file"
                          accept=".pdf,.html"
                          className="w-full grow border-slate-200 hover:outline-none focus:border-none focus:!outline-none mt-3 mb-3 hidden"
                        />
                      </div>
                      <div>
                        <div className="flex w-full justify-end">
                          {key < 1 && (
                            <Button
                              onClick={(e) => {
                                setPdf([...pdf, { documents: "" }]);
                              }}
                              className="rounded-none bg-blue-100 hover:!bg-blue-100"
                            >
                              <FaPlus size={20} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    &nbsp;<span>{values.documents[key]?.documents.name}</span>
                    {errors?.documents &&
                    touched?.documents &&
                    errors?.documents[key] &&
                    errors?.documents[key]?.documents ? (
                      <div className="w-full h-5 text-red-500">
                        {errors.documents[key]?.documents}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                  </>
                ))}
              </div>
              <div className="">
                <h6>
                  Service <sup className="text-red-500">*</sup>
                </h6>
                <select
                  name="service"
                  onBlur={handleBlur}
                  className="w-full mt-3 mb-3 text-slate-500 border-slate-200  focus:!border-slate-200 focus:!outline-none focus:!shadow-green-500"
                  onChange={(e) => {
                    values.service = e.target.value;
                    console.log(values);
                  }}
                >
                  <option value="" disabled selected>
                    Select Service
                  </option>
                  <option value="mbbs">MBBS</option>
                  <option value="btech">BETECH</option>
                  <option value="bcom">BCOM</option>
                  <option value="bca">BCA</option>
                </select>
                {errors.service && touched.service ? (
                  <div className="w-full h-1 text-red-500">
                    {errors.service}
                  </div>
                ) : (
                  <div className="w-full h-1"></div>
                )}
                <h6 className="mt-5">Entrance Required</h6>
                {entrance?.map((data, key) => (
                  <>
                    <div className="flex h-10 p-0 border-1 border-gray-300 mt-3 mb-3 items-center">
                      <Field
                        name={`entrance?.${key}?.entrance`}
                        onChange={(e) => handleEntranceChange(e, key, values)}
                        placeholder="Select entrance"
                        type="text"
                        className="w-full grow h-full p-0 pl-3 border-none border-slate-200 hover:outline-none focus:!border-none focus:!outline-none focus:!shadow-green-500 mt-3 mb-3"
                      />
                      {key < 1 && (
                        <Button
                          onClick={(e) => {
                            setEntrance([...entrance, { entrance: "" }]);
                          }}
                          className="rounded-none bg-blue-100 hover:!bg-blue-100"
                        >
                          <FaPlus size={20} />
                        </Button>
                      )}
                    </div>

                    {errors.entrance &&
                    touched.entrance &&
                    errors?.entrance[key] &&
                    errors?.entrance[key]?.entrance ? (
                      <div className="w-full h-5 text-red-500">
                        {errors?.entrance[key]?.entrance}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                  </>
                ))}
                <h6 className="mt-5">
                  Specialization <sup className="text-red-500">*</sup>
                </h6>
                {specialization?.map((data, key) => (
                  <>
                    <div className="flex border-1 h-41 items-center border-gray-300 mt-3 mb-3">
                      <Field
                        name={`specialization?.${key}?.specialization`}
                        onChange={(e) =>
                          handleSpecializationChange(e, key, values)
                        }
                        placeholder="Select specialization"
                        type="text"
                        className="w-full h-full border-slate-200 p-0 pl-3 !border-none hover:outline-none focus:border-none focus:!outline-none focus:!shadow-green-500 mt-3 mb-3"
                      />
                      {key < 1 && (
                        <Button
                          onClick={(e) => {
                            setSpecialization([
                              ...specialization,
                              { specialization: "" },
                            ]);
                          }}
                          className="rounded-none bg-blue-100 hover:!bg-blue-100"
                        >
                          <FaPlus size={20} />
                        </Button>
                      )}
                    </div>
                    {errors.specialization &&
                    touched.specialization &&
                    errors?.specialization[key] &&
                    errors?.specialization[key]?.specialization ? (
                      <div className="w-full h-5 text-red-500">
                        {errors.specialization[key]?.specialization}
                      </div>
                    ) : (
                      <div className="w-full h-1"></div>
                    )}
                  </>
                ))}
              </div>
            </div>
            <hr className="border-dashed border-slate-300" />
            <Intakes />
            <div className="mt-3">
              <Submit handleSubmit={handleSubmit} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
