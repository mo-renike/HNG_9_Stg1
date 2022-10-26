import React from "react";
import "./Typography.scss";

//main heading component
export const Heading = ({ title }) => {
    return <h1 className="heading">{title}</h1>;
};

//sub heading component
export const SubHeading = ({ title }) => {
    return <h2 className="sub-heading">{title}</h2>;
};

// small heading component
export const SmallHeading = ({ title }) => {
    return <h3 className="small-heading">{title}</h3>;
};
// body text component
export const BodyText = ({ text }) => {
    return <p className="bodyText">{text}</p>;
};
