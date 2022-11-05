import React from 'react';
import slack from "../../Assets/slack.png";
import github from "../../Assets/github.png";

const Socials = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
            }}
        >
            <img style={{ margin: "0 .4rem" }} src={slack} alt="slack" />
            <img style={{ margin: "0 .4rem" }} src={github} alt="github" />
        </div>
    )
}

export default Socials;