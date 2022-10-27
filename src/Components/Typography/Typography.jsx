import React from "react";
import "./Typography.scss";

//main heading component
export const Heading = ({ title }) => {
    return <h1 className="heading">{title}</h1>;
};

// small heading component
export const SmallHeading = ({ title, id, className }) => {
    return <h3 id={id} className="small-heading">{title}</h3>;
};
// body text component
export const BodyText = ({ text }) => {
    return <p className="body-text">{text}</p>;
};
