import React from "react";
import postProfilePhoto from '../assets/post-profile-photo.svg';
import '../PostScreen/post-profile.css';

const PostProfile = () => {
    return (
        <>
        <div id="post-profile">
            <div className="post-profile-photo">
                <img src={postProfilePhoto} alt="Profile" />
            </div>
            <div className="post-profile-name">
                도넛의 왕
            </div>
            
        </div>
        <hr />
        </>
    );
}

export default PostProfile;
