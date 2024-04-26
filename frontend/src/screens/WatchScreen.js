import React from 'react';
import { Container } from 'react-bootstrap';

import videoSource from '../Videos/vid1.mp4';
import './watch.css'; // Import your CSS file for styling

function WatchScreen() {
  return (
    <>
      <Container>
        <video controls width="100%" height="auto">
          <source src={videoSource} type="video/mp4" />
          {/* Include fallback content in case the video cannot be loaded */}
          Your browser does not support the video tag.
        </video>
      </Container>

      {/* Add a title for the video */}
      <h1>Nature Trip</h1>

      {/* Add the heart container for liking */}
      <div title="Like" className="heart-container">
        <input id="Give-It-An-Id" className="checkbox" type="checkbox" />
        <div className="svg-container">
          {/* Include SVG icons for like button */}
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-outline" viewBox="0 0 24 24">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg-filled" viewBox="0 0 24 24">
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="svg-celebrate">
            <polygon points="10,10 20,20"></polygon>
            <polygon points="10,50 20,50"></polygon>
            <polygon points="20,80 30,70"></polygon>
            <polygon points="90,10 80,20"></polygon>
            <polygon points="90,50 80,50"></polygon>
            <polygon points="80,80 70,70"></polygon>
          </svg>
        </div>
      </div>

      {/* Comment section */}
      <div id="respond">
        <h3>Leave a Comment</h3>
        <form action="post_comment.php" method="post" id="commentform">
          {/* Comment textarea */}
          <label htmlFor="comment" className="required">Your message</label>
          <textarea name="comment" id="comment" rows="10" tabIndex="4" required="required"></textarea>

          {/* Hidden input for comment_post_ID */}
          <input type="hidden" name="comment_post_ID" value="1" id="comment_post_ID" />

          {/* Submit button */}
          <input name="submit" type="submit" value="Submit comment" />
        </form>
      </div>
    </>
  );
}

export default WatchScreen;
