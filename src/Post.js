import React, { forwardRef } from "react";
import "./Post.css";
import db from "./firebase";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatButtonOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const Post = forwardRef(
  (
    { displayName, username, verified, timestamp, text, image, avatar, key },
    ref
  ) => {
    const tweetDelete = (post) => {
      const postsRef = db.collection("posts");
      const query = postsRef
        .where("text", "==", text)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            const deleteDoc = db.collection("posts").doc(doc.id).delete();
          });
        })
        .catch((err) => {
          console.log("Error getting documents:" + err);
        });
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatButtonOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            <DeleteOutlineOutlinedIcon
              className="post__footer__deleteButton"
              fontSize="small"
              onClick={tweetDelete}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
