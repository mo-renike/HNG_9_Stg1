import React from "react";
import { Heading } from "../../Components/Typography/Typography";
import "./Contact.scss";

const Contact = () => {

    // form validation    
    const [form, setForm] = React.useState({
        fname: "",
        lname: "",
        email: "",
        message: "Hello Morenike, hope you are doing great. Let us collaborate on project XYZ.",
    });

    const [errors, setErrors] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        check: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const validate = (form) => {
        let errors = {};
        if (!form.fname) {
            errors.firstname = "First name is required";
            document.getElementById("first_name").classList.add("input_error");
        } else {
            errors.message = "";
            document.getElementById("first_name").classList.remove("input_error");
        }
        if (!form.lname) {
            errors.lastname = "Last name is required";
            document.getElementById("last_name").classList.add("input_error");
        } else {
            errors.message = "";
            document.getElementById("last_name").classList.remove("input_error");
        }
        if (!form.email) {
            errors.email = "Email is required";
            document.getElementById("email").classList.add("input_error");
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "Email address is invalid";
            document.getElementById("email").classList.remove("input_error");
        } else {
            errors.message = "";
            document.getElementById("email").classList.remove("input_error");
        }
        if (!form.message) {
            errors.message = "Message is required";
            document.getElementById("message").classList.add("input_error");
        } else {
            errors.message = "";
            document.getElementById("message").classList.remove("input_error");
        }
        // if  checkbox is not checked
        if (!document.getElementById("checkbox").checked) {
            errors.check = "Please check the box";
            document.getElementById("checkbox").classList.add("input_error");
        } else {
            errors.check = "";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(form));
        clearForm();
    };


    const clearForm = () => {
        if (Object.values(errors).every((x) => x === "")) {
            setForm({
                fname: "",
                lname: "",
                email: "",
                message: "",
            });
            document.getElementById("checkbox").checked = false;
        };
    };


    return (
        <div className="contact">
            <form onSubmit={handleSubmit} id="form" noValidate className="contact__form">
                <div className="contact__header">
                    <Heading title="Contact Me" />
                    <p>
                        Hi there, contact me to ask me about anything you have in mind
                    </p>
                </div>
                <div className="d-f">
                    <div className="contact__form__group">
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            name="fname"
                            id="first_name"
                            value={form.fname}
                            onChange={handleChange}
                        />
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                    </div>
                    <div className="contact__form__group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            id="last_name"
                            value={form.lname}
                            onChange={handleChange}
                        />
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                    </div>
                </div>
                <div className="contact__form__group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="contact__form__group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <div className="contact__form__group-check">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        You agree to providing your data to Morenike Oyewole who may
                        contact you
                    </label>
                    {errors.check && <p className="error">{errors.check}</p>}
                </div>
                <div className="contact__form__group">
                    <button disabled={""} id="btn__submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
