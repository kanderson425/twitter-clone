import React from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div clasName="post">
      <div className="post__avatar">
        <Avatar src="https://static.onecms.io/wp-content/uploads/sites/47/2020/09/03/brown-puppy-sssxyuZape8-unsplash-2000.jpg" />
      </div>
      <div className="post__body">
        <div classNamee="post__header">
          <div className="post__headerText">
            <h3>
              Kyle Anderson{" "}
              <span>
                <VerifiedUserIcon className="post__badge" /> @kanderson425
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter Clone with React</p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default Post;
