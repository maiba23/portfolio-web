import React, { useState } from "react";
import "./Contacts.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  // Below it is a hook for the message to send.
  // By default it's going to be an empty string.
  const [successMessage, setSuccessMessage] = useState("");
  // A variable which is destructuring few components from the useForm hook.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_8UJgVe3ZqmUs6G0OJpwzi";

  // Below 'r' basically means 'reset'. This is just a name I chose.
  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      // Adding an object with properties: name, phone, email, etc.
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    // Check and look more on this send() function in documentation.
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Email sent successfully!");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
    // Adding some error text information using backticks ``.
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Write to me and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register("phone", {
                    required: "Please enter your phone",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("subject", {
                    required: "Please enter your subject",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Write a message"
                  name="description"
                  aria-invalid={errors.description ? "true" : "false"}
                  {...register("description", {
                    required: "Please enter your description",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="contact-btn contact-btn" type="submit">
                send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
