import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipboardCheck, PenLine, Send } from "lucide-react";
import Reveal from "../shared/reveal.jsx";

const RATING_OPTIONS = ["Excellent", "Very Good", "Good", "Average", "Poor"];

const PLO_ITEMS = [
  "Possess required amount of knowledge of electrical engineering fundamentals and have demonstrated appropriate technical skills required",
  "Have demonstrated problem solving skills",
  "Possess the ability to design a system component or process",
  "Possess the ability to investigate the complex engineering problems to derive valid conclusions",
  "Have demonstrated the appropriate use of electrical engineering hardware and software tools",
  "Have an appreciation for the impact of engineering solutions to the society",
  "Have an appreciation of sustainable echo friendly solutions",
  "Practices work ethics and professionalism",
  "Works comfortably in a team and as an individual",
  "Possess effective verbal and written communication skills",
  "Able to manage the projects assigned successfully",
  "Interest in learning and professional development",
];

const initialValues = {
  hostOrganization: "",
  address: "",
  contact: "",
  internName: "",
  durationFrom: "",
  durationTo: "",
  ratings: Object.fromEntries(PLO_ITEMS.map((_, index) => [`plo${index + 1}`, ""])),
  supervisorName: "",
  designation: "",
  signature: "",
};

const surveySchema = Yup.object({
  hostOrganization: Yup.string().trim().min(2, "Please enter the organization name.").required("Host organization is required."),
  address: Yup.string().trim().min(3, "Please enter a valid address.").required("Address is required."),
  contact: Yup.string().trim().min(3, "Please enter contact details.").required("Contact is required."),
  internName: Yup.string().trim().min(2, "Please enter the intern's name.").required("Intern name is required."),
  durationFrom: Yup.string().required("Start date is required."),
  durationTo: Yup.string().required("End date is required."),
  ratings: Yup.object(
    Object.fromEntries(PLO_ITEMS.map((_, index) => [`plo${index + 1}`, Yup.string().required("Required")]))
  ),
  supervisorName: Yup.string().trim().min(2, "Please enter the supervisor's name.").required("Supervisor's name is required."),
  designation: Yup.string().trim().min(2, "Please enter a designation.").required("Designation is required."),
  signature: Yup.string().trim().min(2, "Please type your name as signature.").required("Signature is required."),
});

function FieldError({ name }) {
  return <ErrorMessage name={name} component="p" className="mt-1.5 text-xs font-medium text-red-600" />;
}

const inputClasses =
  "mt-2 w-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0a2a5e] focus:ring-2 focus:ring-[#0a2a5e]/10";

export default function InternshipFeedbackSurvey() {
  return (
    <main className="bg-slate-50 text-slate-700">
      <section className="relative overflow-hidden bg-[#071f47] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Students · Internships</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Internship Feedback Survey</h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200/80">Mapped to Program Learning Outcomes (PLOs) — B.E Electrical Engineering Program at Sukkur IBA</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              We appreciate your contribution to the professional growth and development of our students. The aim of this survey is
              to obtain employer feedback on quality of our Electrical Engineering Program. Please share your opinion about the
              following questions.
            </p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Intrnship Feedback Form</p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">Evaluate the intern</h2>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={surveySchema}
            onSubmit={(_, { setStatus, resetForm }) => {
              setStatus("Thank you for your time in completing this evaluation!");
              resetForm();
            }}
          >
            {({ status, isSubmitting }) => (
              <Form className="mt-7 space-y-8" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="hostOrganization">
                    Host Organization
                    <Field id="hostOrganization" name="hostOrganization" type="text" placeholder="Organization name" className={inputClasses} />
                    <FieldError name="hostOrganization" />
                  </label>
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="address">
                    Address
                    <Field id="address" name="address" type="text" placeholder="Organization address" className={inputClasses} />
                    <FieldError name="address" />
                  </label>
                  <label className="block text-sm font-semibold text-[#071f47] sm:col-span-2" htmlFor="contact">
                    Contact
                    <Field id="contact" name="contact" type="text" placeholder="Supervisor's phone / email" className={inputClasses} />
                    <FieldError name="contact" />
                  </label>
                </div>

                <div className="grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-3">
                  <label className="block text-sm font-semibold text-[#071f47] sm:col-span-1" htmlFor="internName">
                    Intern Name
                    <Field id="internName" name="internName" type="text" placeholder="Intern's full name" className={inputClasses} />
                    <FieldError name="internName" />
                  </label>
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="durationFrom">
                    Duration (From)
                    <Field id="durationFrom" name="durationFrom" type="date" className={inputClasses} />
                    <FieldError name="durationFrom" />
                  </label>
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="durationTo">
                    Duration (To)
                    <Field id="durationTo" name="durationTo" type="date" className={inputClasses} />
                    <FieldError name="durationTo" />
                  </label>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">PLO Evaluation</p>
                  <p className="mt-2 text-sm text-slate-600">Rate the Sukkur IBA students who have worked under you against each Program Learning Outcome below.</p>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#0a2a5e] text-white">
                          <th className="w-8 px-3 py-3 text-xs font-semibold uppercase tracking-wider">#</th>
                          <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wider">The Sukkur IBA students who have worked under me</th>
                          {RATING_OPTIONS.map((option) => (
                            <th key={option} className="px-2 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                              {option}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {PLO_ITEMS.map((text, index) => {
                          const ploNumber = index + 1;
                          const fieldName = `ratings.plo${ploNumber}`;
                          return (
                            <tr key={ploNumber} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                              <td className="border-t border-slate-200 px-3 py-4 text-sm font-semibold text-slate-500">{ploNumber}</td>
                              <td className="border-t border-slate-200 px-3 py-4 text-sm leading-6 text-slate-700">{text}</td>
                              {RATING_OPTIONS.map((option) => (
                                <td key={option} className="border-t border-slate-200 px-2 py-4 text-center">
                                  <Field type="radio" name={fieldName} value={option} className="h-4 w-4 accent-[#0a2a5e]" aria-label={`${option} for PLO ${ploNumber}`} />
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-3">
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="supervisorName">
                    Supervisor&apos;s Name
                    <Field id="supervisorName" name="supervisorName" type="text" placeholder="Full name" className={inputClasses} />
                    <FieldError name="supervisorName" />
                  </label>
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="designation">
                    Designation
                    <Field id="designation" name="designation" type="text" placeholder="Job title" className={inputClasses} />
                    <FieldError name="designation" />
                  </label>
                  <label className="block text-sm font-semibold text-[#071f47]" htmlFor="signature">
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
                    Submit evaluation
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

        <p className="mt-6 text-center text-xs text-slate-500">
          Please return this form to Student Affairs Office, CDC Sukkur IBA University.
        </p>
      </section>
    </main>
  );
}
