// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

function SendOtp() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      // Use the provided API URL to send OTP
      const response = await axios.post('https://otp-email-server.vercel.app/api/send-otp', { email });
      setMessage(response.data.message); // Display success message
    } catch (error) {
      // Handle errors and show appropriate message
      setMessage(error.response ? error.response.data.message : 'Error sending OTP');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Send OTP</h2>
      <form onSubmit={handleSendOtp}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Send OTP
        </button>
      </form>
      {message && (
        <div 
          style={{ marginTop: '20px', padding: '10px', border: '1px solid #000', borderRadius: '4px', backgroundColor: '#f0f0f0' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default SendOtp;
