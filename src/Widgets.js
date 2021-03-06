import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton, 
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">

            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>Interesting channels</h2>

                <TwitterTweetEmbed tweetId={"1295733725930508290"}/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="realDonaldTrump"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.cnn.com"}
                    options={{text: "#what's up fam", via: "CNN"}}
                />
            </div>

        </div>
    )
}

export default Widgets
