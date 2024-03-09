import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/accountsActions';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const userLoginUserInfo = useSelector((state) => state.userLoginUserInfo);
  const redirect = '/'; 

  useEffect(() => {
    if (userInfo || userLoginUserInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, userLoginUserInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
        setMessage("Please fill in all fields");
        return;
      }
  
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }
  
      setMessage(""); 
  
      console.log("Submitting registration form...");
  
      const response = await dispatch(register(username, email, password));
      console.log("Response from register action:", response);
  
      if (response && response.user_id) { 
        const { user_id } = response;
        console.log("Redirecting to OTP verification page with userId:", user_id);
        navigate(`/verify-otp/${user_id}`); 
      } else {
        setMessage("Failed to register. Please try again.");
      }
    } catch (error) {
      setMessage(error.response.data.message || "An error occurred during registration"); 
      console.error("Error during registration:", error);
    }
  };
  

  return (
    <div>
      <h1>Register</h1>
      {message && <div>{message}</div>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
