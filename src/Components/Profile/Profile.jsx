import React from 'react'
import { SmallHeading } from '../Typography/Typography';
import "./Profile.scss";

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__img'>
                <img src='https://avatars.githubusercontent.com/u/65955563?v=4' alt='profile' id='profile__img' />
            </div>
            <div className='profile__details'>
                <SmallHeading title='Mo_renike_' id="twitter" />
                <SmallHeading title='mo-renike' id="slack" />
            </div>
        </div>
    )
}

export default Profile;