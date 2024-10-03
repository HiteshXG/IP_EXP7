import React, { useState } from 'react';
import './App.css'; // Ensure this matches your CSS file name

const TransparentCard = ({ children }) => {
  return (
    <div className="transparent-card">
      {children}
    </div>
  );
};

const FeedbackForm = () => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { username, comment });
    setUsername('');
    setComment('');
  };

  return (
    <div className="feedback-container">
      <TransparentCard>
        <h2 className="feedback-title">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="input-label">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="comment" className="input-label">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="textarea-field"
              placeholder="Enter your feedback"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>
      </TransparentCard>
    </div>
  );
};

export default FeedbackForm;
