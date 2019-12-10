import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faHeart, faEllipsisH, faReply } from '@fortawesome/free-solid-svg-icons';


function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <NameWithHandle /><Time />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionButton />
                </div>
            </div>
        </div>
    )
}


var testTweet = {
    message: "Something about CacheStorage.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    like: 2,
    retweets: 0,
    timestamp: "2013-07-30 21:24:37"
}

const Message = ({ text }) => (
    <div className="message">{text}</div>
);
const Time = () => (
    <span className="time">{`3h ago`}</span>
);
const ReplyButton = () => (
    <span className="buttons reply-button ">
        <FontAwesomeIcon icon={faReply} /*color={"OliveDrab "}*/ />
    </span>

);
const RetweetButton = () => (
    <span className="buttons retweet-button">
        <FontAwesomeIcon icon={faRetweet} /*color={"Tomato "}*/ />
    </span>
);
const LikeButton = () => (
    <span className="buttons like-button">
        <FontAwesomeIcon icon={faHeart} /*color={"LightSteelBlue"}*/ />
    </span>
);
const MoreOptionButton = () => (
    <span className="buttons more-options-button">
        <FontAwesomeIcon icon={faEllipsisH} /*color={"DarkSalmon"}*/ />
    </span>
);
const NameWithHandle = () => (
    <span>
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
    </span>
);
function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    )
}



ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));

