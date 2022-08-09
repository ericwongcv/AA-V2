import { useDispatch } from 'react-redux';
import { postTweet } from './store/tweet';
import { useState } from 'react';

const CreateTweet = () => {
    const dispatch = useDispatch();
    const [tweetValue, setTweetValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (tweetValue) {
            const message = {
                "message": tweetValue
            }

            dispatch(postTweet(message));
        }
    }

    return (
        <form className="tweet-form" onSubmit={handleSubmit}>
            <label htmlFor="tweet">Tweet:</label><br />
            <textarea
                id="tweetarea"
                name="tweetarea"
                rows="4"
                cols="50"
                value={tweetValue}
                onChange={e => setTweetValue(e.target.value)}
            /><br />
            <button type="submit">Submit Tweet</button>
        </form>
    )
};

export default CreateTweet;
