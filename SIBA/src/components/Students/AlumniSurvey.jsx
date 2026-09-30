import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipboardCheck, PenLine, Send } from "lucide-react";
import Reveal from "../shared/reveal.jsx";

const YES_NO = ["Yes", "No"];

// `detail` adds a follow-up text box, required when the answer is "Yes".
const PEO_ITEMS = [
  { peo: "PEO-1", text: "Are you enrolled in any post-graduate program?" },
  {
    peo: "PEO-1",
    text: "Have you attended any professional training/workshop/seminar/conference during one last year—if yes please provide the conference/workshop /seminar title:",
    detail: { label: "Conference/workshop/seminar title", placeholder: "Title" },
  },
  {
    peo: "PEO-1",
    text: "Have you published any research article or technical report in the last year?",
    detail: { label: "If yes, please provide the title or DOI:", placeholder: "Title or DOI" },
  },
  { peo: "PEO-2", text: "Have you taken any new initiatives to solve the problem of your organization?" },
  { peo: "PEO-2", text: "In the last one year, have you led any technical/multidisciplinary work team?" },
  { peo: "PEO-2", text: "In the last one year, have you been the key part of any multidisciplinary team?" },
  { peo: "PEO-3", text: "Have you ever been issued any warning letter due to misconduct?" },
  { peo: "PEO-3", text: "Did you feel OK surfing the internet for non-work-related matters during work time?" },
  {
    peo: "PEO-3",
    text: "As an engineer, I am aware that It is important for engineers to consider the broader potential impacts of technical solutions to problems faced by the community.",
  },
];

const questionKey = (index) => `q${index + 1}`;
const detailKey = (index) => `q${index + 1}Detail`;

const initialValues = {
  alumniName: "",
  graduationYear: "",
  employerName: "",
  employerAddress: "",
  currentPosition: "",
  email: "",
  telephone: "",
  answers: Object.fromEntries(
    PEO_ITEMS.flatMap((item, index) => [[questionKey(index), ""], ...(item.detail ? [[detailKey(index), ""]] : [])])
  ),
  comments: "",
  signature: "",
};

const surveySchema = Yup.object({
  alumniName: Yup.string().trim().min(2, "Please enter your name.").required("Alumni name is required."),
  graduationYear: Yup.number()
    .typeError("Please enter a valid year.")
    .integer("Please enter a valid year.")
    .min(1990, "Please enter a valid year.")
    .max(new Date().getFullYear(), "Please enter a valid year.")
    .required("Graduation year is required."),
  employerName: Yup.string().trim().min(2, "Please enter the name.").required("Employer/University/Business-Startup name is required."),
  employerAddress: Yup.string().trim().min(3, "Please enter a valid address.").required("Employer/University/Business-Startup address is required."),
  currentPosition: Yup.string().trim().min(2, "Please enter your current position.").required("Current position is required."),
  email: Yup.string().trim().email("Please enter a valid email address.").required("Email is required."),
  telephone: Yup.string().trim().min(7, "Please enter a valid telephone number.").required("Telephone is required."),
  answers: Yup.object(
    Object.fromEntries(
      PEO_ITEMS.flatMap((item, index) => [
        [questionKey(index), Yup.string().required("Required")],
        ...(item.detail
          ? [[detailKey(index), Yup.string().trim().when(questionKey(index), { is: "Yes", then: (schema) => schema.required("Please provide the details.") })]]
          : []),
      ])
    )
  ),
  comments: Yup.string().trim(),
  signature: Yup.string().trim().min(2, "Please type your name as signature.").required("Signature is required."),
});

function FieldError({ name }) {
  return <ErrorMessage name={name} component="p" className="mt-1.5 text-xs font-medium text-red-600" />;
}

const inputClasses =
  "mt-2 w-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0a2a5e] focus:ring-2 focus:ring-[#0a2a5e]/10";

const PROFILE_FIELDS = [
  { name: "alumniName", label: "Alumni Name", type: "text", placeholder: "Full name" },
  { name: "graduationYear", label: "Graduation Year", type: "number", placeholder: "e.g. 2022" },
  { name: "employerName", label: "Employer/University/Business-Startup Name", type: "text", placeholder: "Organization name" },
  { name: "employerAddress", label: "Employer/University/Business-Startup Address", type: "text", placeholder: "Organization address" },
  { name: "currentPosition", label: "Current Position", type: "text", placeholder: "Job title / role", span: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { name: "telephone", label: "Telephone", type: "tel", placeholder: "Phone number" },
];

export default function AlumniSurvey() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Students · Alumni</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">2026-Alumni survey form-PEO</h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200/80">BE-Electrical Engineering at Sukkur IBA University</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <Reveal className="bg-white p-7 shadow-sm sm:p-9">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-amber-400 text-[#071f47]">
              <ClipboardCheck size={24} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Alumni Survey Form</p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Program Educational Objectives</h2>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={surveySchema}
            onSubmit={(_, { setStatus, resetForm }) => {
              setStatus("Thank you for completing the alumni survey!");
              resetForm();
            }}
          >
            {({ values, status, isSubmitting }) => (
              <Form className="mt-7 space-y-8" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  {PROFILE_FIELDS.map(({ name, label, type, placeholder, span }) => (
                    <label key={name} className={`block text-sm font-semibold text-[#071f47] ${span ? "sm:col-span-2" : ""}`} htmlFor={name}>
                      {label}
                      <Field id={name} name={name} type={type} placeholder={placeholder} className={inputClasses} />
                      <FieldError name={name} />
                    </label>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">PEO Evaluation</p>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#0a2a5e] text-white">
                          <th className="w-24 px-3 py-3 text-xs font-semibold uppercase tracking-wider">PEOs</th>
                          <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wider">Description</th>
                          <th colSpan={YES_NO.length} className="w-36 px-2 py-3 text-center text-xs font-semibold uppercase tracking-wider">YES/NO</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PEO_ITEMS.map((item, index) => {
                          const fieldName = `answers.${questionKey(index)}`;
                          const detailName = `answers.${detailKey(index)}`;
                          return (
                            <tr key={fieldName} className={`align-top ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                              <td className="border-t border-slate-200 px-3 py-4 text-sm font-semibold text-slate-500">{item.peo}</td>
                              <td className="border-t border-slate-200 px-3 py-4 text-sm leading-6 text-slate-700">
                                {item.text}
                                {item.detail && values.answers[questionKey(index)] === "Yes" && (
                                  <label className="mt-3 block text-xs font-semibold text-[#071f47]" htmlFor={detailName}>
                                    {item.detail.label}
                                    <Field id={detailName} name={detailName} type="text" placeholder={item.detail.placeholder} className={inputClasses} />
                                    <FieldError name={detailName} />
                                  </label>
                                )}
                                <FieldError name={fieldName} />
                              </td>
                              {YES_NO.map((option) => (
                                <td key={option} className="border-t border-slate-200 px-2 py-4 text-center">
                                  <label className="inline-flex cursor-pointer flex-col items-center gap-1 text-xs font-medium text-slate-600">
                                    <Field type="radio" name={fieldName} value={option} className="h-4 w-4 accent-[#0a2a5e]" />
                                    {option}
                                  </label>
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid gap-5 border-t border-slate-200 pt-6">
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="comments">
                    Comments
                    <Field id="comments" name="comments" as="textarea" rows={5} placeholder="Your comments" className={`${inputClasses} resize-y`} />
                    <FieldError name="comments" />
                  </label>
                  <label className="block text-sm font-semibold text-[#071f47] sm:max-w-sm" htmlFor="signature">
                    Signature (type full name)
                    <div className="relative">
                      <Field id="signature" name="signature" type="text" placeholder="Type your name to sign" className={`${inputClasses} pr-10`} />
                      <PenLine size={16} strokeWidth={1.8} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                    <FieldError name="signature" />
                  </label>
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#071f47] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a2a5e] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send size={17} strokeWidth={1.8} />
                    Submit survey
                  </button>
                  {status && (
                    <p className="text-sm font-medium text-emerald-700" role="status">
                      {status}
                    </p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </Reveal>
      </section>
    </main>
  );
}
