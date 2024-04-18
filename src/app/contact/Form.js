"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: { status: false, reason: "" },
    email: { status: false, reason: "" },
    subject: { status: false, reason: "" },
    message: { status: false, reason: "" },
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    const isNameValid = formData.name.length >= 2;
    const isSubjectValid = formData.subject.length >= 4;
    const isMessageValid = formData.message.length >= 12;
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      formData.email
    );
    const errors = {
      name: {
        status: !formData.name || !isNameValid,
        reason: !formData.name
          ? "Fill out the name field."
          : !isNameValid
          ? "Your name must consist of at least 2 characters."
          : "",
      },
      email: {
        status: !formData.email || !isEmailValid,
        reason: !formData.email
          ? "Fill out the email field."
          : !isEmailValid
          ? "Invalid email format."
          : "",
      },
      subject: {
        status: !formData.subject || !isSubjectValid,
        reason: !formData.subject
          ? "Fill out the subject field."
          : !isSubjectValid
          ? "Your subject must consist of at least 4 characters"
          : "",
      },
      message: {
        status: !formData.message || !isMessageValid,
        reason: !formData.message
          ? "Fill out the message field."
          : !isMessageValid
          ? "Your message must consist of at least 12 characters"
          : "",
      },
    };

    return {
      errors,
      isValid: Object.values(errors).every((field) => !field.status),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateForm();
    if (isValid) {
      setSending(true);
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((res) => setSuccessMsg(res.message))
        .then(() => {
          setFormError({
            name: { status: false, reason: "" },
            email: { status: false, reason: "" },
            subject: { status: false, reason: "" },
            message: { status: false, reason: "" },
          });
        })
        .catch((err) => setErrorMsg(err))
        .finally(() => {
          setSending(false);
        });
    } else {
      setFormError(errors);
    }
  };

  return (
    <form
      className="shadow-xl space-y-5 bg-white rounded-xl px-4 md:px-8 py-5 w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[25rem]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-medium md:text-3xl text-[#17575c]">
        Get in touch with us.
      </h2>
      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          id="name"
          placeholder="Your name"
          className="border border-1 px-3 py-1 sm:py-2 rounded focus:outline-none"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {formError.name.status && (
          <p className="text-sm mt-1 text-red-500">{formError.name.reason}</p>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          id="email"
          placeholder="You@mail.com"
          className="border border-1 px-3 py-1 sm:py-2 rounded focus:outline-none"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {formError.email.status && (
          <p className="text-sm mt-1 text-red-500">{formError.email.reason}</p>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="subject" className="font-medium">
          Subject
        </label>
        <input
          id="subject"
          placeholder="The subject is..."
          className="border border-1 px-3 py-1 sm:py-2 rounded focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
        {formError.subject.status && (
          <p className="text-sm mt-1 text-red-500">
            {formError.subject.reason}
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          id="message"
          placeholder="How can we help?"
          className="border border-1 px-3 py-1 sm:py-2 rounded focus:outline-none resize-none h-24"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        {formError.message.status && (
          <p className="text-sm mt-1 text-red-500">
            {formError.message.reason}
          </p>
        )}
      </div>
      {errorMsg && <p className="text-sm mt-1 text-red-500">{errorMsg}</p>}
      {successMsg && (
        <p className="text-sm mt-1 text-green-600">{successMsg}</p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="border-2 border-[#17575c] text-[#17575c] hover:bg-[#17575c] hover:text-white transition-all duration-300 font-medium py-3 rounded w-full"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
