import React, { useState } from 'react';
import { Button } from '../ui/button';
import emailjs from 'emailjs-com';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const sendFeedback = (e) => {
    e.preventDefault();

    if (!name || !email || !feedback) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    emailjs
      .send(
        'service_lapjaqg', 
        'template_01',
        {
          from_name: name,
          from_email: email,
          message: feedback
        },
        'Rlw1rNlwL6EZWJuJJ'
      )
      .then((response) => {
        console.log('Success!', response.status, response.text);
        alert('Feedback sent successfully!');
        setFeedback('');
        setName('');
        setEmail('');
      })
      .catch((err) => {
        console.error('Failed to send feedback:', err);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="w-full mt-12">
      <h2 className="text-4xl font-bold text-center pb-5">Your Feedback Matters!</h2>
      <form onSubmit={sendFeedback} className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        
        {/* Name Input */}
        <input
          type="text"
          className="w-full p-3 mb-4 border rounded-lg"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email Input */}
        <input
          type="email"
          className="w-full p-3 mb-4 border rounded-lg"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Feedback Input */}
        <textarea
          className="w-full p-4 mb-4 border rounded-lg shadow-sm"
          rows="4"
          placeholder="Share your thoughts..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-4">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
}

export default FeedbackForm;
