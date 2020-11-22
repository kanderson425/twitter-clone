import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    console.log("sendTweet function hit");
    console.log("This is the tweetMessage " + tweetMessage);

    db.collection("posts").add({
      displayName: "Kyle Anderson",
      username: "kanderson425",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://static.onecms.io/wp-content/uploads/sites/47/2020/09/03/brown-puppy-sssxyuZape8-unsplash-2000.jpg",
      timestamp: firebase.firestore.Timestamp.now(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://static.onecms.io/wp-content/uploads/sites/47/2020/09/03/brown-puppy-sssxyuZape8-unsplash-2000.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImage}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
