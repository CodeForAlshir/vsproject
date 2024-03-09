import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; 
import { verifyOTP, resendOTP } from '../actions/accountsActions';

function VerifyOtp() {
  const { userId } = useParams(); 
  const [otp, setOTP] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(verifyOTP(userId, otp));
      navigate("/login");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleResend = () => {
    dispatch(resendOTP(userId));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="otp">Enter OTP:</label>
        <br />
        <input 
          type="text" 
          id="otp" 
          value={otp} 
          onChange={(e) => setOTP(e.target.value)} 
        />
        <br />
        <button type="submit">Verify OTP</button>
      </form>
      <br />
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
}

export default VerifyOtp;