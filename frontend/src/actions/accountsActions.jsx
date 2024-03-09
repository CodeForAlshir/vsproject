import {
    ACCOUNTS_LOGIN_REQUEST,
    ACCOUNTS_LOGIN_SUCCESS,
    ACCOUNTS_LOGIN_FAIL,
    ACCOUNTS_LOGOUT,
    ACCOUNTS_REGISTER_REQUEST,
    ACCOUNTS_REGISTER_SUCCESS,
    ACCOUNTS_REGISTER_FAIL,
    ACCOUNTS_VERIFY_OTP_REQUEST,
    ACCOUNTS_VERIFY_OTP_SUCCESS,
    ACCOUNTS_VERIFY_OTP_FAIL,
    ACCOUNTS_RESEND_OTP_REQUEST,
    ACCOUNTS_RESEND_OTP_SUCCESS,
    ACCOUNTS_RESEND_OTP_FAIL,
  } from "../constants/accountsConstants";
  import axios from 'axios';
  
  
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
  });
  
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: ACCOUNTS_LOGIN_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/accounts/login/",
        { username: email, password: password },
        config
      );
      dispatch({
        type: ACCOUNTS_LOGIN_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ACCOUNTS_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: ACCOUNTS_LOGOUT });
  };
  
  export const register = (username, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: ACCOUNTS_REGISTER_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/accounts/register/",
        { username, email, password },
        config
      );
  
      dispatch({
        type: ACCOUNTS_REGISTER_SUCCESS,
        payload: data,
      });
  
      return data;
    } catch (error) {
      dispatch({
        type: ACCOUNTS_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
  
      return null;
    }
  };
  
  export const verifyOTP = (userId, otp) => async (dispatch) => {
    try {
      dispatch({
        type: ACCOUNTS_VERIFY_OTP_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/accounts/verify/",
        { user_id: userId, otp: otp },
        config
      );
  
      dispatch({
        type: ACCOUNTS_VERIFY_OTP_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: ACCOUNTS_VERIFY_OTP_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
  
  export const resendOTP = (userId) => async (dispatch) => {
    try {
      dispatch({
        type: ACCOUNTS_RESEND_OTP_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/accounts/resend/",
        { user_id: userId },
        config
      );
  
      dispatch({
        type: ACCOUNTS_RESEND_OTP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("Error occurred during resendOTP:", error); // Add this line
      dispatch({
        type: ACCOUNTS_RESEND_OTP_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };