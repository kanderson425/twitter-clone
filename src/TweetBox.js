import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://static.onecms.io/wp-content/uploads/sites/47/2020/09/03/brown-puppy-sssxyuZape8-unsplash-2000.jpg" />
          <input placeholder="What's happening?" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
