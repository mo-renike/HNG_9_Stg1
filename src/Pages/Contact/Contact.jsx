import React from "react";
import { Heading } from "../../Components/Typography/Typography";
import "./Contact.scss";

const Contact = () => {

    // form validation    
    //const [isDisabled, setIsDisabled] = React.useState(true);
    const [form, setForm] = React.useState({
        fname: "",
        lname: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    });
    // clear form after submitting if no errors are present
    React.useEffect(() => {
        if (Object.keys(errors).length === 0) {
            alert("Form submitted successfully");
            setForm({
                fname: "",
                lname: "",
                email: "",
                message: ""
            });
        }
        // disable submit button if there are errors 
        // if (form.fname && form.lname && form.email && form.message) {
        //     setIsDisabled(false);
        // } else {
        //     setIsDisabled(true);
        // }
    }, [errors]);

    // disable submit button if form is invalid



    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange(e);
        setErrors(validate(form));
    };

    const validate = (form) => {
        let errors = {};
        // COMMENTED THESE ONES OUT COZ THEY NOT IN THE DESIGN
        // if (!form.fname) {
        //     errors.firstname = "First name is required";
        // }
        // if (!form.lname) {
        //     errors.lastname = "Last name is required";
        // }
        // if (!form.email) {
        //     errors.email = "Email is required";
        // } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        //     errors.email = "Email address is invalid";
        // }
        if (!form.message) {
            errors.message = "Message is required";
        }

        return errors;
    };



    return (
        <div className="contact">
            {/* build form */}
            <Heading>Contact</Heading>
            <form onSubmit={handleSubmit} noValidate className="contact__form">
                <div className="contact__header">
                    <Heading title="Contact Me" />
                    <p>Hi there, contact me to ask me about anything you have in mind</p>
                </div>
                <div className="d-f">
                    <div className="contact__form__group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="fname" id="first_name" value={form.fname} onChange={handleChange} />
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                    </div>
                    <div className="contact__form__group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name="lname" id="last_name" value={form.lname} onChange={handleChange} />
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                    </div></div>
                <div className="contact__form__group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="contact__form__group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" value={form.message} onChange={handleChange} />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <div className="contact__form__group-check">
                    <input type="checkbox" name="checkbox" id="checkbox" required="required" />
                    <label htmlFor="checkbox">You agree to providing your data to Morenike Oyewole who may contact you</label>
                </div>
                <div className="contact__form__group">
                    {/* disable button if there are errors  */}
                    <button disabled={""} id="btn__submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
