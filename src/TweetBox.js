import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Jonathan Slick',
            username: 'Slick Willy',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://solarsystem.nasa.gov/internal_resources/3841/'

        });

        setTweetMessage ("");
        setTweetImage("");

    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://solarsystem.nasa.gov/internal_resources/3841/"/>
                    <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text"></input>
                    
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}

                className="tweetBox__imageInput" 
                placeholder="Enter image URL" 
                type="text"></input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
