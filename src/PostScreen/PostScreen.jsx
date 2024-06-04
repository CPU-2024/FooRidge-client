import React from "react";
import postScreenImage from "../assets/post-screen.svg";
import PostProfile from "./post-profile";
import PostDetail from "./post-detail";
import PostLocation from "./post-location";

const PostScreen = () =>{
    return (
        <div id="post-screen" style={{ overflow: 'auto', height: '100vh', width:'50vh'}}>
            <div className="post-big-image">
                <img src={postScreenImage} alt="" />
            </div>
            <div className="post-profile">
                <PostProfile />
            </div>
            <div className="post-detail">
                <PostDetail />
            </div>
            <div className="post-location">
                <PostLocation />
            </div>
        </div>
    )
}

export default PostScreen;
