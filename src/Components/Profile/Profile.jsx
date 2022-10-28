import React from "react";
import { SmallHeading } from "../Typography/Typography";
import "./Profile.scss";
import dp from "../../Assets/profile.jpg";

const Profile = () => {

    return (
        <div className="profile">
            <div className="profile__img">
                <img src={dp} alt="profile" id="profile__img" />
            </div>
            <div className="profile__details">
                <SmallHeading title="Mo_renike_" id="twitter" />
                <SmallHeading title="mo-re-ni-ke" id="slack" />
            </div>
        </div>
    );
};

export default Profile;
